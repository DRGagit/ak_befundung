<!-- ####################### --><!-- FIELDS DEFAULT VALUES --><!-- ####################### -->
//feedbacklink with version and live window size
$(window).on('resize', function(){
      var win = $(this); //this = window
	  var feedhref='https://test.intranet.mri.tum.de/andrisan/feedback/contactform.htm?t=mri_nrad_ms-v0.93&ww='+win.width()+'&wh='+win.height();
      $('#nradms_feedback').attr('href', feedhref);
});
$(window).trigger('resize');

$('body').addClass('nradms nradms093 lerntooltip');
$('#rightcolumn').css({'display':'block'});
$('.fliesstext').css({'display':'none'});
$('div.hide-from-xml-output').css({'display':'inherit'});

//if the hidden checkbox 'touched' is not checked, apply some standard values to make it faster to fill in
if(!($('#nradms_touched:checked').length)) {
	$('#nradms_va_nein').trigger('click');
	$('#nradms_va_lv_int').trigger('click');
	$('#nradms_va_lv_bq_vgb').trigger('click');
	$('#nradms_bef_seq_abg_kopf').trigger('click');
	$('#nradms_bef_seq_bildq_gut').trigger('click');
	$('#nradms_beur_vv_kvv').trigger('click');
	$('#nradms_beur_vv_kvv').prop('disabled', true);
	$('#nradms_beur_vv_bb').prop('disabled', true);
	$('#nradms_beur_vv_sb').prop('disabled', true);
	$('#nradms_beur_vv_bs').prop('disabled', true);
	$('#nradms_beur_vv_sonst').prop('disabled', true);
	$('#nradms_beur_vv_kvv_nl_nein').trigger('click');
	
	$('#nradms_bef_seq_3dflair').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_seq_3ddir').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_seq_isot2').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_seq_swi').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_seq_dti').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_seq_mprage').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_kopf_sp_niv').val('C4');
	$('#nradms_bef_kopf_hoh_sp_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_kopf_hoh_sp_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_nor_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_nor_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_nol_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_nol_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_skl_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_skl_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_pml_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_pml_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_liq_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_liq_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_atr_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_atr_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_mrd_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_mrd_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_sm_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_sm_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_orb_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_orb_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_nnh_nein').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length)).trigger('change');
	$('#nradms_bef_nbk_nnh_ja').prop('checked', false).trigger('change');
	}
	
//befund default values
$('#nradms_bef_seq_abg_kopf, #nradms_bef_seq_abg_hws, #nradms_bef_seq_abg_blws').click(function(){
	if(($('#nradms_bef_seq_abg_kopf:checked').length)==0){
 		$('input[data-group=seq_kopf]').prop('checked', false). trigger('change');
		$('#nradms_bef_kopf select[id$="_anz"]').val('0').trigger('change');
		$('#nradms_bef_kopf input[type="text"], #nradms_bef_nbk input[type="text"]').val('').trigger('keyup');
		$('#nradms_bef_kopf input[type="checkbox"], #nradms_bef_nbk input[type="checkbox"]').prop('checked', false).trigger('change');
		}
		
	$('#nradms_bef_seq_3dflair').prop('checked', ($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_seq_3ddir').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_seq_isot2').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_seq_swi').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_seq_dti').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_seq_mprage').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_kopf_sp_niv').val('C4');
	$('#nradms_bef_kopf_hoh_sp_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_kopf_hoh_sp_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_nor_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_nor_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_nol_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_nol_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_skl_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_skl_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_pml_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_pml_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_liq_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_liq_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_atr_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_atr_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_mrd_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_mrd_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_sm_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_sm_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_orb_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_orb_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
	$('#nradms_bef_nbk_nnh_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_nnh_nein').prop('checked',($('#nradms_bef_seq_abg_kopf:checked').length>0)).trigger('change');
		
	if(!($('#nradms_touched:checked').length)) {
		if(($('#nradms_bef_seq_abg_kopf').length>0)&&($('#nradms_ka_diag_kis:checked, #nradms_ka_diag_nbws:checked, #nradms_ka_diag_sonst:checked').length>0)){
				$('#nradms_bef_seq_mpragekm').prop('checked', true).trigger('change');}
			else{
				$('#nradms_bef_seq_mpragekm').prop('checked', false).trigger('change');
				$('#nradms_bef_kopf_hoh_sp').prop('checked', false).trigger('change');
				$('#nradms_bef_kopf_neu_hoh_sp').prop('checked', false).trigger('change');
				$('#nradms_bef_kopf_km_hoh_sp').prop('checked', false).trigger('change');
				$('#nradms_bef_kopf_km_neu_hoh_sp').prop('checked', false).trigger('change');
			}}	
	
	if((($('#nradms_bef_seq_abg_hws:checked').length)+($('#nradms_bef_seq_abg_blws:checked').length))==0){
		$('input[data-group=seq_ws]').prop('checked', false). trigger('change');
		$('#nradms_bef_hws select[id$="_anz"], #nradms_bef_blws select[id$="_anz"]').val('0').trigger('change');
		$('#nradms_bef_hws input[type="text"], #nradms_bef_blws input[type="text"], #nradms_bef_nbws input[type="text"], #nradms_beur_ml input[type="text"]').val('').trigger('keyup');
		$('#nradms_bef_hws input[type="checkbox"], #nradms_bef_blws input[type="checkbox"], #nradms_bef_nbws input[type="checkbox"], #nradms_beur_ml input[type="checkbox"]').prop('checked', false).trigger('change');
			}
	$('#nradms_bef_seq_sagT2').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_seq_sagSTIR').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_seq_sagT1').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_seq_axT2').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_nbws_t2h_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_t2h_nein').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_nbws_am_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_am_nein').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_nbws_dae_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_dae_nein').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_nbws_bsp_pts').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_bsp_ets').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_rc_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_rc_nein').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_nbws_skw_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_skw_nein').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_nbws_nfw_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_nfw_nein').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');
	$('#nradms_bef_nbws_ksu_ja').prop('checked', false).trigger('change');
	$('#nradms_bef_nbws_ksu_nein').prop('checked', (($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)>0)).trigger('change');			
				
	})

$('input[data-group=ka_diag]').change(function(){
	if(!($('#nradms_touched:checked').length)) {
		if(($('#nradms_bef_seq_abg_kopf').length>0)&&($('#nradms_ka_diag_kis:checked, #nradms_ka_diag_nbws:checked, #nradms_ka_diag_sonst:checked').length>0)){
				 $('#nradms_bef_seq_mpragekm').prop('checked', true).trigger('change');}
			else{
			$('#nradms_bef_seq_mpragekm').prop('checked', false).trigger('change');}
			
			}})
	
	
//befund default values for WS
$('#nradms_bef_seq_abg_hws, #nradms_bef_seq_abg_blws').click(function(){

	})

//if the value of "touched"	variable was not already set by already opening this we will assume we are on the form of editing. useful to prevent automatically changing values of already setup beurteilung. This means that the second time one opens the patient form, the values of beurteilung will not be set automatically anymore
var on_create_page = !($('#nradms_touched').prop('checked'));

//now check it so that the manually checked values are not overwritten in the future opening of this form
$('#nradms_touched').prop('checked', true);

<!-- ####################### --><!-- FIELDS VISIBILITY LOGIC --><!-- ####################### -->
//Documentation on https://dstreet.github.io/dependsOn/
<!-- --------------------------- -->
<!-- ANAMNESE -->
<!-- --------------------------- -->
$('#nradms_ka_diag_sonst_text').dependsOn({'#nradms_ka_diag_sonst': {checked: true}});

$('#nradms_va_anz').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_va_lv_tr').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_va_lv_int').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_va_lv_ext').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_va_lv_sonst').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_va_lv_sonst_text').dependsOn({'#nradms_va_lv_sonst': {checked: true}});
$('#nradms_va_lv_vom').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_va_sonst').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_va_sonst_tr').dependsOn({'#nradms_va_ja': {checked: true}});

<!-- --------------------------- -->
<!-- BEFUND -->
<!-- --------------------------- -->
<!-- --------------------------- -->
<!-- BEFUND/SEQUENZEN -->
<!-- --------------------------- -->

//idea for the future: check if Sonstiges contains traces of KM = not used for the moment
seq_sonst_km2 = false;
$('#nradms_bef_seq_sonst').change(function() {
	var km_options = "KM,km,Km,Kontranstmittel,KONTRASTMITTEL,kontrastmittel".split(",");
	var seq_sonst_km_pre = '#nradms_bef_seq_sonst[data-value*=';
	var selxx = ""+seq_sonst_km_pre + km_options.join('], ' + seq_sonst_km_pre) + ']'+"";
	var seq_sonst_km = $(selxx).length;
	if (seq_sonst_km>0){
		seq_sonst_km2 = true;}
		else{
		seq_sonst_km2 = false;
		}
	})

$('#nradms_bef_seq').dependsOn({'input[data-group=bef_seq_eh]': {checked: true}});
$('#nradms_bef_seq_3dflair').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_seq_3ddir').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_seq_isot2').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_seq_swi').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_seq_dti').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_seq_mprage').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_seq_mpragekm').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});

$('#nradms_bef_seq_ws_br').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}, '#nradms_bef_seq_abg_hws': {checked: true}});

$('#nradms_bef_seq_sagT2').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_bef_seq_sagSTIR').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_bef_seq_sagT1').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_bef_seq_sagT1KM').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_bef_seq_axT2').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_bef_seq_axT2KM').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});

$('#nradms_bef_seq_sonst').dependsOn({'input[data-group=bef_seq_eh]': {checked: true}});
$('#nradms_bef_seq_sonst_text').dependsOn({'#nradms_bef_seq_sonst': {checked: true}});

$('#nradms_bef_seq_bildq').dependsOn({'input[data-group=bef_seq_eh]': {checked: true}});

<!-- --------------------------- -->
<!-- BEFUND/KOPF -->
<!-- --------------------------- -->
$('#nradms_bef_kopf').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_kopf_neu').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_bef_kopf_km').dependsOn({'input[data-group^=seq][data-value$=KM]':{checked:true}}).or({'#nradms_bef_seq_sonst': {checked: true}});
$('#nradms_bef_kopf_km_neu').dependsOn({'#nradms_va_ja': {checked: true}, 'input[data-group^=seq][data-value$=KM]':{checked:true}}).or({'#nradms_va_ja': {checked: true},'#nradms_bef_seq_sonst': {checked: true}});
$('#nradms_bef_kopf_hoh').dependsOn({'#nradms_bef_kopf_anz': {not: '0'}});
$('#nradms_bef_kopf_reg').dependsOn({'input[data-group2=bef_kopf_hoh_s2]':{checked:true}});
$('#nradms_bef_kopf_neu_hoh').dependsOn({'#nradms_bef_kopf_neu_anz': {not: '0'}});
$('#nradms_bef_kopf_neu_reg').dependsOn({'input[data-group2=bef_kopf_hoh_s2]':{checked:true}, 'input[data-group2=bef_kopf_neu_hoh_s2]':{checked:true}});
$('#nradms_bef_kopf_km_hoh').dependsOn({'#nradms_bef_kopf_km_anz': {not: '0'}});
$('#nradms_bef_kopf_km_reg').dependsOn({'input[data-group2=bef_kopf_km_hoh_s2]':{checked:true}});
$('#nradms_bef_kopf_km_neu_hoh').dependsOn({'#nradms_bef_kopf_km_neu_anz': {not: '0'}});
$('#nradms_bef_kopf_km_neu_reg').dependsOn({'input[data-group2=bef_kopf_km_hoh_s2]':{checked:true}, 'input[data-group2=bef_kopf_km_neu_hoh_s2]':{checked:true}});
$('#nradms_bef_kopf_konf').dependsOn({'#nradms_bef_kopf_anz': {not: '0'}}).or({'#nradms_bef_kopf_km_anz': {not: '0'}});
$('#nradms_bef_kopf_sl').dependsOn({'#nradms_va_ja': {checked: true}});

$('#nradms_bef_kopf_neu_hoh_sp').dependsOn({'#nradms_va_ja': {checked: true}, '#nradms_bef_kopf_hoh_sp_ja': {checked: true}});
$('#nradms_bef_kopf_km_hoh_sp').dependsOn({'#nradms_bef_kopf_hoh_sp_ja': {checked: true}, 'input[data-group^=seq][data-value$=KM]':{checked:true}}).or({'#nradms_bef_kopf_hoh_sp_ja': {checked: true}, '#nradms_bef_seq_sonst': {checked: true}});

