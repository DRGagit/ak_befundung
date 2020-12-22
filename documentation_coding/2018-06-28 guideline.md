# Guideline zur Erstellung von Befundvorlagen

AG Informationstechnologie der Deutschen Röntgengesellschaft


Version:
18.06.2018


Autoren:
Hackländer  T, HELIOS Universitätsklinikum Wuppertal


Inhaltsverzeichnis:

[Allgemeines](#allgemeines)

[Inhaltliche Gliederung der Befundvorlagen](#inhaltliche-gliederung-der-befundvorlagen)

[Metadaten von Befundvorlagen](#metadaten-von-befundvorlagen)

[Bausteine für Befundvorlagen](#bausteine-für-befundvorlagen)

[Literatur](#literatur)


## Allgemeines
Befundvorlagen halten sich an die Spezifikationen des *IHE Radiology 5
Technical Framework Supplement - Management of Radiology Report Templates 10 (MRRT)* in der Version vom 14.07.2017 [1].

Innerhalb des MRRT Standards werden Befundvorlagen in HTML5 mit Erweiterungen ausgedrückt. Einige der Erweiterungen, wie z.B. benutzerdefinierte Datenattribute, werden von HTML5 unterstützt, andere, wie z.B. codierte Inhalte im XML-Format, nicht.

Wenn immer möglich, werden vorhandene HTML5-Tags verwendet, um Inhalte auszudrücken. Bis auf zwei XML-Blöcke am Ende der Befundvorlagen kann das Dokument mit weit verbreiteten HTML5-Tools validiert werden.

Um dem Benutzer das Ausfüllen einer Befundvorlage zu ermöglichen und daraus eine Befundbericht zu erstellen wird ein Report Creator benötigt.  Obwohl das Format für Befundvorlagen in HTML5 ausgedrückt wird, ist der Report Creator nicht verpflichtet, eine HTML5-Rendering-Engine zu verwenden. HTML ist einfach eine bequeme Methode, um die Konzepte im Template auszudrücken.


### HTML
Alle HTML5-Tags müssen geschlossen werden.
Dadurch wird gewährleistet, dass die Befundvorlage als XML validiert werden kann.


### Cascading Style Sheets
Um eine Befundvorlage zu rendern können interne und externe CSS-Stylesheets verwendet werden. Inline-Stile sind nicht erlaubt.

Die Befundvorlagen müssen so erstellt werden, dass alle Bausteine auch dann vollständig angezeigt werden, wenn verlinkte Cascading Style Sheet Dateien nicht gefunden werden.

Für die Templates der DRG soll ein einheitliches externe Cascading Style Sheet mit dem Namen `drg.css` verwendet werden.

Beispiele:

```html
<head>
	<link rel="stylesheet" type="text/css" href="drg.css">
</head>
```

oder als inline Code:

```html
<head>
    <style>
    	. . .
    </style>
</head>
```


### JavaScript
Der MRRT Standard sieht die Verwendung von JavaScript nicht vor, verbeitet den Einasatz jedoch nicht explizit.

Befundvorlagen der DRG dürfen deshalb JavaScript, müssen aber so erstellt werden, dass alle Elemente der Befundvorlage auch dann vollständig angezeigt werden, wenn JavaScript abgeschaltet, nicht verfügbar  oder verlinkte JavaScript Dateien nicht gefunden werden.

Das MRRT Profil gestattet nur genau ein `<script>` Elemente innerhalb des `<head>` Element, das der Definition von XML Content vorbehalten ist.

JavaScript kann deshalb lediglich im `<body>` Element als eingebetteter Code in einem `<script>` Element verwendet werden. Der Übersicht halber sollten der gesamte Code in einem Element zusammengefasst werden, das sich am Anfang des `<body>` Elementes befindet:

Beispiel:

```html
<body>
    <script type="text/javascript">
    	. . .
    </script>
    . . .
</body>
```


#### Aus und Einblenden von HTML Code während des Ausfüllens
Abhängig von einer Logik kann es während des Ausfüllens des Templates sinnvoll sein dem Anwender nicht alle Elemente zu präsentieren. Diese Passagen sollen jeweils in einem `<div>` Element gekapselt werden, wobei das Element durch Setzen des `hidden` Attributs aus- bzw. wieder eingeblendet wird.

```html
<div hidden="">
	. . .
</div>
```


#### Einfügen von zusätzlichem HTML Code
Javascript darf an jeder Stelle des `<body>` Elementes alle in MRRT zugelassene Elemente in den HTML Text einfügen. Element, die nicht explizit im MRRT Profil erlaubt sind, dürfen nur als Kinderelemente des `<mark>` Elementes, das von MRRT ignoriert wird, eingefügt werden.


## Inhaltliche Gliederung der Befundvorlagen
Die oberste Gliederungsebene der Befndvorlagen entspricht der Definition der Inhaltselemente eines Befundberichtes nach DIN 25300-1 [2]:

- Klinische Angaben
- Medizinische Fragestellung
- Befundungsfragestellung
- Beschreibung
- Beurteilung
- Empfehlung

Beispiel:

```html
<section id="S001" data-section-name="Klinische Angaben" data-section-required="true">
    <header class="level1">Klinische Angaben</header>
    <p>
    	. .	.
    </p>
</section>
```

Diese Hauptabschnitte werden in der Code-Ebene der Befundvorlage mit den in [3] definierten LOINC Codes kodiert:

| Abschnitt | LOINC-Code |
| :---  | :--- |
| Klinische Angaben | (11329-0, LN, "History") |
| Medizinische Fragestellung | (18785-6, LN, "Indications for Procedure") |
| Befundungsfragestellung | (55115-0, LN, "Request") |
| Beschreibung | (59776-5, LN, "Findings") |
| Beurteilung | (19005-8, LN, "Impressions") |
| Empfehlung | (18783-1, LN, "Recommendations") |


## Metadaten von Befundvorlagen
Befundvorlagen werden über Dublin Core Metadaten  näher spezifiziert. Zur Identifizierung und Versionierung  werden die folgenden Elemente verwendet:

| Element | Description in MRRT | Anmerkungen zur Verwendung durch die DRG |
 |:--- | :--- | :--- |
| dcterms.title | A human readable name for the template. There is enforced correspondence with the title element in the head. | Der Titel des Templates.<br>Dieser sollte den Inhalt möglichst deutlich beschreiben. |
| dcterms.abstract | A summary of the resource. | ACHTUNG: DIESES ELEMENT IST IN MRRT NICHT DEFINIERT.<br>Eine kurze Beschreibung des Inhaltes des Templates. |
| dcterms.description | Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource. | ACHTUNG: DIESES ELEMENT IST IN MRRT NICHT DEFINIERT.<br>Eine ausführliche Beschreibung von Inhalt und Einsatzmöglichkeiten des Templates. |
| dcterms.subject | The topic of the resource.<br>Typically, the subject will be represented using keywords, key phrases, or classification codes. Recommended best practice is to use a controlled vocabulary.<br>If multiple vocabulary terms or keywords are used, either separate terms with semi-colons or use separate iterations of the Subject element. | ACHTUNG: DIESES ELEMENT IST IN MRRT NICHT DEFINIERT.<br>Die Kategorie(n) unter der(denen) das Template auf der Webseite eingruppiert werden soll.<br><br>Modalitätsbezogen<br>CR – Konventionelles Röntgen<br>CT – Computertomographie<br>MR – MRT<br>NM – Nuklearmedizin<br>PET – PET<br>US – Ultraschall<br><br>Klinische Kategorien (analog radreport)<br>CA – Kardiologische Bildgebung<br>CH oder TH – Thorax-Bildgebung<br>ER – Notfall-Bildgebung<br>GI – Gastrointestinale Bildgebung<br>GY– Gynäkologische Bildgebung<br>HN – Kopf-/Hals-(HNO-) Bildgebung<br>MS oder MK – Muskuloskelettale Bildgebung<br>NR – Neuroradiologie<br>ON – Onkologische Bildgebung<br>PD – Pädiatrische Bildgebung<br>UR – Urologisch-Nephrologische Bildgebung |
| dcterms.identifier | A unique alphanumeric identifier (OID) included in any report instance generated using the template | Eine eindeutige Identifikation der aktuellen Version des Templates.<br><br>Diese ID ändert sich von Version zu Version, wohingegen "dcterms.references" bei allen Version eines Templates gleich bleibt.<br><br>Die Dokumenten UID setzt sich aus zwei Hauptteilen zusammen: Der Organisations-UID `<org root>` und einem in der jeweiligen Organisation selbst verwalteten `<suffix>`, wobei beide Teile durch einen Punkt voneinander getrennt sind: `UID = <org root>.<suffix>`.<br><br>Für die DRG wird der (nicht registrierte) Organisationscode `041807` verwendet. Der Suffix setzt sich aus zwei Teilen zusammen, die wiederum mit einem Punkt voneinander getrennt sind.<br><br>Der erste Teil beschreibt die (Haupt-) Modalität, auf die sich die Befundvorlage bezieht:<br>- `1` für Röntgen<br>- `2` für CT<br>- `3`  für MRT<br>- `4` für Sono<br>- `5` für modalitätenunabhängige Templates<br><br>Der zweite Teil soll die Vorlage eindeutig identifizieren, ohne dass dieser Code von einer zentralen Instanz vergeben wird. Deshalb wird hier eine 10 stellige Zahl verwendet, die sich aus dem Zeitpunkt der Erstellung des Templates ergibt. Das Format lautet dabei `YYMMTTHHMM`<br><br>Beispiel: Eine Befundvorlage für ein CT, die am 19. Juni 2018 um 17:45 erstellt wurde, erhält den Identifier `041807.2.1806191745`. |
| dcterms.references | A related resource that is referenced, cited, or otherwise pointed to by the described resource. | ACHTUNG: DIESES ELEMENT IST IN MRRT NICHT DEFINIERT.<br>Dieses Feld wird zur eindeutigen Identifikation aller Versionen eines Templates verwendet.<br>Hier wird der "dcterms.identifier" eingetragen, der für die erste Version des Templates vergeben wurde. |
| dcterms.date | The date of unspecified purpose that could be the most recent modification of the template | Das Erstellungsdatum der aktuellen Version des Templates. Dieses Datum ist gleichzeitig auch die "Version" des Templates.<br>Das Datum wird im ISO 8601 Format angegeben: YYYY-MM-DD |
| dcterms.publisher | The organizations who have published the template (e.g., RSNA, the local site) | Immer:<br>Deutsche Röntgengesellschaft e.V. (DRG) |
| dcterms.creator | An individual or group who primarily created  this template | Die Gruppe/Person, die den intellektuellen/medizinischen Inhalt des Templates erstellt hat, z.B. AG Thoraxdiagnostik der DRG |
| dcterms.contributor | An individual or group who contributed to the template | Hier sollen alle Personen zusammen mit ihrer Rolle aufgeführt werden, die am Template mitgewirkt haben, z.B. Pinto dos Santos D (Kodierung) oder Vogel-Claussen J (Editor) |
| dcterms.type | Indicates the type of XML document | Immer:<br>IMAGE_REPORT_TEMPLATE |
| dcterms.language | The language in which the template is written.<br>ISO 639 two-letter language code. | Immer:<br>de |
| dcterms.rights | Licensing considerations for the template | Immer:<br>Die Deutsche Röntgengesellschaft e.V. (DRG) stellt dieses Template kostenfrei unter der Creative Commons Lizenz  CC BY-NC-ND in der Version 2.0 zur Verfügung. Die Lizenz erlaubt Download und Weiterverteilung des Werkes unter Nennung der DRG als Urheber, jedoch keinerlei Bearbeitung oder kommerzielle Nutzung. |
| dcterms.license | A reference to a license that may govern the use of the template | Immer:<br>https://creativecommons.org/licenses/by-nc-nd/2.0/de/ |


Zusätzlich werden Informationen über die Befundvorlage im `<script>` Element des Headers, das ein XML-Dokument enthält, angegeben. In dessen `template_attributes` Element dsind die folgenden Informationen abgelegt:


| Element | Description in MRRT | Anmerkungen zur Verwendung durch die DRG |
|:--- | :--- | :--- |
| top-level-flag | Binary attribute that indicates when the template should not be a subsection of another template<br>Shall be one of: true, false |  |
| status | Marks templates that should no longer be used for creating reports.<br>Shall be one of: DRAFT, ACTIVE, RETIRED |  |
| user-list | The users to which this template may apply, separated by commas |  |
| provider-grouplist | The provider groups to which this template may apply, separated by commas |  |



## Bausteine für Befundvorlagen
Formulare für easyrad zu erstellen verlangt im Grunde nur HTML-Grundlagenwissen. Das StyleSheet sorgt für die korrekte Formatierung von Texten und Formular-Feldern.

Die Basis der meisten Templates ist bislang ein Tabellen-Layout, welches hier gewisse Vorzüge bietet. Es wurde bewusst auf einen integrierten Baukasten verzichtet, die Nutzung typischer HTML-Tags wird empfohlen.

Im Folgenden werden einige wenige Hinweise für die Verwendung spezieller Tags geben.
Tabelle

Tabellen können bei der Erstellung von Templates sehr nützlich sein. Empfehlenswert ist die Verwendung einer zunächst zweispaltigen Tabelle, in der ersten spalte die Beschreibung in Form eines Labels und in der zweiten Spalte das jeweils nötige Formularfeld.

```html
<table>
    <tr>
        <td>
	        <label for="text-field-1">Ein Text-Feld</label>
        </td>
        <td>
            <input id="text-field-1" type="text" value="Dieser Text ist der initiale Inhalt." data-field-type="TEXT" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
        </td>
    </tr>
</table>
```


### Strukturelemente
Innerhalb einer Befundvorlage sollte kein Text außerhalb von strukturierenden Elementen vorhanden sein. Durch diese Vorgabe läßt sich gewährleiten, dass man einzelne Textpassagen durch Stylesheets selektiv formatieren kann.

Text, der im Befundbericht fortlaufend erscheinen soll:
```html
<span class="my-class" id="my-id"> . . . </span>
```

Text, der im Befundbericht in einer neuen Zeile beginnen soll:
```html
<div class="my-class" id="my-id">
	. . .
</div>
```

Zeilenumbruch:
```html
<br/>
```

Neuer Paragraph:
```html
<p/>
```


### Textformatierung
Das MRRT Profil erlaubt einen großen Teil der in HTML definierten Formatierungen für Texte:

```html
<span>Dies ist Text in den <em>em-formatierter Text eingebettet</em> ist.</span>

<span>Dies ist Text in den <strong>strong-formatierter Text eingebettet</strong> ist.</span>

<span>Dies ist Text in den <sup>sup-formatierter Text eingebettet</sup> ist.</span>

<span>Dies ist Text in den <sub>sub-formatierter Text eingebettet</sub> ist.</span>

<span>Dies ist Text in den <q>q-formatierter Text eingebettet</q> ist.</span>
```


### Label
Ein Label, das vor dem referenzierten Element im Befundtext erscheinen soll:

Label und referenziertes Element sollten (müssen aber nicht) das selbe Elternelemente haben!

```html
<div>
    <label for=“xx“ />
    <element id=“xx“ />
</div>
```


Ein Label, das nach dem referenzierten Element im Befundtext erscheinen soll:

Label und referenziertes Element müssen das selbe Elternelemente haben!

```html
<div>
    <element id=“xx“ />
    <label for=“xx“ />
</div>
```


### Texturale Input Elemente
*Text, der in den Befundbericht übernommen werden soll: Der Wert des `value` Attributes.*

Beim Einsatz von Input-Elementen sollten die folgenden Techniken angewandt werden:

- Input-Feldern sollte auch ein Label zugeordnet werden
- Inputs können mit placeholder Hinweise/Beispiele im Feld selbst enthalten.
- Die Länge der Felder lässt sich in Bezug auf die Anzahlt der zulässigen Zeichen mit `size="10"` und durch ein Stylesheet wie `style="width:250px;"` grafisch kürzen.

Beispiele für einfache Input-Elemente:

```html
<p>
    <label for="text-field-1">Ein Text-Feld</label>
    <input id="text-field-1" type="text" value="Dieser Text ist der initiale Inhalt." data-field-type="TEXT" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
</p>

<p>
    <label for="number-field-1">Ein Number-Feld</label>
    <input id="number-field-1" type="number" value="-123.56" data-field-type="NUMBER" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
</p>

<p>
    <label for="date-field-1">Ein Date-Feld</label>
    <input id="date-field-1" type="date" value="2018-05-29" data-field-type="DATE" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
</p>

<p>
    <label for="time-field-1">Ein Time-Feld</label>
    <input id="time-field-1" type="time" value="19:47" data-field-type="TIME" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
</p>
```


### Checkboxen
*Text, der in den Befundbericht übernommen werden soll: Der Wert des `value` Attributes. **Hinweis:** Der Wert des `value` Attributes wird **nicht** in der Befundvorlage angezeigt. Er sollte mit dem Text des Labels übereinstimmen, das zu der Checkbox angezeigt wird.*

Beispiel:

```html
<p>
    <label for="checkbox-field-1">Ein Checkbox-Feld</label>
    <input id="checkbox-field-1" type="checkbox" checked="" value="Ein Checkbox-Feld" data-field-type="CHECKBOX" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
</p>
```

Man kann sehr einfach horizontale und vertikale Checkboxen herstellen.

Bei der vertikalen Checkliste ist es dringend erforderlich, dass die Spalte mit der Feldbezeichnung ein Stylesheet bekommt, dass den Text der Spalte vertikal oben ausrichtet: `style="vertical-align:top !important;"`. Die einzelnen Checkboxen/Labels können mit einem Zeilenumbruch `<br>` getrennt werden.

```html
<table>
    <tr>
        <td>
        	<label for="radio_yes">Zwei Checkbox-Felder</label>
        </td>
        <td>
            <label for="checkbox-field-1">Auswahl 1</label>
            <input id="checkbox-field-1" type="checkbox" checked="" value="Auswahl 1" data-field-type="CHECKBOX" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
            <label for="checkbox-field-2">Auswahl 2</label>
            <input id="checkbox-field-2" type="checkbox" checked="" value="Auswahl 2" data-field-type="CHECKBOX" data-field-merge-flag="false" data-field-verbal-trigger="" data-field-completion-action="NONE"/>
        </td>
    </tr>
</table>
```

### Textareas
*Text, der in den Befundbericht übernommen werden soll: Der Wert des `value` Attributes.*

Große Textfelder bzw. Textareas sind Formularfelder für mehrzeilige Texteingaben. Das `drg.css` Stylesheet stellt Textfelder immer in der vollen möglichen Breite dar (100%). Dazu muss ggf. auch die Tabelle auf eine Breite von 100% gebracht werden.

Man kann die Breite der Textarea aber auch mit StyleSheets variieren: `style="width:500px !important;"`.

```html
<p>
    <label for="text-area2">Ein mehrzeiliges Textfeld mit Größenvorgabe</label>
    <textarea id="text-area2" rows="3" cols="80">Erste Zeile des initialen Textes.
    Zweite Zeile des Textes.
    Dritte Zeile des Textes.
    </textarea>
</p>
```


### Auswahlfelder & Auswahllisten
*Text, der in den Befundbericht übernommen werden soll: Der Wert aller `value` Attribute, die selektiert sind.*

Es gibt zwei Arten von Auswahlfeldern: Select-Buttons und Select-Listen. Beide sind in der HTML-Semantik sehr ähnlich und unterscheiden ich quasi nur duch das Attribut `size`, mit dem die angezeigte Höhe der Select-Liste angebeben wird. Tatsächlich können aber beliebig viele Optionen in der Liste sein. In unserem Beispiel wird mit `multiple="multiple"` auch eine Mehrfachauswahl zugelassen. `selected` legt die vorausgewählte Option fest.

```html
<p>
    <label for="singel-list-field-1">Ein Liste mit Einfachauswahl</label>
    <select id="singel-list-field-1">
        <option value="Option 1 value" name="SL1" >Option 1</option>
        <option value="Option 2 value" name="SL2" selected="" >Option 2</option>
        <option value="Option 3 value" name="SL3" >Option 3</option>
    </select>
</p>

<p>
    <label for="multi-list-field-1">Ein Liste mit Mehrfachauswahl</label>
    <select id="multi-list-field-1" multiple>
        <option value="Option 1 value" name="ML1" selected="" >Option 1</option>
        <option value="Option 2 value" name="ML2" >Option 2</option>
        <option value="Option 3 value" name="ML3" selected="" >Option 3</option>
    </select>
</p>
```


### Listen
Beispiel für eine geordnete Liste:

```html
<div>
    <span>Eine geordnete Liste</span>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
</div>
```


Beispiel für eine ungeordnete Liste:

```html
<div>
    <span>Eine ungeordnete Liste</span>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>
```


### Verlinkte Objekte
Eine Befundvorlage kann externe Objekte referenzieren. Relative Links müssen relativ zu der Befundvorlage angegeben werden.

Beispiel:

```html
<span>Dies ist Link zur EasyRad Homepage:
    <a href="https://github.com/hacklaen/EasyRad" target="_blank">EasyRad Home</a>
</span>

```

### Ausblenden von Bausteinen im exportierten Befundbericht
Bausteine, deren Inhalt nicht im Befundbericht erscheinen soll, z.B. erklärender Text und Bilder, müssen in einem `<mark>` Block gekapselt werden:

```html
<mark>
	. . .
</mark>
```

### Eingebettete Befundbericht
Das MRRT Profil erlaubt das rekursive Einbetten von externen Befundvorlagen in eine aktuelle Vorlage.

*Diese Funktionalität wird aktuell von der DRG **nicht** verwendet.*


### In MRRT nicht zugelassene Elemente
Diein diesem Kapitel beschriebenen HTML Elemente sind in MRRT nicht definiert und sollten entsprechend dem Profil ignoriert werden.
In diesem Sinne sollte die Elemente **nur** als Kinderlemente eines `<mark>` Elementes verwendet werden. Auch in diesen Fällen sollte sehr genau abgewogen werden, ob ihr Einsatz tatsächlich unbedingt notwendig ist.


#### Buttons
Schaltflächen können auch inline eingesetzt werden, also beispielsweise direkt nach einem Input-Feld.

```html
<a href="{{URL}}" target="_blank"><button type="button">Text auf der Schaltfläche</button></a>
```


#### Radio-Felder
Bei der Verwendung von Radio-Feldern ist die korrekte Verwendung von Label entscheidend. Hier muss darauf geachtet werden, dass mit dem Attribut for die eindeutige ID des input-Feldes zugeordnet wird.

Als Beschriftung der Radio-Gruppe empfehlen wir ein Label mit for-Verknüpfung zum vorausgewählten Radio-Feld (checked).

```html
<table>
    <tr>
        <td><label for="radio_yes">Verlaufsbericht</label></td>
        <td>
            <input type="radio" id="radio_yes" name="radio" title="" checked><label for="radio_yes">ja</label>
            <input type="radio" id="radio_no" name="radio" title=""><label for="radio_no">nein</label>
        </td>
    </tr>
</table>
```


## Literatur


[1]	IHE Radiology 5 Technical Framework Supplement, Management of Radiology Report Templates 10 (MRRT), Trial Implementation. September 9, 2016. Template Rev. 10.3.. Published 2017-06-16. Link: http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_MRRT.pdf

[2] DIN 25300-1 : Prozesse in der Radiologie – Teil 1: Befundung eines bildgebenden oder bildgestützten Verfahrens

[3] DICOM PS3.16 Content Mapping Resource - TID 2006 Imaging Report With Conditional Radiation Exposure and Protection Information

[4]	W3C HTML/Elements. Link: https://www.w3.org/wiki/HTML/Elements
