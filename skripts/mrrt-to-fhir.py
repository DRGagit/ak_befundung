#!/usr/bin/env python3
import urllib
import requests
import sys
import json
from html.parser import HTMLParser

if len(sys.argv) != 2:
    sys.stderr.write("Usage: " + sys.argv[0] + " <MRRT template file>\n");
    exit(1)

input_file = sys.argv[1]

class MrrtHtmlDocument:
    def __init__(self):
        self.labels = { }
        self.root = None
        self.body = None
        self.title = None

class MrrtHtmlElement:
    def __init__(self, document, position, parent, tag, attributes):
        self.document = document
        self.position = position
        self.parent = parent
        self.tag = tag
        self.attributes = {}
        for (name, value) in attributes:
            self.attributes[name] = value
        self.children = []
    def get_text_content(self):
        if len(self.children) == 1 and isinstance(self.children[0], str):
            return self.children[0]
        else:
            raise Exception("Element content of <" + self.tag + "> at " + str(self.position[0]) + ":" + str(self.position[1]) + " cannot be converted to plain text")

SELF_CLOSING_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']

class MrrtHtmlParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.document = MrrtHtmlDocument()
        self.current_element = None
    def handle_starttag(self, tag, attributes):
        if tag in SELF_CLOSING_TAGS:
            self.handle_startendtag(tag, attributes)
            return
        if self.current_element != None and len(self.current_element.children) > 0 and isinstance(self.current_element.children[-1], str):
            self.current_element.children[-1] = self.current_element.children[-1].strip()
        elem = MrrtHtmlElement(self.document, self.getpos(), self.current_element, tag, attributes)
        if self.current_element == None:
            if self.document.root == None:
                self.document.root = elem
        else:
            self.current_element.children.append(elem)
        self.current_element = elem
        match tag:
            case "label":
                self.document.labels[elem.attributes["for"]] = elem
            case "body":
                if self.document.body == None:
                    self.document.body = elem
            case "title":
                if self.document.title == None:
                    self.document.title = elem
    def handle_endtag(self, tag):
        if self.current_element == None or self.current_element.tag != tag:
            (l, c) = self.getpos()
            raise Exception(str(l) + ":" + str(c) + ": Unmatched closing tag '" + tag + "'")
        if len(self.current_element.children) > 0 and isinstance(self.current_element.children[-1], str):
            self.current_element.children[-1] = self.current_element.children[-1].strip()
        self.current_element = self.current_element.parent
    def handle_startendtag(self, tag, attributes):
        if self.current_element != None and len(self.current_element.children) > 0 and isinstance(self.current_element.children[-1], str):
            self.current_element.children[-1] = self.current_element.children[-1].strip()
        elem = MrrtHtmlElement(self.document, self.getpos(), self.current_element, tag, attributes)
        if self.current_element == None:
            if self.document.root == None:
                self.document.root = elem
        else:
            self.current_element.children.append(elem)
    def handle_data(self, data):
        if self.current_element != None:
            if len(data) > 0:
                if len(self.current_element.children) > 0 and isinstance(self.current_element.children[-1], str):
                    self.current_element.children[-1] += data
                elif not data.isspace():
                    self.current_element.children.append(data)

class AstNode:
    def normalize(self):
        return self
    def to_fhir(self):
        return {}

class Group(AstNode):
    def __init__(self, name, children):
        self.name = name
        self.children = children
    def normalize(self):
        children = []
        for child in self.children:
            child = child.normalize()
            if child == None:
                pass
            elif isinstance(child, Group) and child.name == None:
                children = children + child.children
            else:
                children.append(child)
        self.children = children
        if self.name == None:
            if len(self.children) == 0:
                return None
            elif len(self.children) == 1:
                return self.children[0]
            else:
                if isinstance(children[0], Group) and children[0].name != None and len(children[0].children) == 0:
                    self.name = children[0].name
                    del children[0]
        else:
            if len(self.children) == 1 and self.children[0].name == None:
                self.children[0].name = self.name
                return self.children[0]
        return self
    def to_fhir(self):
        return { "text": self.name, "type": "group", "item": [child.to_fhir() for child in self.children] }

class Choice(AstNode):
    def __init__(self, name, options):
        self.name = name
        self.options = options
    def to_fhir(self):
        return { "text": self.name, "type": "choice", "answerOption": [ { "valueCoding": { "display": option } } for option in self.options] }

def convert_to_ast(html_element):
    match html_element.tag:
        case "label":
            return None
        case "input":
            return None
        case "textarea":
            return None
        case "select":
            name = None
            if (id := html_element.attributes.get("id")) and (label := html_element.document.labels.get(id)):
                name = label.get_text_content()
            options = []
            for option in html_element.children:
                if option.tag != "option":
                    continue
                options.append(option.get_text_content())
            return Choice(name, options)
        case _:
            if len(html_element.children) == 1 and isinstance(html_element.children[0], str):
                return Group(html_element.children[0], [])
            else:
                return Group(None, [child for child in [convert_to_ast(child) for child in html_element.children if isinstance(child, MrrtHtmlElement)] if child != None])

with open(input_file, 'r') as file_handle:
    parser = MrrtHtmlParser()
    while (buffer := file_handle.read(4096)) != "":
        parser.feed(buffer)
    parser.close()
    mrrt_html_document = parser.document

root_items = [child.normalize().to_fhir() for child in [convert_to_ast(child) for child in mrrt_html_document.body.children if isinstance(child, MrrtHtmlElement)] if child != None]

print(json.dumps({ "resourceType": "Questionnaire", "title": mrrt_html_document.title.get_text_content(), "item": root_items }, indent=2))