<!-- <!-- --------------------------- --> -->
<!-- <!-- BEFUND/HWS --> -->
<!-- <!-- --------------------------- --> -->
$('#nradms_bef_hws').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}});
$('#nradms_bef_hws_neu').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true},'#nradms_va_ja': {checked: true}});
$('#nradms_bef_hws_km').dependsOn({'input[data-group^=seq][data-value$=KM]': {checked: true}}).or({'#nradms_bef_seq_sonst': {checked: true}});
$('#nradms_bef_hws_km_neu').dependsOn({'#nradms_va_ja': {checked: true}, 'input[data-group^=seq][data-value$=KM]': {checked: true}}).or({'#nradms_va_ja': {checked: true},'#nradms_bef_seq_sonst': {checked: true}});
$('#nradms_bef_hws_hoh').dependsOn({'#nradms_bef_hws_anz': {not: '0'}});
$('#nradms_bef_hws_neu_hoh').dependsOn({'#nradms_bef_hws_neu_anz': {not: '0'}});
$('#nradms_bef_hws_km_hoh').dependsOn({'#nradms_bef_hws_km_anz': {not: '0'}});
$('#nradms_bef_hws_km_neu_hoh').dependsOn({'#nradms_bef_hws_km_neu_anz': {not: '0'}});
$('#nradms_bef_hws_konf').dependsOn({'#nradms_bef_hws_anz': {not: '0'}}).or({'#nradms_bef_hws_km_anz': {not: '0'}});

