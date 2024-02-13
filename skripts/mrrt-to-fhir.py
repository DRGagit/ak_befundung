#!/usr/bin/env python3
import urllib
import sys
import json
from html.parser import HTMLParser

# Operating steps:
# 1. The HTML is parsed into an HTML syntax tree
# 2. The HTML syntax tree is converted to an abstract syntax tree (AST) which
#    more closely represents the semantics of the template and resembles FHIR
#    structure.
# 3. The AST is 'normalized', applying heuristics, for example removing nodes,
#    that apparently have no semantic meaning.
# 4. The AST is converted to FHIR/JSON

if len(sys.argv) != 2:
    sys.stderr.write("Usage: " + sys.argv[0] + " <MRRT template file> > <FHIR JSON>\n");
    exit(1)

input_file = sys.argv[1]

# Step 1: Parsing the MRRT/HTML as an HTML syntax tree

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
        if len(self.children) == 1:
            if isinstance(self.children[0], str):
                return self.children[0]
        elif len(self.children) == 0:
            return ''
        sys.stderr.write("Warning: Element content of <" + self.tag + "> at " + str(self.position[0]) + ":" + str(self.position[1]) + " cannot be converted to plain text\n")
        return ''

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
        if self.current_element != None and len(self.current_element.children) > 0 \
            and isinstance(self.current_element.children[-1], str):
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
                if elem.attributes.get("for"):
                    self.document.labels[elem.attributes["for"]] = elem
                else:
                    sys.stderr.write("Warning: Missing 'for' attribute for label at " + str(elem.position[0]) + ":" + str(elem.position[1]) + "\n")
            case "body":
                if self.document.body == None:
                    self.document.body = elem
            case "title":
                if self.document.title == None:
                    self.document.title = elem
    def handle_endtag(self, tag):
        if self.current_element == None or self.current_element.tag != tag:
            (l, c) = self.getpos()
            sys.stderr.write("Error: Unmatched closing tag '" + tag + "' at " + str(l) + ":" + str(c) + ".\n")
            exit(1)
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

with open(input_file, 'r') as file_handle:
    parser = MrrtHtmlParser()
    while (buffer := file_handle.read(4096)) != "":
        parser.feed(buffer)
    parser.close()
    mrrt_html_document = parser.document

# Step 2: Converting the HTML syntax tree to an abstract syntax tree

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
        return { "text": self.name if self.name else "", "type": "choice", "answerOption": [ { "valueCoding": { "display": option } } for option in self.options] }

class Field(AstNode):
    def __init__(self, name, type, initial):
        self.name = name
        self.type = type
        self.initial = initial
        self.unit = None
    def to_fhir(self):
        result = { "text": self.name if self.name else "", "type": self.type }
        if self.initial:
            if self.type == "string" and len(self.initial) > 0:
                result["initial"] = [ { "valueString": self.initial } ]
            elif self.type == "date":
                result["initial"] = [ { "valueDate": self.initial } ]
            elif self.type == "integer":
                result["initial"] = [ { "valueInteger": self.initial } ]
            elif self.type == "decimal":
                result["initial"] = [ { "valueDecimal": self.initial } ]
            elif self.type == "boolean":
                result["initial"] = [ { "valueBoolean": self.initial } ]
        if self.unit:
            result["extension"] = [ { "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit", "valueCoding": { "system": "http://unitsofmeasure.org", "code": self.unit, "display": self.unit } } ]
        return result

def convert_to_ast(html_element):
    match html_element.tag:
        case "label":
            return None
        case "input":
            name = None
            if (id := html_element.attributes.get("id")) and (label := html_element.document.labels.get(id)):
                name = label.get_text_content()
            elif (id := html_element.attributes.get("name")) and (label := html_element.document.labels.get(id)):
                name = label.get_text_content()
            type = html_element.attributes.get("type")
            match type:
                case "text":
                    return Field(name, "string", html_element.attributes.get("value"))
                case "date":
                    return Field(name, "date", html_element.attributes.get("value"))
                case "number":
                    step = html_element.attributes.get("value")
                    if step and (step == "any" or float(step) < 1):
                        type = "decimal"
                    else:
                        type = "integer"
                    field = Field(name, type, html_element.attributes.get("value"))
                    field.unit = html_element.attributes.get("data-field-units")
                    return field
                case "checkbox":
                    return Field(name, "boolean", html_element.attributes.get("selected"))
                case None:
                    sys.stderr.write("Warning: Missing input type at " + str(html_element.position[0]) + ":" + str(html_element.position[1]) + "\n")
                    return Field(name, "string", html_element.attributes.get("value"))
                case _:
                    sys.stderr.write("Warning: Unknown input type at " + str(html_element.position[0]) + ":" + str(html_element.position[1]) + "\n")
        case "textarea":
            name = None
            if (id := html_element.attributes.get("id")) and (label := html_element.document.labels.get(id)):
                name = label.get_text_content()
            elif (id := html_element.attributes.get("name")) and (label := html_element.document.labels.get(id)):
                name = label.get_text_content()
            return Field(name, "string", html_element.get_text_content())
        case "select":
            name = None
            if (id := html_element.attributes.get("id")) and (label := html_element.document.labels.get(id)):
                name = label.get_text_content()
            elif (id := html_element.attributes.get("name")) and (label := html_element.document.labels.get(id)):
                name = label.get_text_content()
            options = []
            for option in html_element.children:
                if isinstance(option, MrrtHtmlElement) and option.tag != "option":
                    continue
                options.append(option.get_text_content())
            return Choice(name, options)
        case _:
            if len(html_element.children) == 1 and isinstance(html_element.children[0], str):
                return Group(html_element.children[0], [])
            else:
                return Group(None, [child for child in [convert_to_ast(child) for child in html_element.children if isinstance(child, MrrtHtmlElement)] if child != None])

root_items = [item.to_fhir() for item in [child.normalize() for child in [convert_to_ast(child) for child in mrrt_html_document.body.children if isinstance(child, MrrtHtmlElement)] if child != None] if item != None]

print(json.dumps({ "resourceType": "Questionnaire", "title": mrrt_html_document.title.get_text_content(), "item": root_items }, indent=2))