// jQuery UI Datepicker German translation
!function(e){"function"==typeof define&&define.amd?define(["../widgets/datepicker"],e):e(jQuery.datepicker)}(function(e){return e.regional.de={closeText:"schließen",clearText:"-",prevText:"&#x3c;zurück",prevJumpText:"&#x3c;&#x3c;",nextText:"Vor&#x3e;",currentText:"heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"Wo.",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.setDefaults(e.regional.de),e.regional.de});
	
// BLUE. make MRI blue every field that has been touched
$('input, select').change(function() {$("label[for='"+$(this).attr('id')+"']").css('color','#337ab7');});
// COLLAPSE. expand div with collapsed when option selected and collapse it again when option with .clearothers is selected
$('.collapsed input').on('click',function() {if($(this).is(':checked')){$(this).closest('div').removeClass('collapsed');};});
$('.collapsed input.clearothers').on('click',function() {if($(this).is(':checked')){$(this).closest('div').addClass('collapsed');};});

// RADIOBUTONNIZED. make marked checkboxes behave like radio buttons
$('input.radiobutonnized').on('click',function() {$(this).siblings('.radiobutonnized').not(this).prop('checked', false).trigger('change');});

// CLEAR CHILDREN VALUES. when a checkbox has the class .clearothers and is clicked, clear all the other checkboxes inside the same div. when input with id ending in "_sonst" cleared, clear following input value also
$('input.clearothers').on('click',function() {$(this).closest('div').find('input, select').not(this).prop('checked', false).prop('selectedIndex',0).trigger('change');});
$('input.cleartbody').on('click',function() {
	if($(this).is(':checked')) {
		$(this).closest('tbody').css('color', 'red').find('input').not(this).prop('checked', false).trigger('change');}});
$('input.cleartr').on('click',function() {if($(this).is(':checked')) {$(this).closest('tr').find('input, select').not(this).prop('checked', false).prop('selectedIndex',0).trigger('change');}});
$('input.cleartd').on('click',function() {if($(this).is(':checked')) {$(this).closest('td').find('input, select').not(this).prop('checked', false).prop('selectedIndex',0).trigger('change');}});
$('input[id$="_sonstx"]').on('change',function() {if(!$(this).is(':checked')) {var index = $('input').index($(this));$('input').slice(index+1).first().val('');}});

// SONSTIGES_TEXT . when text written on input with id ending in "_text", set value of previous input to the text here. This makes the formulas for Bericht much cleaner and faster to write
$('input[type=text][id$="_text"]').on('keyup', function() {
	var index = $('input').index(this);
	var sonst = $(this).val();
	$('input').slice(0, index).last().attr('data-value', sonst).trigger('change');
});

// REQUIRED RED. when a td has class opener, make pink the next td until an option inside it is chosen -->
$('.opener input').on('click',function() {if($(this).is(':checked')){$(this).closest('td').nextAll('td').addClass('required');};});
$('.opener input').on('click',function() {if(!$(this).is(':checked')){$(this).closest('td').nextAll('td').removeClass('required');};});
$('.opener label').on('click',function() {$(this).closest('td').nextAll('td').addClass('required').trigger('change');});
$(document).on('click', '.required input', function() {$(this).closest('tr').children().removeClass('required');});
$(document).on('click', '.required label', function() {$(this).closest('tr').children().removeClass('required');});
$('.openertr input').on('click',function() {if($(this).is(':checked')){$(this).closest('tr').nextAll('tr').addClass('required');};});
$('.openertr input').on('click',function() {if(!$(this).is(':checked')){$(this).closest('tr').nextAll('tr').removeClass('required');};});
$('.openertr label').on('click',function() {$(this).closest('tr').nextAll('tr').addClass('required').trigger('change');});

$('.required input').on('click change',function() {
	if($(this).is(':checked')){
		$(this).closest('fieldset').removeClass('required');}
	else{
		var sel=$(this).closest('fieldset').find('input:checked').length;
		if(sel==0){
			$(this).closest('fieldset').addClass('required');}}	;});
			
// BERICHT HEIGHT adjust the height of custom Bericht depending on window size in order to add scrollbars if needed. 
var windowHeight = window.innerHeight-170; 
var ww = window.innerWidth;
var wh = window.innerHeight;
$('#rightcolumn-content').css({'height':windowHeight});
$( window ).resize(function() { var windowHeight = window.innerHeight-170; $('#rightcolumn-content').css({'height':windowHeight});var ww = window.innerWidth; var wh = window.innerHeight;});

$('label[for=nradms_bef_nbk_atr_ja]:first-of-type').first().before('<span style="color:red; display: block; max-width:500px" id="nbfehlerk"><u>Bekannter BUG</u>:bitte für die nächsten Nebenbefunde, falls auffällig, nicht auf "Ja" klicken sondern "Nein" auschecken und am Ende in Sonstiges die Auffälligkeit beschreiben. Dies wird sobald wie möglich gelöst</span><br>');
$('#nradms_bef_nbk_atr_ja').before('<span id="nbfehlerk2"></br></br></br></br></span>');

$('label[for=nradms_bef_nbws_dae_ja]:first-of-type').first().before('<span style="color:red; display: block; max-width:500px" id="nbfehlerws"><u>Bekannter BUG</u>:bitte für die nächsten Nebenbefunde, falls auffällig, nicht auf "Ja" klicken sondern "Nein" auschecken und am Ende in die Auffälligkeit Sonstiges beschreiben. Dies wird sobald wie möglich gelöst</span><br>');
$('#nradms_bef_nbws_dae_ja').before('<span id="nbfehlerws2"></br></br></br></br></span>');

// todo: new custom function to make sentencecase with toSentenceCase - see last rule of BERICHT / Beurteilung / Weiteres Stromgebiet = mri_gen_ms_ws_beurt_wstr