<!-- --------------------------- -->
<!-- BEFUND/BWS-LWS -->
<!-- --------------------------- -->
$('#nradms_bef_blws').dependsOn({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_bef_blws_neu').dependsOn({'#nradms_va_ja': {checked: true}});
$('#nradms_bef_blws_km').dependsOn({'input[data-group^=seq][data-value$=KM]': {checked: true}}).or({'#nradms_bef_seq_sonst': {checked: true}});
$('#nradms_bef_blws_km_neu').dependsOn({'#nradms_va_ja': {checked: true}, 'input[data-group^=seq][data-value$=KM]': {checked: true}}).or({'#nradms_va_ja': {checked: true},'#nradms_bef_seq_sonst': {checked: true}});
$('#nradms_bef_blws_hoh').dependsOn({'#nradms_bef_blws_anz': {not: '0'}});
$('#nradms_bef_blws_neu_hoh').dependsOn({'#nradms_bef_blws_neu_anz': {not: '0'}});
$('#nradms_bef_blws_km_hoh').dependsOn({'#nradms_bef_blws_km_anz': {not: '0'}});
$('#nradms_bef_blws_km_neu_hoh').dependsOn({'#nradms_bef_blws_km_neu_anz': {not: '0'}});
$('#nradms_bef_blws_konf').dependsOn({'#nradms_bef_blws_anz': {not: '0'}}).or({'#nradms_bef_blws_km_anz': {not: '0'}});
<!-- --------------------------- -->
<!-- BEFUND/Nebenbefunde Kopf-->
<!-- --------------------------- -->
$('#nradms_bef_nbk').dependsOn({'#nradms_bef_seq_abg_kopf': {checked: true}});
$('#nradms_bef_nbk_nor').dependsOn({'#nradms_bef_nbk_nor_ja': {checked: true}});
$('#nradms_bef_nbk_nol').dependsOn({'#nradms_bef_nbk_nol_ja': {checked: true}});
$('#nradms_bef_nbk_pml_sonst').dependsOn({'#nradms_bef_nbk_pml_ja': {checked: true}});
$('#nradms_bef_nbk_liq_sonst').dependsOn({'#nradms_bef_nbk_liq_ja': {checked: true}});
$('#nradms_bef_nbk_mrd_sonst').dependsOn({'#nradms_bef_nbk_mrd_ja': {checked: true}});
$('#nradms_bef_nbk_sm_sonst').dependsOn({'#nradms_bef_nbk_sm_ja': {checked: true}});
$('#nradms_bef_nbk_orb_sonst').dependsOn({'#nradms_bef_nbk_orb_ja': {checked: true}});
$('#nradms_bef_nbk_nnh_sonst').dependsOn({'#nradms_bef_nbk_nnh_ja': {checked: true}});

<!-- --------------------------- -->
<!-- BEFUND/Nebenbefunde WS-->
<!-- --------------------------- -->
$('#nradms_bef_nbws').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_bef_nbws_dae_sonst').dependsOn({'#nradms_bef_nbws_dae_ja': {checked: true}});
$('#nradms_bef_nbws_rc_sonst').dependsOn({'#nradms_bef_nbws_rc_ja': {checked: true}});
$('#nradms_bef_nbws_bsp_pts_text').dependsOn({'#nradms_bef_nbws_bsp_pts': {checked: true}});
$('#nradms_bef_nbws_bsp_ets_text').dependsOn({'#nradms_bef_nbws_bsp_ets': {checked: true}});
$('#nradms_bef_nbws_skw_sonst').dependsOn({'#nradms_bef_nbws_skw_ja': {checked: true}});
$('#nradms_bef_nbws_nfw_sonst').dependsOn({'#nradms_bef_nbws_nfw_ja': {checked: true}});
$('#nradms_bef_nbws_ksu_sonst').dependsOn({'#nradms_bef_nbws_ksu_ja': {checked: true}});


<!-- --------------------------- -->
<!-- BEURTEILUNG -->
<!-- --------------------------- -->
$('#nradms_beur_ml').dependsOn({'#nradms_bef_seq_abg_hws': {checked: true}}).or({'#nradms_bef_seq_abg_blws': {checked: true}});
$('#nradms_beur_ml_sonst_text').dependsOn({'#nradms_beur_ml_sonst': {checked: true}});
$('#nradms_beur_vv_sonst_text').dependsOn({'#nradms_beur_vv_sonst': {checked: true}});

$('#nradms_beur_digb').dependsOn(
{'#nradms_bef_seq_abg_kopf': {checked: true}, '#nradms_ka_diag_rrms': {checked: false}, '#nradms_ka_diag_spms': {checked: false}, '#nradms_ka_diag_ppms': {checked: false}}).or(
{'#nradms_bef_seq_abg_kopf': {checked: true}, '#nradms_ka_diag_rrms': {checked: true}, '#nradms_va_nein': {checked: true}}).or(
{'#nradms_bef_seq_abg_kopf': {checked: true}, '#nradms_ka_diag_spms': {checked: true}, '#nradms_va_nein': {checked: true}}).or(
{'#nradms_bef_seq_abg_kopf': {checked: true}, '#nradms_ka_diag_ppms': {checked: true}, '#nradms_va_nein': {checked: true}});

$('#nradms_beur_gb_sonst_text').dependsOn({'#nradms_beur_gb_sonst': {checked: true}});













<!-- ####################### --><!-- FIELD INTEROPERABILITY (required state, changing values of others)--><!-- ####################### -->

$('#nradms_bef_seq_abg_kopf').change(function(){
	if(!($('#nradms_bef_seq_abg_kopf:checked').length)){
		//$('#nradms_bef_seq_abg_hws').prop('checked', true).trigger('change');
		//$('#nradms_bef_seq_abg_blws').prop('checked', true).trigger('change');
		}})

$('#nradms_bef_seq_abg_hws').change(function(){
	if(($('#nradms_bef_seq_abg_hws:checked').length==1)&&($('#nradms_bef_seq_abg_blws:checked').length==0)) {
		$('#nradms_bef_seq_abg_kopf').prop('checked', false).trigger('change');
		$('#nradms_bef_seq_abg_blws').prop('checked', true).trigger('change');
		$('input[id^=nradms_bef_blws]').prop('checked', false).trigger('change');
		$('input[data-group=ka_diag]').trigger('change');
	}})
		
$('#nradms_bef_seq_abg_blws').change(function(){
	if(($('#nradms_bef_seq_abg_blws:checked').length==1)&&($('#nradms_bef_seq_abg_hws:checked').length==0)) {
		$('#nradms_bef_seq_abg_kopf').prop('checked', false).trigger('change');
		$('#nradms_bef_seq_abg_hws').prop('checked', true).trigger('change');
		$('input[data-group=ka_diag]').trigger('change');
		}})

	
$('#nradms_va_ja').change(function() {
	if(($('#nradms_va_ja:checked').length)) {	
	$('#nradms_bef_kopf_spvu_ja, #nradms_bef_kopf_spvu_nein').prop('checked', false).trigger('change');
	$('#nradms_bef_hws_neu').children('input').prop('disabled', false).trigger('change');
	$('#nradms_bef_hws_neu_keine').prop('checked', false).trigger('change');
	$('#nradms_bef_blws_neu').children('input').prop('disabled', false).trigger('change');
	$('#nradms_bef_blws_neu_keine').prop('checked', false).trigger('change');
	$('#nradms_beur_vv input').prop('disabled', false).trigger('change');
	$('#nradms_beur_vv_kvv').prop('checked', false).prop('disabled', true).trigger('change');
	$('#nradms_beur_vv_kvv_nl_ja').prop('checked', false).trigger('change');
	};})
$('#nradms_va_nein').change(function() {if(($('#nradms_va_nein:checked').length)) {
	$('#nradms_bef_kopf_spvu_ja, #nradms_bef_kopf_spvu_nein').prop('checked', false).trigger('change');
	$('#nradms_bef_hws_neu').children('input').prop('disabled', true).prop('checked', false).trigger('change');
	$('#nradms_bef_blws_neu').children('input').prop('disabled', true).prop('checked', false).trigger('change');
	$('#nradms_beur_vv input').prop('disabled', true).trigger('change');
	$('#nradms_beur_vv_kvv').prop('checked', true).trigger('change');
	};})

//add niveu to gesamt if not already selected and remove from new if disabled on gesamt
$('input[id^=nradms_bef_kopf_neu_]').click(function(){
	if($(this).is(':checked')){
		var target = "#nradms_bef_kopf_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', true);}})
$('input[id^=nradms_bef_kopf_km_neu_]').click(function(){
	if($(this).is(':checked')){
		var target = "#nradms_bef_kopf_km_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', true);}})

$('input[id^=nradms_bef_kopf_h]').click(function(){
	if(!($(this).is(':checked'))){
		var target = "#nradms_bef_kopf_neu_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', false).trigger('change');}})
$('input[id^=nradms_bef_kopf_km_hoh_]').click(function(){
	if(!($(this).is(':checked'))){
		var target = "#nradms_bef_kopf_km_neu_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', false).trigger('change');}})


$('input[id^=nradms_bef_hws_neu_h]').click(function(){
	if($(this).is(':checked')){
		var target = "#nradms_bef_hws_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', true);}})
$('input[id^=nradms_bef_hws_km_neu_h]').click(function(){
	if($(this).is(':checked')){
		var target = "#nradms_bef_hws_km_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', true);}})
$('input[id^=nradms_bef_hws_h]').click(function(){
	if(!($(this).is(':checked'))){
		var target = "#nradms_bef_hws_neu_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', false).trigger('change');}})
$('input[id^=nradms_bef_hws_km_h]').click(function(){
	if(!($(this).is(':checked'))){
		var target = "#nradms_bef_hws_km_neu_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', false).trigger('change');}})


$('input[id^=nradms_bef_blws_neu_hoh_]').click(function(){
	if($(this).is(':checked')){
		var target = "#nradms_bef_blws_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', true);}})
$('input[id^=nradms_bef_blws_km_neu_h]').click(function(){
	if($(this).is(':checked')){
		var target = "#nradms_bef_blws_km_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', true);}})
$('input[id^=nradms_bef_blws_hoh_]').click(function(){
	if(!($(this).is(':checked'))){
		var target = "#nradms_bef_blws_neu_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', false).trigger('change');}})
$('input[id^=nradms_bef_blws_km_h]').click(function(){
	if(!($(this).is(':checked'))){
		var target = "#nradms_bef_blws_km_neu_hoh_"+($(this).attr('id').split("_").pop());
		$(target).prop('checked', false).trigger('change');}})

		
//filter KM and NEU options only to smaller than gesamt
<!-- $('#nradms_bef_kopf_anz').change(function() { -->
	<!-- $('#nradms_bef_kopf_neu_anz option').each(function( i ) { -->
		<!-- if (parseInt(($(this).val()).match(/\d+/)) > parseInt($('#nradms_bef_kopf_anz').val().match(/\d+/))){ -->
			<!-- $(this).attr('disabled','disabled').css('display','none'); -->
			<!-- //$(this).closest('select').val('0').trigger('change');//clear values from new when gesamt is changed -->
			<!-- } -->
		<!-- else { -->
			<!-- $(this).removeAttr('disabled').css('display','');}});}) -->
			
$('#nradms_bef_kopf_km_anz').change(function() {
	$('#nradms_bef_kopf_km_neu_anz option').each(function( i ) {
		if (parseInt(($(this).val()).match(/\d+/)) > parseInt($('#nradms_bef_kopf_km_anz').val().match(/\d+/))){
			$(this).attr('disabled','disabled').css('display','none');
			//$(this).closest('select').val('0').trigger('change');//clear values from new when gesamt is changed
			}
		else {
			$(this).removeAttr('disabled').css('display','');}});})

$('#nradms_bef_kopf_km_neu_anz').change(function() {
	$('#nradms_bef_kopf_km_anz option').each(function( i ) {
		if (parseInt(($(this).val()).match(/\d+/)) < parseInt($('#nradms_bef_kopf_km_neu_anz').val().match(/\d+/))){
			$(this).attr('disabled','disabled').css('display','none');
			//$(this).closest('select').val('0').trigger('change');//clear values from new when gesamt is changed
			}
		else {
			$(this).removeAttr('disabled').css('display','');}});})			
			
			
$('#nradms_bef_hws_anz').change(function() {
	$('#nradms_bef_hws_neu_anz option').each(function( i ) {
		if (parseInt(($(this).val()).match(/\d+/)) > parseInt($('#nradms_bef_hws_anz').val().match(/\d+/))){
			$(this).attr('disabled','disabled').css('display','none');
			//$(this).closest('select').val('0').trigger('change');
			}
		else {
			$(this).removeAttr('disabled').css('display','');}});})
$('#nradms_bef_hws_km_anz').change(function() {
	$('#nradms_bef_hws_km_neu_anz option').each(function( i ) {
		if (parseInt(($(this).val()).match(/\d+/)) > parseInt($('#nradms_bef_hws_km_anz').val().match(/\d+/))){
			$(this).attr('disabled','disabled').css('display','none');
		//	$(this).closest('select').val('0').trigger('change');
		}
		else {
			$(this).removeAttr('disabled').css('display','');}});})			

$('#nradms_bef_blws_anz').change(function() {
	$('#nradms_bef_blws_neu_anz option').each(function( i ) {
		if (parseInt(($(this).val()).match(/\d+/)) > parseInt($('#nradms_bef_blws_anz').val().match(/\d+/))){
			$(this).attr('disabled','disabled').css('display','none');
			//$(this).closest('select').val('0').trigger('change');
			}
		else {
			$(this).removeAttr('disabled').css('display','');}});})
$('#nradms_bef_blws_km_anz').change(function() {
	$('#nradms_bef_blws_km_neu_anz option').each(function( i ) {
		if (parseInt(($(this).val()).match(/\d+/)) > parseInt($('#nradms_bef_blws_km_anz').val().match(/\d+/))){
			$(this).attr('disabled','disabled').css('display','none');
			//$(this).closest('select').val('0').trigger('change');
			}
		else {
			$(this).removeAttr('disabled').css('display','');}});})		

	
$('#nradms_va_ja').change(function(){if('#nradms_va_ja:checked') {
	$('#nradms_va_anz').focus().select();}})	
$('#nradms_ka_diag_sonst').change(function(){if('#nradms_ka_diag_sonst:checked') {
	$('#nradms_ka_diag_sonst_text').focus();}})
$('#nradms_beur_ml_sonst').change(function(){if('#nradms_beur_ml_sonst:checked') {
	$('#nradms_beur_ml_sonst_text').focus();}})
$('#nradms_beur_vv_sonst').change(function(){if('#nradms_beur_vv_sonst:checked') {
	$('#nradms_beur_vv_sonst_text').focus();}})

	
$('#nradms_bef_nbk_atr_ja').change(function(){if($('#nradms_bef_nbk_atr_ja:checked').length) {
	$('#nradms_bef_nbk_liq_nein').prop('checked', false).trigger('change');
	$('#nradms_bef_nbk_liq_ja').prop('checked', true).trigger('change');	}})	
	
$('#nradms_beur_gb_sonst').change(function(){if($('#nradms_beur_gb_sonst:checked').length) {
	$('#nradms_beur_gb_sonst_text').focus();}})	
	
	
	
//MATH - sums of lesions and regions to be used in McDonald Criteria
//DIT McDonald 2017
var les_kopf_nat=0;
var les_kopf_nat_neu=0;
var les_kopf_km=0;
var les_kopf_km_neu=0;
var les_kopf_total=0;
var les_kopf_neu=0;

var les_hws_nat=0;
var les_hws_nat_neu=0;
var les_hws_km=0;
var les_hws_km_neu=0;

var les_blws_nat=0;
var les_blws_nat_neu=0;
var les_blws_km=0;
var les_blws_km_neu=0;


$.fn.max = function(selector) { 
    return Math.max.apply(null, this.map(function(index, el) { return selector.apply(el); }).get() ); 
}

$.fn.min = function(selector) { 
    return Math.min.apply(null, this.map(function(index, el) { return selector.apply(el); }).get() );
}

// Usage:
// var maxWidth = $("a").max(function() {return $(this).width(); });
// var minWidth = $("a").min(function() {return $(this).width(); });



$('#nradms_bef_kopf_anz, #nradms_bef_kopf_neu_anz, #nradms_bef_kopf_km_anz, #nradms_bef_kopf_km_neu_anz').change(function() {
	var les_kopf_nat_neu_sep=', ';
	les_kopf_nat=parseInt($('#nradms_bef_kopf_anz').val().match(/\d+/));
	les_kopf_nat2=$('#nradms_bef_kopf_anz').val();
	les_kopf_nat_neu=parseInt($('#nradms_bef_kopf_neu_anz').val().match(/\d+/));
	les_kopf_nat_neu2=$('#nradms_bef_kopf_neu_anz').val();
	if(les_kopf_nat_neu!=0){
		var les_kopf_nat_neu_t=(les_kopf_nat_neu2+' neue Läsionen').replace('1 neue Läsionen', 'eine neue Läsion');
		}
		else{
		var les_kopf_nat_neu_t='';
		var les_kopf_nat_neu_sep='';
		}
	les_kopf_km=parseInt($('#nradms_bef_kopf_km_anz').val().match(/\d+/));
	les_kopf_km2=$('#nradms_bef_kopf_km_anz').val();
	les_kopf_km_neu=parseInt($('#nradms_bef_kopf_km_neu_anz').val().match(/\d+/));
	les_kopf_km_neu2=$('#nradms_bef_kopf_km_neu_anz').val();
	if(les_kopf_km_neu!=0){
		var les_kopf_km_neu_t=(les_kopf_km_neu2+' neue Läsionen mit Schrankenstörung').replace('1 neue Läsionen', 'eine neue Läsion');}
		else{
		var les_kopf_km_neu_t='';
		var les_kopf_nat_neu_sep='';}
	les_kopf_total=Math.max(les_kopf_nat, les_kopf_km);
	if(les_kopf_nat_neu>les_kopf_km_neu){
		var les_kopf_neu =les_kopf_nat_neu2;}
	else {
		var les_kopf_neu =les_kopf_km_neu2;}


	if(les_kopf_neu!=0){
		if(on_create_page){	
			$('#nradms_beur_dit_nein').prop('checked',false);
			$('#nradms_beur_dit_ja').prop('checked',true).trigger('change');
			$('input[data-group=beur_vv]').prop('checked',false).trigger('change');
			$('#nradms_beur_vv_bs').prop('checked',true).trigger('change');
		}
		$('#nradms_beur_dit_summary').html('('+les_kopf_neu+' neue Läsionen)');
		$('#nradms_beur_vv_bs_summary').html(' ('+les_kopf_nat_neu_t+les_kopf_nat_neu_sep+les_kopf_km_neu_t+')');
		}
	
	else if((les_kopf_nat>0)&&(les_kopf_km>0)){
		if(on_create_page){	
		$('#nradms_beur_dit_nein').prop('checked',false);
		$('#nradms_beur_dit_ja').prop('checked',true).trigger('change');
		}
		$('#nradms_beur_dit_summary').html('(zugleich '+les_kopf_nat+' native & '+les_kopf_km+' KM Läsionen)');}
	else {
		if(on_create_page){	
		$('#nradms_beur_dit_nein').prop('checked',true);
		$('#nradms_beur_dit_ja').prop('checked',false).trigger('change');
		$('#nradms_beur_vv_bs').prop('checked',false).trigger('change');
		}
		$('#nradms_beur_dit_summary').html('');
		$('#nradms_beur_vv_bs_summary').html('');		
		}})
$('#nradms_bef_kopf_anz, #nradms_bef_kopf_neu_anz, #nradms_bef_kopf_km_anz, #nradms_bef_kopf_km_neu_anz').trigger('change');


		
//DIS McDonald 2017
var les_kopf_pv=0;
var les_kopf_kjk=0;
var les_kopf_ift=0;
var les_kopf_sl=0;
var les_kopf_neu_regtotal=0;

$('input[id$=_pv][data-group^=bef_kopf], input[id$=_kjk][data-group^=bef_kopf], input[id$=_ift][data-group^=bef_kopf], #nradms_bef_kopf_sl_ja').change(function() {
	les_kopf_pv=($('input[id$=_pv][data-group^=bef_kopf]:checked').length>0);
	les_kopf_kjk=($('input[id$=_kjk][data-group^=bef_kopf]:checked').length>0);
	les_kopf_ift=($('input[id$=_ift][data-group^=bef_kopf]:checked').length>0);
	les_kopf_sl=($('#nradms_bef_kopf_sl_ja:checked').length);
	les_kopf_neu_regtotal=les_kopf_pv+les_kopf_kjk+les_kopf_ift+les_kopf_sl;
	if(les_kopf_sl>0){var more='>';}else {var more='';} //if spinal present, apply some visual adjustment for the explanation with the lesion count

	if((les_kopf_total>1)&&(les_kopf_neu_regtotal>1)){
		if(on_create_page){	
			$('#nradms_beur_dis_nein').prop('checked',false);
			$('#nradms_beur_dis_ja').prop('checked',true).trigger('change');
		}
		$('#nradms_beur_dis_summary').html('('+more+les_kopf_total+' Läsionen in '+les_kopf_neu_regtotal+' Regionen)');}
	else {
		if(on_create_page){	
		$('#nradms_beur_dis_nein').prop('checked',true);
		$('#nradms_beur_dis_ja').prop('checked',false).trigger('change');
		}
		$('#nradms_beur_dis_summary').html('');	}})

$('#nradms_beur_dis_ja, #nradms_beur_dit_ja').change(function() {
	if($('#nradms_beur_dis_ja:checked, #nradms_beur_dit_ja:checked').length==2){
		$('input[id^=nradms_beur_gb]').prop('checked', false).trigger('change');
		$('#nradms_beur_gb_typ').prop('checked', true).trigger('change');}
	else if ($('#nradms_beur_dis_ja:checked, #nradms_beur_dit_ja:checked').length==1){
		$('input[id^=nradms_beur_gb]').prop('checked', false).trigger('change');
		$('#nradms_beur_gb_ver').prop('checked', true).trigger('change');}
	else {
		$('input[id^=nradms_beur_gb]').prop('checked', false).trigger('change');
		$('#nradms_beur_gb_ut').prop('checked', true).trigger('change');}})


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
<!-- ####################### --><!-- TEXT GENERATION ALGORITHMS --><!-- ####################### -->
 function updateanamnese (){
	 var anamnese = $('#nradms_bericht_anamnese').text();
	 $('#nradms_anamnese').val(anamnese);
 };

 function updateva (){
	 var va = $('#nradms_bericht_voraufnahmen').text();
	 $('#nradms_va').val(va);
 };

 function updatesequenzen (){
	 var sequenzen = $('#nradms_bericht_sequenzen').text();
	 $('#nradms_sequenzen').val(sequenzen);
 };

function updatelesions (){
	 var lesions = $('#nradms_bericht_lesions').text();
	 $('#nradms_lesions').val('&#13;<br>&#13;<br>'+lesions);
 };
 
function updatenebenbefunde (){
	 var nebenbefunde = $('#nradms_bericht_nebenbefunde').text();
	 $('#nradms_nebenbefunde').val('&#13;&nbsp;&#13;<br>'+nebenbefunde);
 };
 
function updatebeurteilung (){
	//first, if there are more conclusions add the number next to the li
		var a=$('#nradms_bericht_beurteilung span.tocount:parent').length;
		if(a>1){
			$('#nradms_bericht_beurteilung span:parent').each(function() {
			$('#nradms_bericht_beurteilung span.tocount:empty').prev('.count').text('');
			var index = $('#nradms_bericht_beurteilung span.tocount:parent').index(this);
			$(this).prev('.count').text((index +1) + ". ");});
		}
		else {
			$('#nradms_bericht_beurteilung span:parent').each(function() {
			$('#nradms_bericht_beurteilung span.tocount:empty').prev('.count').text('');
			$(this).prev('.count').text('');});
		}
	//then copy the content into the textbox
	var beurteilung = $('#nradms_bericht_beurteilung').text().trim();
	$('#nradms_beurteilung').val(beurteilung);
 };




<!-- BERICHT / Klinische Angaben RIS -->
var angaben = $('#nradms_angaben').val();
if(angaben!=''){
	$('#nradms_bericht_angaben').html(angaben+'&#13;<br>');}

<!-- BERICHT / Klinische Angaben / Anamnese / Diagnostik -->
$('input[data-group=ka_diag]').change(function(){
	if($('input[data-group=ka_diag]:checked').length){
		var sel=$('input[data-group=ka_diag]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ");
			$('#nradms_ber_diag').hide().html(''+sel+'.').fadeIn('slow');}
	else{
		$('#nradms_ber_diag').hide().html('').fadeIn();};
	updateanamnese();})
$('input[data-group=ka_diag]').trigger('change'); //compute the default value on loading the edit view
	
$('#nradms_ka_diag_sonst').change(function(){
	if($('#nradms_ka_diag_sonst:checked').length){
		var sel=$(this).attr('data-value');
		$('#nradms_ber_diag_sonst').hide().html(''+sel+'').fadeIn();}
	else{
		$('#nradms_ber_diag_sonst').hide().html('').fadeIn();};
	updateanamnese();})
$('#nradms_ka_diag_sonst_text').trigger('keyup'); //compute the default value on loading the edit view





<!-- BERICHT / Fragestellung RIS -->
var fragestellung_div=$('#nradms_fragestellung_div').text().trim(); // for some reason getting the value directly from textarea does not work here. weird. 
$('#nradms_bericht_fragestellung').html(fragestellung_div);
	



<!-- BERICHT / Voraufnahmen / MRT-Voruntersuchung -->
$('input[data-group=va]').change(function(){
	if($('input[data-group=va]:checked').length){
		if($('#nradms_va_ja:checked').length) {
			$('#nradms_va_anz').trigger('change');}
		else{
			var sel=$('#nradms_va_nein:checked').attr('data-value');
			$('#nradms_ber_va').hide().html(sel+'').fadeIn();
			$('#nradms_va_sonst').attr('data-value', '').val('');
			$('#nradms_ber_va_sonst').hide().html('').fadeIn();}}
	else{
		$('#nradms_ber_va').hide().html('').fadeIn();};
	updateva();})

$('#nradms_va_anz').change(function(){
	if($(this).val()!=1){
		var sel=$(this).val();
		$('#nradms_ber_va').hide().html('Es liegen '+sel+' vergleichbare MRT-Voruntersuchungen vor, zuletzt eine <span id="nradms_vor_lv_typ"></span><span id="nradms_vor_lv_vom"></span>.').fadeIn();
		$('input[data-group=va_lv]').trigger('change');
		$('#nradms_va_lv_vom').trigger('change');}
	else if ($(this).val()==1) {
		$('#nradms_ber_va').hide().html('Es liegt eine vergleichbare <span id="nradms_vor_lv_typ"></span> <span id="nradms_vor_lv_vom"></span> vor.').fadeIn();
		$('input[data-group=va_lv]').trigger('change');
		$('#nradms_va_lv_vom').trigger('change');}
	else{
		$('#nradms_ber_va').hide().html('').fadeIn();};
	updateva();})
$('input[data-group=va]').trigger('change');	//compute the default value on loading the edit view

$('input[data-group=va_lv]').change(function(){
	if($('input[data-group=va_lv]:checked').length) {
		var sel=$('input[data-group=va_lv]:checked').attr('data-value');
		$('#nradms_vor_lv_typ').hide().html(sel).fadeIn();}
	else {
		$('#nradms_vor_lv_typ').hide().html('vergleichbare MRT-Voruntersuchung').fadeIn();}
	updateva();}) 
$('input[data-group=va_lv]').trigger('change'); //compute the default value on loading the edit view

$( function() {
	$( "#nradms_va_lv_vom" ).datepicker($.datepicker.regional["de"]);} );	
$('#nradms_va_lv_vom').change(function() {
	if($(this).val().length){
		var sel=$(this).val();
		$('#nradms_vor_lv_vom').hide().html(' vom '+sel).fadeIn();	}
	else {
		$('#nradms_vor_lv_vom').hide().html('').fadeIn();}
	updateva();}) 	
$('#nradms_va_lv_vom').trigger('change'); //compute the default value on loading the edit view
	
$('#nradms_va_sonst').keyup(function() {
	if($(this).val().length){
		var sel=$(this).val();
		$('#nradms_ber_va_sonst').hide().html(' '+sel+'. ').fadeIn();}
	else{
		$('#nradms_ber_va_sonst').hide().html('').fadeIn();}
	updateva();})
$('#nradms_va_sonst').trigger('keyup'); //compute the default value on loading the edit view







<!-- BERICHT / BEFUND -->	
<!-- BERICHT / BEFUND / Sequenzen -->
$('input[data-group^=seq]').change(function(){
	if($('input[data-group^=seq]:checked').length) {
		var sel=$('input[data-group^=seq]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ");
		$('#nradms_ber_seq').hide().html('<u>Technik</u>: '+sel+'. ').fadeIn();}
	else{
		$('#nradms_ber_seq').hide().html('').fadeIn();}
	updatesequenzen();})
$('input[data-group^=seq]').trigger('change'); //compute the default value on loading the edit view
	
$('input[data-group=bef_seq_bildq]').change(function() {
	if($('input[data-group=bef_seq_bildq]:checked').length) {
		var sel = $('input[data-group=bef_seq_bildq]:checked').attr('data-value');
		$('#nradms_ber_bef_seq_bildq').hide().html('&#13;'+sel+'. ').fadeIn();} 
	else{
		$('#nradms_ber_bef_seq_bildq').hide().html('').fadeIn();};
	updatesequenzen();})
$('input[data-group=bef_seq_bildq]').trigger('change'); //compute the default value on loading the edit view
	
$('input[data-group=bef_seq_eh]').change(function() {
	if($('input[data-group=bef_seq_eh]:checked').length) {
		var sel = 'Abgebildet: '+$('input[data-group=bef_seq_eh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und').replace(', Halswirbelsäule und Brust- und Lendenwirbelsäule', ' und gesamtes Myelon').replace('Halswirbelsäule und Brust- und Lendenwirbelsäule', 'gesamtes Myelon')+'.';
		if(($('input[data-group=bef_seq_eh]:checked').length==1)||($('#nradms_bef_seq_abg_kopf:checked').length==0)){
			sel=sel.replace('Höhen', 'Höhe');}
		$('#nradms_ber_bef_seq_eq').hide().html(sel).fadeIn();
		$('#nradms_bef_kopf_sp_niv').trigger('change');} 
	else{
		$('#nradms_ber_bef_seq_eq').hide().html('').fadeIn();};
	updatesequenzen();})
$('input[data-group=bef_seq_eh]').trigger('change'); //compute the default value on loading the edit view

















<!-- BERICHT / Befund / Kopf -->
$('#nradms_bef_seq_abg_kopf').change(function(){
	if($('#nradms_bef_seq_abg_kopf:checked').length) {
		$('#nradms_ber_kopf').html("<span id='nradms_kopf'>Kein Anhalt für entzündliche Läsionen des <u>Hirnparenchyms</u>.</span> <span id='nradms_kopf_km'></span>&#13;&#13;");}
	else {
		$('#nradms_ber_kopf').hide().html('').fadeIn();
		$('td[id^=bef_kopf_]').find('input, select').prop('checked', false).prop('selectedIndex',0).trigger('change'); //clear all respective values when kopf is unselected
				}
	updatelesions();})
$('#nradms_bef_seq_abg_kopf').trigger('change'); //compute the default value on loading the edit view

//Voraufnahmen value clearing
$('#nradms_va_ja').change(function(){
	if(!($('#nradms_va_ja').is(':checked'))) {
		$('td[id$="_neu"]').find('input, select').prop('checked', false).prop('selectedIndex',0).trigger('change');
		$('#nradms_bericht_befund span[id$=_neu]').html("");}
	else{
		$('select[id$=_neu_anz]').trigger("change");
	}
	})


<!-- BERICHT / Befund / Kopf / nativ -->
//construct the initial paragraph to be populated
$('#nradms_bef_kopf_anz, #nradms_bef_kopf_neu_anz, #nradms_bef_kopf_km_anz, #nradms_bef_kopf_km_neu_anz').change(function(e){
	e.stopPropagation();
	var kopf_anz=$('#nradms_bef_kopf_anz').val();
	var kopf_anz2=parseInt($('#nradms_bef_kopf_anz').val().match(/\d+/))+parseInt($('#nradms_bef_kopf_neu_anz').val().match(/\d+/))+parseInt($('#nradms_bef_kopf_km_anz').val().match(/\d+/))+parseInt($('#nradms_bef_kopf_km_neu_anz').val().match(/\d+/));
	var total_les_anz =parseInt($('#nradms_bef_kopf_anz').val().match(/\d+/))+parseInt($('#nradms_bef_kopf_km_anz').val().match(/\d+/));
	if(kopf_anz2!=0) {
		$('#nradms_kopf').html('Es zeigen sich folgende FLAIR-hyperintense Läsionen des <u>Hirnparenchyms</u>:&#13;<br>- '+kopf_anz+" spezifische Läsionen<span id='nradms_kopf_hoh'></span><span id='nradms_kopf_reg'></span>.<span id='nradms_kopf_neu'></span><span id='nradms_kopf_neu_reg'></span>").html(function(i, text){return text.replace('1 spezifische Läsionen','1 spezifische Läsion').replace('- 0 spezifische Läsionen','- keine spezifische Läsionen');});
		$('input[data-group=bef_kopf_hoh_s]').trigger('change');}
	else {
		$('#nradms_kopf').html("Kein Anhalt für entzündliche Läsionen des <u>Hirnparenchyms</u>.<span id='nradms_kopf_neu'></span><span id='nradms_kopf_neu_reg'></span>");
		$('#nradms_ber_kopf').html(function(i, text){return text.replace('<span id="nradms_kopf">Kein Anhalt für entzündliche Läsionen.<span id="nradms_kopf_neu"></span><span id="nradms_kopf_neu_reg"></span></span> <span id="nradms_kopf_km"><br>Keine KM-aufnehmende Läsionen erkennbar.</span>', '<span id="nradms_kopf">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_kopf_km"></span>')});
		$('input[data-group=bef_kopf_hoh_s]').prop('checked', false);}
	if($('#nradms_va_ja:checked').length) {
		//var kopf_neu_anz=parseInt(($('#nradms_bef_kopf_neu_anz').val()).match(/\d+/));
		var kopf_neu_anz=$('#nradms_bef_kopf_neu_anz').val();
		if(kopf_neu_anz!=0) {
			$('#nradms_kopf_neu').html("<br>&#13;- "+kopf_neu_anz+" neue Läsionen<span id='nradms_kopf_hoh_neu'></span><span id='nradms_kopf_neu_reg'></span>.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_kopf_neu_hoh_s]').trigger('change');
			$('input[data-group=bef_kopf_neu_reg]').trigger('change');
			}
		else {
			$('#nradms_kopf_neu').html(" Keine neuen Läsionen.");
			$('input[data-group=bef_kopf_neu_hoh_s]').prop('checked', false);}}
	updatelesions();})
$('#nradms_bef_kopf_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_hoh_s]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_kopf_hoh_s]:checked').length){
		var sel=$('input[data-group=bef_kopf_hoh_s]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
		$('#nradms_kopf_hoh').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_kopf_hoh').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_hoh_s]').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_reg]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_kopf_reg]:checked').length){
		var sel=' ('+$('input[data-group=bef_kopf_reg]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace('frontal rechts, frontal links','frontal rechts und links').replace('temporal rechts, temporal links','temporal rechts und links').replace('insulär rechts, insulär links','insulär rechts und links').replace('parietal rechts, parietal links','parietal rechts und links').replace('occipital rechts, occipital links','occipital rechts und links').replace(/,(?!.*,)/gmi, ' sowie')+')';
		$('#nradms_kopf_reg').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_kopf_reg').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_reg]').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_neu_hoh_s]').change(function(e){
	e.stopPropagation();
		if($('input[data-group=bef_kopf_neu_hoh_s]:checked').length){
			var sel=$('input[data-group=bef_kopf_neu_hoh_s]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
			$('#nradms_kopf_hoh_neu').hide().html(' '+sel).fadeIn();
			$('input[data-group=bef_kopf_hoh_s]').trigger('change');}
	 	else{
	 		$('#nradms_kopf_hoh_neu').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_neu_hoh_s]').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_neu_reg]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_kopf_neu_reg]:checked').length){
		var sel=' ('+$('input[data-group=bef_kopf_neu_reg]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace('frontal rechts, frontal links','frontal rechts und links').replace('temporal rechts, temporal links','temporal rechts und links').replace('insulär rechts, insulär links','insulär rechts und links').replace('parietal rechts, parietal links','parietal rechts und links').replace('occipital rechts, occipital links','occipital rechts und links').replace(/,(?!.*,)/gmi, ' sowie')+')';
		$('#nradms_kopf_neu_reg').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_kopf_neu_reg').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_neu_reg]').trigger('change'); //compute the default value on loading the edit view


<!-- BERICHT / Befund / Kopf / KM -->
//KM value clearing
$('input[data-group=seq_kopf][data-value$=KM]').change(function(){
	if(!($('input[data-group=seq_kopf][data-value$=KM]').is(':checked'))) {
		$('td[id^=nradms_bef_kopf_km]').find('input, select').prop('checked', false).prop('selectedIndex',0).trigger('change');
		$('#nradms_kopf_km').html("");}
	else{
		$('select[id$=kopf_km_anz]').trigger("change");
		$('select[id$=kopf_km_neu_anz]').trigger("change");
	}})

	
$('#nradms_bef_kopf_km_anz').change(function(e){
	e.stopPropagation();
	var kopf_km_anz=$('#nradms_bef_kopf_km_anz').val();
	var kopf_km_anz2=parseInt($('#nradms_bef_kopf_km_anz').val().match(/\d+/));
	var total_les_anz=parseInt($('#nradms_bef_kopf_anz').val().match(/\d+/))+parseInt($('#nradms_bef_kopf_km_anz').val().match(/\d+/));
	if($('input[data-group^=seq_kopf][data-value$=KM]').is(':checked')){
		if(kopf_km_anz!=0) {
			$('#nradms_kopf_km').html('&#13;<br>- '+kopf_km_anz+" Läsionen mit Schrankenstörung<span id='nradms_kopf_km_hoh'></span><span id='nradms_kopf_km_reg'></span>. <span id='nradms_kopf_km_neu'></span><span id='nradms_kopf_km_neu_reg'></span>").html(function(i, text){return text.replace('1 Läsionen','1 Läsion');});
			$('input[data-group=bef_kopf_km_hoh_s]').trigger('change');
			if($('#nradms_va_ja:checked').length) { //populate the new if shown
				$('#nradms_bef_kopf_km_neu_anz').trigger('change');}
			}
		else {
			$('#nradms_kopf_km').html("&#13;<br>- Keine KM-aufnehmende Läsionen erkennbar.");
			$('#nradms_ber_kopf').html(function(i, text){return text.replace('<span id="nradms_kopf">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_kopf_km"><br>- Keine KM-aufnehmende Läsionen erkennbar.</span>', '<span id="nradms_kopf">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_kopf_km"></span>')});
			$('input[data-group=bef_kopf_km_hoh_s]').prop('checked', false);}}
	else{
		$('#nradms_kopf_km').html("");
	}
	updatelesions();})
$('#nradms_bef_kopf_km_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_km_hoh_s]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_kopf_km_hoh_s]:checked').length){
		var sel=$('input[data-group=bef_kopf_km_hoh_s]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
		$('#nradms_kopf_km_hoh').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_kopf_km_hoh').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_km_hoh_s]').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_km_reg]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_kopf_km_reg]:checked').length){
		var sel=' ('+$('input[data-group=bef_kopf_km_reg]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace('frontal rechts, frontal links','frontal rechts und links').replace('temporal rechts, temporal links','temporal rechts und links').replace('insulär rechts, insulär links','insulär rechts und links').replace('parietal rechts, parietal links','parietal rechts und links').replace('occipital rechts, occipital links','occipital rechts und links').replace(/,(?!.*,)/gmi, ' sowie')+')';
		$('#nradms_kopf_km_reg').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_kopf_km_reg').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_km_reg]').trigger('change'); //compute the default value on loading the edit view

$('#nradms_bef_kopf_km_neu_anz').change(function(e){
	e.stopPropagation();
	if($('#nradms_va_ja:checked').length) {
		var kopf_km_neu_anz=$('#nradms_bef_kopf_km_neu_anz').val();
		if(kopf_km_neu_anz!=0) {
			$('#nradms_kopf_km_neu').html("<br>- "+kopf_km_neu_anz+" neue Läsionen mit Schrankenstörung<span id='nradms_kopf_km_hoh_neu'></span><span id='nradms_kopf_km_neu_reg'></span>.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_kopf_km_neu_hoh_s]').trigger('change');
			$('input[data-group=bef_kopf_km_neu_reg]').trigger('change');
			}
		else {
			$('#nradms_kopf_km_neu').html("Keine neuen Läsionen mit Schrankenstörung.");
			$('input[data-group=bef_kopf_km_neu_hoh_s]').prop('checked', false);}
		updatelesions();}})
$('#nradms_bef_kopf_km_neu_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_km_neu_hoh_s]').change(function(e){
	e.stopPropagation();
		if($('input[data-group=bef_kopf_km_neu_hoh_s]:checked').length){
			var sel=$('input[data-group=bef_kopf_km_neu_hoh_s]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
			$('#nradms_kopf_km_hoh_neu').hide().html(' '+sel).fadeIn();
			$('input[data-group=bef_kopf_km_hoh_s]').trigger('change');}
	 	else{
	 		$('#nradms_kopf_km_hoh_neu').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_km_neu_hoh_s]').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_km_neu_reg]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_kopf_km_neu_reg]:checked').length){
		var sel=' ('+$('input[data-group=bef_kopf_km_neu_reg]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace('frontal rechts, frontal links','frontal rechts und links').replace('temporal rechts, temporal links','temporal rechts und links').replace('insulär rechts, insulär links','insulär rechts und links').replace('parietal rechts, parietal links','parietal rechts und links').replace('occipital rechts, occipital links','occipital rechts und links').replace(/,(?!.*,)/gmi, ' sowie')+')';
		$('#nradms_kopf_km_neu_reg').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_kopf_km_neu_reg').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_kopf_km_neu_reg]').trigger('change'); //compute the default value on loading the edit view

<!-- BERICHT / Befund / Kopf / SKL, konf, spinal, sonstiges -->

$('input[data-group=bef_kopf_skl]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_kopf_skl]:checked').length)) {
		var sel=$('input[data-group=bef_kopf_skl]:checked').attr('data-value');
		$('#nradms_ber_kopf_skl').hide().html('&#13;<br>'+sel).fadeIn();}
	else {
		$('#nradms_ber_kopf_skl').hide().html('').fadeIn();}
	updatelesions();}) 	
$('input[data-group=bef_kopf_skl]').trigger('change') //compute the default value on loading the edit view

$('input[data-group=bef_kopf_konf]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_kopf_konf]:checked').length)) {
		var sel=$('input[data-group=bef_kopf_konf]:checked').attr('data-value');
		$('#nradms_ber_kopf_konf').hide().html('&#13;<br>'+sel).fadeIn();}
	else {
		$('#nradms_ber_kopf_konf').hide().html('').fadeIn();}
	updatelesions();}) 	
$('input[data-group=bef_kopf_konf]').trigger('change') //compute the default value on loading the edit view






$('#nradms_bef_kopf_sp_niv').change(function(e){
 if(($(this).is(':visible'))&&(($('#nradms_bef_seq_abg_hws:checked').length+$('#nradms_bef_seq_abg_blws:checked').length)==0)){
	var sel=$('#nradms_bef_kopf_sp_niv').val();
	$('#nradms_ber_kopf_sp_niv').hide().html('&#13;<br>Das Myelon ist erfasst bis '+sel+'. ').fadeIn();
	}
	else {	$('#nradms_ber_kopf_sp_niv').hide().html('').fadeIn();	}
	updatelesions();})
$('#nradms_bef_kopf_sp_niv').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_kopf_hoh_sp]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_kopf_hoh_sp]:checked').length)) {
		var sel=$('input[data-group=bef_kopf_hoh_sp]:checked').attr('data-value');
		if($('input[data-group2=bef_kopf_hoh_spl]:checked').length) {
			var sell=' ('+$('input[data-group2=bef_kopf_hoh_spl]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ")+')';}
			else {
				var sell='';}
		$('#nradms_ber_kopf_hoh_sp').hide().html(sel+sell+'. ').fadeIn();}
	else {
		$('#nradms_ber_kopf_hoh_sp').hide().html('').fadeIn();}
	updatelesions();}) 	
$('input[data-group=bef_kopf_hoh_sp]').trigger('change') //compute the default value on loading the edit view

$('input[data-group=bef_kopf_spvu]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_kopf_spvu]:checked').length)) {
		var sel=$('input[data-group=bef_kopf_spvu]:checked').attr('data-value');
		$('#nradms_ber_kopf_spvu').hide().html('&#13;<br>'+sel).fadeIn();}
	else {
		$('#nradms_ber_kopf_spvu').hide().html('').fadeIn();}
	updatelesions();}) 	
$('input[data-group=bef_kopf_spvu]').trigger('change') //compute the default value on loading the edit view





$('#nradms_bef_kopf_sonst').keyup(function() {
	if(($(this).is(':visible'))&&($(this).val().length)){
		var sel=$(this).val();
		$('#nradms_ber_kopf_sonst').hide().html('&#13;<br>'+sel+'. ').fadeIn();}
	else{
		$('#nradms_ber_kopf_sonst').hide().html('').fadeIn();}
	updateva();})
$('#nradms_bef_kopf_sonst').trigger('keyup'); //compute the default value on loading the edit view
















<!-- BERICHT / Befund / HWS -->
<!-- BERICHT / Befund / HWS / Alle -->
$('#nradms_bef_seq_abg_hws').change(function(){
	if($('#nradms_bef_seq_abg_hws:checked').length) {
		$('#nradms_ber_hws').html("<span id='nradms_hws'>Kein Anhalt für entzündliche Läsionen der <u>Halswirbelsäule</u>.</span> <span id='nradms_hws_km'></span>&#13;&#13;");}
	else {
		$('#nradms_ber_hws').hide().html('').fadeIn();
		$('td[id^=nradms_bef_hws_]').find('input, select').prop('checked', false).prop('selectedIndex',0).trigger('change'); //clear all respective values when hws is unselected
				}
	updatelesions();})
$('#nradms_bef_seq_abg_hws').trigger('change'); //compute the default value on loading the edit view



$('#nradms_bef_hws_anz, #nradms_bef_hws_neu_anz, #nradms_bef_hws_km_anz, #nradms_bef_hws_km_neu_anz').change(function(e){
	e.stopPropagation();
	var hws_anz=$('#nradms_bef_hws_anz').val();
	var hws_anz2=parseInt($('#nradms_bef_hws_anz').val().match(/\d+/))+parseInt($('#nradms_bef_hws_neu_anz').val().match(/\d+/))+parseInt($('#nradms_bef_hws_km_anz').val().match(/\d+/))+parseInt($('#nradms_bef_hws_km_neu_anz').val().match(/\d+/));
	var total_les_anz =parseInt($('#nradms_bef_hws_anz').val().match(/\d+/))+parseInt($('#nradms_bef_hws_km_anz').val().match(/\d+/));
	if(hws_anz2!=0) {
		$('#nradms_hws').html('Es zeigen sich folgende T2-hyperintense Läsionen der <u>Halswirbelsäule</u>:&#13;<br>- '+hws_anz+" Läsionen<span id='nradms_hws_hoh'></span><span id='nradms_hws_reg'></span>.<span id='nradms_hws_neu'></span>").html(function(i, text){return text.replace('1 Läsionen','1 Läsion').replace('- 0 Läsionen','- keine Läsionen');});
		$('input[data-group=bef_hws_hoh_s]').trigger('change');}
	else {
		$('#nradms_hws').html("Kein Anhalt für entzündliche Läsionen der <u>Halswirbelsäule</u>.<span id='nradms_hws_neu'></span>");
		$('#nradms_ber_hws').html(function(i, text){return text.replace('<span id="nradms_hws">Kein Anhalt für entzündliche Läsionen.<span id="nradms_hws_neu"></span></span> <span id="nradms_hws_km"><br>Keine KM-aufnehmende Läsionen erkennbar.</span>', '<span id="nradms_hws">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_hws_km"></span>')});
		$('input[data-group=bef_hws_hoh_s]').prop('checked', false);}
	if($('#nradms_va_ja:checked').length) {
		//var hws_neu_anz=parseInt(($('#nradms_bef_hws_neu_anz').val()).match(/\d+/));
		var hws_neu_anz=$('#nradms_bef_hws_neu_anz').val();
		if(hws_neu_anz!=0) {
			$('#nradms_hws_neu').html("<br>&#13;- "+hws_neu_anz+" neue Läsionen<span id='nradms_hws_hoh_neu'></span>.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_hws_neu_hoh_s]').trigger('change');
			}
		else {
			$('#nradms_hws_neu').html(" Keine neuen Läsionen.");
			$('input[data-group=bef_hws_neu_hoh_s]').prop('checked', false);}}
	updatelesions();})
$('#nradms_bef_hws_anz').trigger('change'); //compute the default value on loading the edit view


$('input[data-group=bef_hws_hoh]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_hws_hoh]:checked').length){
		var sel=$('input[data-group=bef_hws_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' sowie');
		$('#nradms_hws_hoh').hide().html(' auf Höhe '+sel).fadeIn();}
	 else{
	 	$('#nradms_hws_hoh').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_hws_hoh]').trigger('change'); //compute the default value on loading the edit view

$('#nradms_bef_hws_neu_anz').change(function(e){
	e.stopPropagation();
	if($('#nradms_va_ja:checked').length) {
		var hws_neu_anz=$('#nradms_bef_hws_neu_anz').val();
		if(hws_neu_anz>0) {
			$('#nradms_hws_neu').html("&#13;<br>- "+hws_neu_anz+" neue Läsionen <span id='nradms_hws_hoh_neu'></span><span id='nradms_hws_neu_reg'></span> vorhanden.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_hws_neu_hoh]').trigger('change');
			}
		else {
			$('#nradms_hws_neu').html(" Keine neuen Läsionen vorhanden.");
			$('input[data-group=bef_hws_neu_hoh]').prop('checked', false);}
		updatelesions();}})
$('#nradms_bef_hws_neu_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_hws_neu_hoh]').change(function(e){
	e.stopPropagation();
		if($('input[data-group=bef_hws_neu_hoh]:checked').length){
			var sel=$('input[data-group=bef_hws_neu_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' sowie');
			$('#nradms_hws_hoh_neu').hide().html(' auf Höhe '+sel).fadeIn();
			$('input[data-group=bef_hws_hoh]').trigger('change');}
	 	else{
	 		$('#nradms_hws_hoh_neu').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_hws_neu_hoh]').trigger('change'); //compute the default value on loading the edit view


$('#nradms_bef_hws_km_anz').change(function(e){
	e.stopPropagation();
	var hws_km_anz=$('#nradms_bef_hws_km_anz').val();
	var hws_km_anz2=parseInt($('#nradms_bef_hws_km_anz').val().match(/\d+/));
	var total_les_anz=parseInt($('#nradms_bef_hws_anz').val().match(/\d+/))+parseInt($('#nradms_bef_hws_km_anz').val().match(/\d+/));
	if($('input[data-group^=seq_ws][data-value$=KM]').is(':checked')){
		if(hws_km_anz!=0) {
			$('#nradms_hws_km').html('&#13;<br>- '+hws_km_anz+" Läsionen mit Schrankenstörung<span id='nradms_hws_km_hoh'></span><span id='nradms_hws_km_reg'></span>. <span id='nradms_hws_km_neu'></span>").html(function(i, text){return text.replace('1 Läsionen','1 Läsion');});
			$('input[data-group=bef_hws_km_hoh_s]').trigger('change');
			if($('#nradms_va_ja:checked').length) { //populate the new if shown
				$('#nradms_bef_hws_km_neu_anz').trigger('change');}
			}
		else {
			$('#nradms_hws_km').html("&#13;<br>- Keine KM-aufnehmende Läsionen erkennbar.");
			$('#nradms_ber_hws').html(function(i, text){return text.replace('<span id="nradms_hws">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_hws_km"><br>- Keine KM-aufnehmende Läsionen erkennbar.</span>', '<span id="nradms_hws">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_hws_km"></span>')});
			$('input[data-group=bef_hws_km_hoh_s]').prop('checked', false);}}
	else{
		$('#nradms_hws_km').html("");
	}
	updatelesions();})
$('#nradms_bef_hws_km_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_hws_km_hoh]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_hws_km_hoh]:checked').length){
		var sel=$('input[data-group=bef_hws_km_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
		$('#nradms_hws_km_hoh').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_hws_km_hoh').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_hws_km_hoh]').trigger('change'); //compute the default value on loading the edit view

$('#nradms_bef_hws_km_neu_anz').change(function(e){
	e.stopPropagation();
	if($('#nradms_va_ja:checked').length) {
		var hws_km_neu_anz=$('#nradms_bef_hws_km_neu_anz').val();
		if(hws_km_neu_anz>0) {
			$('#nradms_hws_km_neu').html("&#13;<br>- "+hws_km_neu_anz+" neue Läsionen mit Schrankenstörung<span id='nradms_hws_km_hoh_neu'></span>.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_hws_km_neu_hoh]').trigger('change');
			$('input[data-group=bef_hws_km_neu_reg]').trigger('change');
			}
		else {
			$('#nradms_hws_km_neu').html("Keine neuen Läsionen mit Schrankenstörung.");
			$('input[data-group=bef_hws_km_neu_hoh]').prop('checked', false);}
		updatelesions();}})
$('#nradms_bef_hws_km_neu_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_hws_km_neu_hoh]').change(function(e){
	e.stopPropagation();
		if($('input[data-group=bef_hws_km_neu_hoh]:checked').length){
			var sel=$('input[data-group=bef_hws_km_neu_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
			$('#nradms_hws_km_hoh_neu').hide().html(' '+sel).fadeIn();
			$('input[data-group=bef_hws_km_hoh]').trigger('change');}
	 	else{
	 		$('#nradms_hws_km_hoh_neu').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_hws_km_neu_hoh]').trigger('change'); //compute the default value on loading the edit view






<!-- BERICHT / Befund / HWS / Sonstiges -->	 
$('input[data-group=bef_hws_konf]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_hws_konf]:checked').length)) {
		var sel=$('input[data-group=bef_hws_konf]:checked').attr('data-value');
		$('#nradms_ber_hws_konf').hide().html('&#13;<br>'+sel+' ').fadeIn();}
	else {
		$('#nradms_ber_hws_konf').hide().html('').fadeIn();}
	updatelesions();}) 	
$('input[data-group=bef_hws_konf]').trigger('change'); //compute the default value on loading the edit view

$('#nradms_bef_hws_sonst').keyup(function() {
	if(($(this).is(':visible'))&&($(this).val().length)){
		var sel=$(this).val();
		$('#nradms_ber_hws_sonst').hide().html(sel+'.&#13;<br>').fadeIn();}
	else{
		$('#nradms_ber_hws_sonst').hide().html('').fadeIn();}
	updatelesions();})	
$('#nradms_bef_hws_sonst').trigger('keyup'); //compute the default value on loading the edit view




<!-- BERICHT / Befund / BLWS / Alle -->
$('#nradms_bef_seq_abg_blws').change(function(){
	if($('#nradms_bef_seq_abg_blws:checked').length) {
		$('#nradms_ber_blws').html("<span id='nradms_blws'>Kein Anhalt für entzündliche Läsionen der <u>Brust- und Lendenwirbelsäule</u>.</span> <span id='nradms_blws_km'></span>&#13;<br>");}
	else {
		$('#nradms_ber_blws').hide().html('').fadeIn();
		$('td[id^=nradms_bef_blws_]').find('input, select').prop('checked', false).prop('selectedIndex',0).trigger('change'); //clear all respective values when blws is unselected
				}
	updatelesions();})
$('#nradms_bef_seq_abg_blws').trigger('change'); //compute the default value on loading the edit view



$('#nradms_bef_blws_anz, #nradms_bef_blws_neu_anz, #nradms_bef_blws_km_anz, #nradms_bef_blws_km_neu_anz').change(function(e){
	e.stopPropagation();
	var blws_anz=$('#nradms_bef_blws_anz').val();
	var blws_anz2=parseInt($('#nradms_bef_blws_anz').val().match(/\d+/))+parseInt($('#nradms_bef_blws_neu_anz').val().match(/\d+/))+parseInt($('#nradms_bef_blws_km_anz').val().match(/\d+/))+parseInt($('#nradms_bef_blws_km_neu_anz').val().match(/\d+/));
	var total_les_anz =parseInt($('#nradms_bef_blws_anz').val().match(/\d+/))+parseInt($('#nradms_bef_blws_km_anz').val().match(/\d+/));
	if(blws_anz2!=0) {
		$('#nradms_blws').html('Es zeigen sich folgende T2-hyperintense Läsionen der <u>Brust- und Lendenwirbelsäule</u>:&#13;<br>- '+blws_anz+" Läsionen<span id='nradms_blws_hoh'></span><span id='nradms_blws_reg'></span>.<span id='nradms_blws_neu'></span>").html(function(i, text){return text.replace('1 Läsionen','1 Läsion').replace('- 0 Läsionen','- keine Läsionen');});
		$('input[data-group=bef_blws_hoh_s]').trigger('change');}
	else {
		$('#nradms_blws').html("Kein Anhalt für entzündliche Läsionen der <u>Brust- und Lendenwirbelsäule</u>.<span id='nradms_blws_neu'></span>");
		$('#nradms_ber_blws').html(function(i, text){return text.replace('<span id="nradms_blws">Kein Anhalt für entzündliche Läsionen.<span id="nradms_blws_neu"></span></span> <span id="nradms_blws_km"><br>Keine KM-aufnehmende Läsionen erkennbar.</span>', '<span id="nradms_blws">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_blws_km"></span>')});
		$('input[data-group=bef_blws_hoh_s]').prop('checked', false);}
	if($('#nradms_va_ja:checked').length) {
		//var blws_neu_anz=parseInt(($('#nradms_bef_blws_neu_anz').val()).match(/\d+/));
		var blws_neu_anz=$('#nradms_bef_blws_neu_anz').val();
		if(blws_neu_anz!=0) {
			$('#nradms_blws_neu').html("<br>&#13;- "+blws_neu_anz+" neue Läsionen<span id='nradms_blws_hoh_neu'></span>.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_blws_neu_hoh_s]').trigger('change');
			}
		else {
			$('#nradms_blws_neu').html(" Keine neuen Läsionen.");
			$('input[data-group=bef_blws_neu_hoh_s]').prop('checked', false);}}
	updatelesions();})
$('#nradms_bef_blws_anz').trigger('change'); //compute the default value on loading the edit view


$('input[data-group=bef_blws_hoh]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_blws_hoh]:checked').length){
		var sel=$('input[data-group=bef_blws_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' sowie');
		$('#nradms_blws_hoh').hide().html(' auf Höhe '+sel).fadeIn();}
	 else{
	 	$('#nradms_blws_hoh').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_blws_hoh]').trigger('change'); //compute the default value on loading the edit view

$('#nradms_bef_blws_neu_anz').change(function(e){
	e.stopPropagation();
	if($('#nradms_va_ja:checked').length) {
		var blws_neu_anz=$('#nradms_bef_blws_neu_anz').val();
		if(blws_neu_anz>0) {
			$('#nradms_blws_neu').html("<br>- "+blws_neu_anz+" neue Läsionen <span id='nradms_blws_hoh_neu'></span><span id='nradms_blws_neu_reg'></span> vorhanden.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_blws_neu_hoh]').trigger('change');
			}
		else {
			$('#nradms_blws_neu').html(" Keine neuen Läsionen vorhanden.");
			$('input[data-group=bef_blws_neu_hoh]').prop('checked', false);}
		updatelesions();}})
$('#nradms_bef_blws_neu_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_blws_neu_hoh]').change(function(e){
	e.stopPropagation();
		if($('input[data-group=bef_blws_neu_hoh]:checked').length){
			var sel=$('input[data-group=bef_blws_neu_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' sowie');
			$('#nradms_blws_hoh_neu').hide().html(' auf Höhe '+sel).fadeIn();
			$('input[data-group=bef_blws_hoh]').trigger('change');}
	 	else{
	 		$('#nradms_blws_hoh_neu').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_blws_neu_hoh]').trigger('change'); //compute the default value on loading the edit view


$('#nradms_bef_blws_km_anz').change(function(e){
	e.stopPropagation();
	var blws_km_anz=$('#nradms_bef_blws_km_anz').val();
	var blws_km_anz2=parseInt($('#nradms_bef_blws_km_anz').val().match(/\d+/));
	var total_les_anz=parseInt($('#nradms_bef_blws_anz').val().match(/\d+/))+parseInt($('#nradms_bef_blws_km_anz').val().match(/\d+/));
	if($('input[data-group^=seq_ws][data-value$=KM]').is(':checked')){
		if(blws_km_anz!=0) {
			$('#nradms_blws_km').html('&#13;<br>- '+blws_km_anz+" Läsionen mit Schrankenstörung<span id='nradms_blws_km_hoh'></span><span id='nradms_blws_km_reg'></span>. <span id='nradms_blws_km_neu'></span>").html(function(i, text){return text.replace('1 Läsionen','1 Läsion');});
			$('input[data-group=bef_blws_km_hoh_s]').trigger('change');
			if($('#nradms_va_ja:checked').length) { //populate the new if shown
				$('#nradms_bef_blws_km_neu_anz').trigger('change');}
			}
		else {
			$('#nradms_blws_km').html("&#13;<br>- Keine KM-aufnehmende Läsionen erkennbar.");
			$('#nradms_ber_blws').html(function(i, text){return text.replace('<span id="nradms_blws">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_blws_km"><br>- Keine KM-aufnehmende Läsionen erkennbar.</span>', '<span id="nradms_blws">Kein Anhalt für entzündliche Läsionen.</span><span id="nradms_blws_km"></span>')});
			$('input[data-group=bef_blws_km_hoh_s]').prop('checked', false);}}
	else{
		$('#nradms_blws_km').html("");
	}
	updatelesions();})
$('#nradms_bef_blws_km_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_blws_km_hoh]').change(function(e){
	e.stopPropagation();
	if($('input[data-group=bef_blws_km_hoh]:checked').length){
		var sel=$('input[data-group=bef_blws_km_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
		$('#nradms_blws_km_hoh').hide().html(' '+sel).fadeIn();}
	 else{
	 	$('#nradms_blws_km_hoh').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_blws_km_hoh]').trigger('change'); //compute the default value on loading the edit view

$('#nradms_bef_blws_km_neu_anz').change(function(e){
	e.stopPropagation();
	if($('#nradms_va_ja:checked').length) {
		var blws_km_neu_anz=$('#nradms_bef_blws_km_neu_anz').val();
		if(blws_km_neu_anz>0) {
			$('#nradms_blws_km_neu').html("&#13;<br>- "+blws_km_neu_anz+" neue Läsionen mit Schrankenstörung<span id='nradms_blws_km_hoh_neu'></span>.").html(function(i, text){return text.replace('1 neue Läsionen','1 neue Läsion');});
			$('input[data-group=bef_blws_km_neu_hoh]').trigger('change');
			$('input[data-group=bef_blws_km_neu_reg]').trigger('change');
			}
		else {
			$('#nradms_blws_km_neu').html("Keine neuen Läsionen mit Schrankenstörung.");
			$('input[data-group=bef_blws_km_neu_hoh]').prop('checked', false);}
		updatelesions();}})
$('#nradms_bef_blws_km_neu_anz').trigger('change'); //compute the default value on loading the edit view

$('input[data-group=bef_blws_km_neu_hoh]').change(function(e){
	e.stopPropagation();
		if($('input[data-group=bef_blws_km_neu_hoh]:checked').length){
			var sel=$('input[data-group=bef_blws_km_neu_hoh]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(", ").replace(/,(?!.*,)/gmi, ' und');
			$('#nradms_blws_km_hoh_neu').hide().html(' '+sel).fadeIn();
			$('input[data-group=bef_blws_km_hoh]').trigger('change');}
	 	else{
	 		$('#nradms_blws_km_hoh_neu').hide().html('').fadeIn();}
	updatelesions();})
$('input[data-group=bef_blws_km_neu_hoh]').trigger('change'); //compute the default value on loading the edit view






<!-- BERICHT / Befund / BLWS / Sonstiges -->	 
$('input[data-group=bef_blws_konf]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_blws_konf]:checked').length)) {
		var sel=$('input[data-group=bef_blws_konf]:checked').attr('data-value');
		$('#nradms_ber_blws_konf').hide().html('&#13;<br>'+sel+' ').fadeIn();}
	else {
		$('#nradms_ber_blws_konf').hide().html('').fadeIn();}
	updatelesions();}) 	
$('input[data-group=bef_blws_konf]').trigger('change'); //compute the default value on loading the edit view

$('#nradms_bef_blws_sonst').keyup(function() {
	if(($(this).is(':visible'))&&($(this).val().length)){
		var sel=$(this).val();
		$('#nradms_ber_blws_sonst').hide().html(sel+'.&#13;<br>').fadeIn();}
	else{
		$('#nradms_ber_blws_sonst').hide().html('').fadeIn();}
	updatelesions();})	
$('#nradms_bef_blws_sonst').trigger('keyup'); //compute the default value on loading the edit view

















<!-- BERICHT / Befund / KOPF / Nebenbefunde-->
$('input[data-group=bef_nbk_nor]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group2=bef_nbk_nor]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_nor]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(" ")+'<span id="nradms_ber_kopf_nor_sonst"></span>';
		if($('#nradms_bef_nbk_nor_ja:checked').length){
			$('#nradms_ber_nbk_nor').hide().html('&#13;<br>-> '+sel+'').fadeIn();}
			else{
			$('#nradms_ber_nbk_nor').hide().html('&#13;<br>- '+sel+'').fadeIn();}
		$('#nradms_bef_nbk_nor_sonst').trigger('keyup');
			if($('#nradms_bef_nbk_nor_nein:checked').length) {
			$('#nradms_bef_nbk_nor_sonst').val('');}}
	else {
		$('#nradms_ber_nbk_nor').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_nor]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_nor_sonst').keyup(function() {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_nor_sonst').val().length)){
		var sel=$('#nradms_bef_nbk_nor_sonst').val();
		$('#nradms_ber_kopf_nor_sonst').hide().html(' '+sel+'.').fadeIn();}
	else{
		$('#nradms_ber_kopf_nor_sonst').hide().html('').fadeIn();}
	updatenebenbefunde();})
$('#nradms_bef_nbk_nor_sonst').trigger('keyup'); //compute the default value on loading the edit view

$('input[data-group=bef_nbk_nol]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group2=bef_nbk_nol]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_nol]:checked').map(function(_, el) {return $(el).attr('data-value');}).get().join(" ")+'<span id="nradms_ber_kopf_nol_sonst"></span>';
		if($('#nradms_bef_nbk_nol_ja:checked').length){
			$('#nradms_ber_nbk_nol').hide().html('&#13;<br>-> '+sel+'').fadeIn();}
			else{
			$('#nradms_ber_nbk_nol').hide().html('&#13;<br>- '+sel+'').fadeIn();}
		$('#nradms_bef_nbk_nol_sonst').trigger('keyup');
			if($('#nradms_bef_nbk_nol_nein:checked').length) {
			$('#nradms_bef_nbk_nol_sonst').val('');}}
	else {
		$('#nradms_ber_nbk_nol').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_nol]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_nol_sonst').keyup(function() {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_nol_sonst').val().length)){
		var sel=$('#nradms_bef_nbk_nol_sonst').val();
		$('#nradms_ber_kopf_nol_sonst').hide().html(' '+sel+'.').fadeIn();}
	else{
		$('#nradms_ber_kopf_nol_sonst').hide().html('').fadeIn();}
	updatenebenbefunde();})
$('#nradms_bef_nbk_nol_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('input[data-group=bef_nbk_atr]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbk_atr]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_atr]:checked').attr('data-value');
		if($('#nradms_bef_nbk_atr_ja:checked').length){
			$('#nradms_ber_nbk_atr').hide().html('&#13;<br>-> '+sel+'').fadeIn();}
			else{
			$('#nradms_ber_nbk_atr').hide().html('&#13;<br>- '+sel+'').fadeIn();}}
	else {
		$('#nradms_ber_nbk_atr').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_atr]').trigger('change') //compute the default value on loading the edit view




$('input[data-group=bef_nbk_liq]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbk_liq]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_liq]:checked').attr('data-value');
		if($('#nradms_bef_nbk_liq_ja:checked').length){
			if($('#nradms_bef_nbk_liq_sonst').val()=='') {
				$('#nradms_bef_nbk_liq_sonst').val('vergrößerte innere und äußere Liquorräume').trigger('keyup').focus();}}
		else {
			$('#nradms_ber_nbk_liq').hide().html('&#13;<br>- '+sel+'').fadeIn();
			$('#nradms_bef_nbk_liq_sonst').val('');
			}}
	else {  $('#nradms_ber_nbk_liq').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_liq]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_liq_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_liq_ja:checked').length)){
		var sel=$('#nradms_bef_nbk_liq_sonst').val();
		$('#nradms_ber_nbk_liq').html('&#13;<br>-> Liquorsystem: '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbk_liq_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('input[data-group=bef_nbk_mrd]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbk_mrd]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_mrd]:checked').attr('data-value');
		if($('#nradms_bef_nbk_mrd_ja:checked').length) {
			if($('#nradms_bef_nbk_mrd_sonst').val()=='') {
				$('#nradms_bef_nbk_mrd_sonst').val('Alter Defekt').trigger('keyup').focus();}}
		else {
			$('#nradms_ber_nbk_mrd').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbk_mrd_sonst').val('');}}
	else {  $('#nradms_ber_nbk_mrd').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_mrd]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_mrd_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_mrd_ja:checked').length)){
		var sel=$('#nradms_bef_nbk_mrd_sonst').val();
		$('#nradms_ber_nbk_mrd').html('&#13;<br>-> Mark-Rinden-Differenzierung: '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbk_mrd_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('input[data-group=bef_nbk_pml]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbk_pml]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_pml]:checked').attr('data-value');
		if($('#nradms_bef_nbk_pml_ja:checked').length) {
			if($('#nradms_bef_nbk_pml_sonst').val()=='') {
				$('#nradms_bef_nbk_pml_sonst').val('FLAIR-hyperintenses Areal unter Beteiligung der U-fasern mit randständiger Diffusionsstörung').trigger('keyup').focus();}}
		else {
			$('#nradms_ber_nbk_pml').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbk_pml_sonst').val('');}}
	else {  $('#nradms_ber_nbk_pml').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_pml]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_pml_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_pml_ja:checked').length)){
		var sel=$('#nradms_bef_nbk_pml_sonst').val();
		$('#nradms_ber_nbk_pml').html('&#13;<br>-> PML-typische Veränderungen: '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbk_pml_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('input[data-group=bef_nbk_orb]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbk_orb]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_orb]:checked').attr('data-value');
		if($('#nradms_bef_nbk_orb_ja:checked').length) {
			$('#nradms_bef_nbk_orb_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbk_orb').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbk_orb_sonst').val('');}}
	else {  $('#nradms_ber_nbk_orb').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_orb]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_orb_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_orb_ja:checked').length)){
		var sel=$('#nradms_bef_nbk_orb_sonst').val();
		$('#nradms_ber_nbk_orb').html('&#13;<br>-> Orbita: '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbk_orb_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('input[data-group=bef_nbk_nnh]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbk_nnh]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_nnh]:checked').attr('data-value');
		if($('#nradms_bef_nbk_nnh_ja:checked').length) {
			$('#nradms_bef_nbk_nnh_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbk_nnh').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbk_nnh_sonst').val('');}}
	else {  $('#nradms_ber_nbk_nnh').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_nnh]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_nnh_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_nnh_ja:checked').length)){
		var sel=$('#nradms_bef_nbk_nnh_sonst').val();
		$('#nradms_ber_nbk_nnh').html('&#13;<br>-> Nasennebenhöhlen: '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbk_nnh_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('input[data-group=bef_nbk_sm]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbk_sm]:checked').length)) {
		var sel=$('input[data-group=bef_nbk_sm]:checked').attr('data-value');
		if($('#nradms_bef_nbk_sm_ja:checked').length) {
			$('#nradms_bef_nbk_sm_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbk_sm').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbk_sm_sonst').val('');}}
	else {  $('#nradms_ber_nbk_sm').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbk_sm]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbk_sm_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_sm_ja:checked').length)){
		var sel=$('#nradms_bef_nbk_sm_sonst').val();
		$('#nradms_ber_nbk_sm').html('&#13;<br>-> Sella- und Mastoidregion: '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbk_sm_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('#nradms_bef_nbk_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbk_sonst').val().length)){
		var sel=$('#nradms_bef_nbk_sonst').val();
		$('#nradms_ber_nbk_sonst').html('&#13;<br>-> '+sel+'.');}
	else {
		$('#nradms_ber_nbk_sonst').html('');}
	updatenebenbefunde();})
$('#nradms_bef_nbk_sonst').trigger('keyup'); //compute the default value on loading the edit view












<!-- BERICHT / Befund / Nebenbefunde WS-->
$('input[data-group=bef_nbws_t2h]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbws_t2h]:checked').length)) {
		var sel=$('input[data-group=bef_nbws_t2h]:checked').attr('data-value');
		$('#nradms_ber_nbws_t2h').hide().html('&#13;<br>- '+sel+'').fadeIn();}
	else {
		$('#nradms_ber_nbws_t2h').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbws_t2h]').trigger('change') //compute the default value on loading the edit view

$('input[data-group=bef_nbws_am]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbws_am]:checked').length)) {
		var sel=$('input[data-group=bef_nbws_am]:checked').attr('data-value');
		$('#nradms_ber_nbws_am').hide().html('&#13;<br>- '+sel+'').fadeIn();}
	else {
		$('#nradms_ber_nbws_am').hide().html('').fadeIn();}
	updatenebenbefunde();})
$('input[data-group=bef_nbws_am]').trigger('change') //compute the default value on loading the edit view


$('input[data-group=bef_nbws_dae]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbws_dae]:checked').length)) {
		var sel=$('input[data-group=bef_nbws_dae]:checked').attr('data-value');
		if($('#nradms_bef_nbws_dae_ja:checked').length) {
			$('#nradms_bef_nbws_dae_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbws_dae').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbws_dae_sonst').val('');
			}}
	else {  $('#nradms_ber_nbws_dae').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbws_dae]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbws_dae_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbws_dae_ja:checked').length)){
		var sel=$('#nradms_bef_nbws_dae_sonst').val();
		$('#nradms_ber_nbws_dae').html('&#13;<br>-> '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbws_dae_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('input[data-group=bef_nbws_rc]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbws_rc]:checked').length)) {
		var sel=$('input[data-group=bef_nbws_rc]:checked').attr('data-value');
		if($('#nradms_bef_nbws_rc_ja:checked').length) {
			$('#nradms_bef_nbws_rc_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbws_rc').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbws_rc_sonst').val('');}}
	else {  $('#nradms_ber_nbws_rc').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbws_rc]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbws_rc_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbws_rc_ja:checked').length)){
		var sel=$('#nradms_bef_nbws_rc_sonst').val();
		$('#nradms_ber_nbws_rc').html('&#13;<br>-> '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbws_rc_sonst').trigger('keyup'); //compute the default value on loading the edit view



$('#nradms_bef_nbws_bsp_pts').change(function(){
	if(($(this).is(':visible'))&&($('#nradms_bef_nbws_bsp_pts:checked').length)) {
		var sel=$('#nradms_bef_nbws_bsp_pts:checked').attr('data-value');
		$('#nradms_ber_nbws_bsp_pts').hide().html('&#13;<br>- '+'Protrusionen auf Höhe '+sel+'.').fadeIn();}
	else {
		$('#nradms_ber_nbws_bsp_pts_text').val('').trigger('keyup');
		$('#nradms_ber_nbws_bsp_pts').hide().html('').fadeIn();}
	updatenebenbefunde();})
$('#nradms_bef_nbws_bsp_pts').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbws_bsp_ets').change(function(){
	if(($(this).is(':visible'))&&($('#nradms_bef_nbws_bsp_ets:checked').length)) {
		var sel=$('#nradms_bef_nbws_bsp_ets:checked').attr('data-value');
		$('#nradms_ber_nbws_bsp_ets').hide().html('&#13;<br>- '+'Extrusionen auf Höhe '+sel+'.').fadeIn();}
	else {
		$('#nradms_ber_nbws_bsp_ets_text').val('').trigger('keyup');
		$('#nradms_ber_nbws_bsp_ets').hide().html('').fadeIn();}
	updatenebenbefunde();})
$('#nradms_bef_nbws_bsp_ets').trigger('change') //compute the default value on loading the edit view	



$('input[data-group=bef_nbws_skw]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbws_skw]:checked').length)) {
		var sel=$('input[data-group=bef_nbws_skw]:checked').attr('data-value');
		if($('#nradms_bef_nbws_skw_ja:checked').length) {
			$('#nradms_bef_nbws_skw_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbws_skw').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbws_skw_sonst').val('');}}
	else {  $('#nradms_ber_nbws_skw').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbws_skw]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbws_skw_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbws_skw_ja:checked').length)){
		var sel=$('#nradms_bef_nbws_skw_sonst').val();
		$('#nradms_ber_nbws_skw').html('&#13;<br>-> '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbws_skw_sonst').trigger('keyup'); //compute the default value on loading the edit view


$('input[data-group=bef_nbws_nfw]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbws_nfw]:checked').length)) {
		var sel=$('input[data-group=bef_nbws_nfw]:checked').attr('data-value');
		if($('#nradms_bef_nbws_nfw_ja:checked').length) {
			$('#nradms_bef_nbws_nfw_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbws_nfw').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbws_nfw_sonst').val('');}}
	else {  $('#nradms_ber_nbws_nfw').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbws_nfw]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbws_nfw_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbws_nfw_ja:checked').length)){
		var sel=$('#nradms_bef_nbws_nfw_sonst').val();
		$('#nradms_ber_nbws_nfw').html('&#13;<br>-> '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbws_nfw_sonst').trigger('keyup'); //compute the default value on loading the edit view


$('input[data-group=bef_nbws_ksu]').change(function(e){
	if(($(this).is(':visible'))&&($('input[data-group=bef_nbws_ksu]:checked').length)) {
		var sel=$('input[data-group=bef_nbws_ksu]:checked').attr('data-value');
		if($('#nradms_bef_nbws_ksu_ja:checked').length) {
			$('#nradms_bef_nbws_ksu_sonst').trigger('keyup').focus();}
		else {
			$('#nradms_ber_nbws_ksu').hide().html('&#13;<br>- '+sel).fadeIn();	
			$('#nradms_bef_nbws_ksu_sonst').val('');}}
	else {  $('#nradms_ber_nbws_ksu').hide().html('').fadeIn();}
	updatenebenbefunde();}) 	
$('input[data-group=bef_nbws_ksu]').trigger('change') //compute the default value on loading the edit view

$('#nradms_bef_nbws_ksu_sonst').keyup(function(e) {
	if(($(this).is(':visible'))&&($('#nradms_bef_nbws_ksu_ja:checked').length)){
		var sel=$('#nradms_bef_nbws_ksu_sonst').val();
		$('#nradms_ber_nbws_ksu').html('&#13;<br>-> '+sel+'.');}
	updatenebenbefunde();})
$('#nradms_bef_nbws_ksu_sonst').trigger('keyup'); //compute the default value on loading the edit view


$('#nradms_bef_nbws_sonst').keyup(function(){
		if(($(this).is(':visible'))&&($('#nradms_bef_nbws_sonst').val().length)) {
			var sel=$('#nradms_bef_nbws_sonst').val();
			$('#nradms_ber_nbws_sonst').hide().html('&#13;<br>-> '+sel+'.').fadeIn();}
		else{
			$('#nradms_ber_nbws_sonst').hide().html('').fadeIn();}
		updatenebenbefunde();})
$('#nradms_bef_nbws_sonst').trigger('keyup'); //compute the default value on loading the edit view









<!-- BERICHT / Beurteilung / Vergleich	/ alle
$('input[data-group=beur_vv]').change(function(){
	if($('input[data-group=beur_vv]:checked').length) {
		if($('#nradms_beur_vv_kvv:checked').length) {
			var sel="Keine Voruntersuchung zum Vergleich vorliegend. <span id='nradms_ber_vv_kvv_nl'><span id='nradms_ber_vv_kvv_nl_anz_el'></span><span id='nradms_ber_vv_kvv_nl_anz_el_km'></span><span id='nradms_ber_vv_kvv_nl_anz_nel'></span></span>";}
		else if ($('#nradms_beur_vv_bs:checked').length){
			var sel="Im Vergleich zur Voruntersuchung zeigt sich eine Befundverschlechterung<span id='nradms_beur_vv_bs_summary'></span>.";}
		else {var sel=$('input[data-group=beur_vv]:checked').attr('data-value');}
		$('#nradms_ber_vv').hide().html(sel+'&#13;<br>').fadeIn();
		}
	else {
		$('#nradms_ber_vv').hide().html('').fadeIn();}
	updatebeurteilung();})
$('input[data-group=beur_vv]').trigger('change') //compute the default value on loading the edit view	

if($('#nradms_beur_vv_sonst').length){
$('#nradms_beur_vv_sonst_text').trigger('keyup'); //compute the default value on loading the edit view	
}


	
<!-- BERICHT / Beurteilung / Dissemination
$('#nradms_bef_seq_abg_kopf, input[data-group=ka_diag], input[data-group=va]').change(function(){ //clear the dissemination from Bericht in case someone plays again with diagnostics or head
	if(($('#nradms_bef_seq_abg_kopf:checked').length==0)||($('#nradms_va_ja:checked').length!=0&&(($('#nradms_ka_diag_rrms:checked').length + $('#nradms_ka_diag_spms:checked').length + $('#nradms_ka_diag_ppms:checked').length)!=0))){
		$('#nradms_ber_di').text('');
		$('#nradms_ber_gb').text('');}
	else {
		$('input[data-group=beur_dis], input[data-group=beur_dit]').trigger('change');}
	$('input[data-group=beur_gb]').trigger('change');	
	updatebeurteilung();})

$('input[data-group=beur_dis], input[data-group=beur_dit]').change(function(){
	if(($('#nradms_bef_seq_abg_kopf:checked').length!=0)&&(($('#nradms_beur_digb').is(':visible'))&&(($('input[data-group=beur_dis]:checked').length + $('input[data-group=beur_dit]:checked').length)!=0))){
		$('#nradms_ber_di').hide().html('Dissemination: <span id="nradms_ber_dis"></span><span id="nradms_ber_dit"></span>&#13;<br>').fadeIn();
		if($('input[data-group=beur_dis]:checked').length) {
			var sel=$('input[data-group=beur_dis]:checked').attr('data-value');
			$('#nradms_ber_dis').hide().html(sel+' ').fadeIn();}
		else{
			$('#nradms_ber_dis').hide().html('').fadeIn();}
		
		if($('input[data-group=beur_dit]:checked').length) {
			var sel=$('input[data-group=beur_dit]:checked').attr('data-value');
			$('#nradms_ber_dit').hide().html(sel+'').fadeIn();}
		else{
		$('#nradms_ber_dit').hide().html('').fadeIn();}
		$('#nradms_ber_di').html(function(i, text){return text.replace('Die MR-Kriterien für eine räumliche Dissemination sind erfüllt.  </span><span id="nradms_ber_dit">Die MR-Kriterien für eine zeitliche Dissemination sind erfüllt.', 'Sowohl die MR-Kriterien für die räumliche als auch die zeitliche Dissemination sind erfüllt.').replace('Die MR-Kriterien für eine räumliche Dissemination sind nicht erfüllt. </span><span id="nradms_ber_dit">Die MR-Kriterien für eine zeitliche Dissemination sind nicht erfüllt.', 'Weder die MR-Kriterien für die räumliche noch zeitliche Dissemination sind erfüllt.');})
		$('input[data-group=beur_gb]').trigger('change');
		}
	else { $('#nradms_ber_di').text('');}
	updatebeurteilung();}) 			
$('input[data-group=beur_dis]').trigger('change') //compute the default value on loading the edit view

<!-- BERICHT / Beurteilung / MS Gesamtbeurteilung
$('input[data-group=beur_gb]').change(function(){
	if($('input[data-group=beur_gb]:checked').length&&(
		($('#nradms_bef_seq_abg_kopf:checked').length!=0)&&((($('#nradms_va_nein:checked').length+$('#nradms_ka_diag_rrms:checked').length + $('#nradms_ka_diag_spms:checked').length + $('#nradms_ka_diag_ppms:checked').length)>1)||
		($('#nradms_ka_diag_kis:checked').length + $('#nradms_ka_diag_nbws:checked').length + $('#nradms_ka_diag_sonst:checked').length!=0)||
		($('input[data-group=ka_diag]:checked').length==0))
		)) {
			var sel=$('input[data-group=beur_gb]:checked').attr('data-value');
			$('#nradms_ber_gb').hide().html('MS Gesamtbeurteilung: '+sel+'&#13;<br>').fadeIn();}
		else {
			$('#nradms_ber_gb').hide().html('').fadeIn();}
	updatebeurteilung();}) 			
$('input[data-group=beur_gb]').trigger('change') //compute the default value on loading the edit view


<!-- BERICHT / Beurteilung / Myelon Läsionen -->
$('input[data-group=beur_ml]').change(function(){
	if(($(this).is(':visible'))&&($('input[data-group=beur_ml]:checked').length)) {
		var sel=$('input[data-group=beur_ml]:checked').attr('data-value');
		$('#nradms_ber_ml').hide().html(sel+'&#13;<br>').fadeIn();}
	else {
		$('#nradms_ber_ml').hide().html('').fadeIn();}
	updatebeurteilung();}) 			
$('input[data-group=beur_ml]').trigger('change') //compute the default value on loading the edit view


	
$('#nradms_beur_sonst').keyup(function(){
	if (($(this).val().length)>0){
		var sel=$(this).val();
		$('#nradms_ber_sonst').hide().html(sel+'.').fadeIn()}
	else {
		$('#nradms_ber_sonst').hide().html('').fadeIn()}
	updatebeurteilung();}) 			
$('#nradms_beur_sonst').trigger('keyup') //compute the default value on loading the edit view

//for emergencies -  in case I need to change a function directly in production
$('body.nradms #nbfehlerk, body.nradms #nbfehlerk2').hide();
$('body.nradms #nbfehlerws, body.nradms #nbfehlerws2').hide();