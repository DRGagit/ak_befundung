<?php
// URL: www.freecontactform.com
// Version: FreeContactForm V2.2 - Installer
// Copyright (c) 2013 Stuart Cochrane
// 
// NOTE: This script may only be used to install your software
//       You are not licensed to use this for any other purpose
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
define('INSTALLFILE', 'freecontactforminstall.php');
define('CONFIGFILE', 'freecontactformsettings.php');
define('ABSPATH', dirname(__FILE__) . '/' );

error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR );

$install_complete = '<br />Installation complete. <a href="contactform.htm">Visit your form</a>. <br /><br />To reinstall, delete the file: '.CONFIGFILE.' then run <a href="'.INSTALLFILE.'">this installer again</a>.<br /><br />';

$config_template = 
'<?php

$email_to = "{EMAIL}"; // your email address
$email_subject = "{SUBJECT}"; // email subject line
$thankyou = "{THANKYOU}"; // thank you page

// if you update the question on the form -
// you need to update the questions answer below
$antispam_answer = "{ANSWER}";

?>';

if(isset($_POST['step'])) {
  $step = $_POST['step'];
} else {
  $step = 1;
}
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Installation</title>
	
	<link rel="stylesheet" type="text/css" href="freecontactform.css">
	<style>.freecontactform {width: 460px;font-size:12px}</style>
	</head>
	<body>
	<div align="center"><br />
	<div class="freecontactform">
	<div class="freecontactformheader">Installation Form</div>


<?php
switch($step) {
  
  
  
  case "1":
  
      if ( file_exists( ABSPATH . CONFIGFILE) ) {

        // The config file resides in ABSPATH
        // require_once( ABSPATH . CONFIGFILE );
        echo $install_complete;

      } else {

      ?>


      		<script src="freecontactformvalidation.js"></script>
			<script>
			required.add('email','EMAIL','Email Address');
			required.add('subject','NOT_EMPTY','Subject Line');
			required.add('thankyou','NOT_EMPTY','Redirect Page');
			</script>
			<form name="freecontactform" method="post" action="<?php echo INSTALLFILE; ?>" onsubmit="return validate.check(this)">
			<input type="hidden" name="step" value="2">
			<table width="450px">
			<tr>
			 <td colspan="2">
			 
			 <div class="freecontactformmessage">
			 Your configuration file does not exist at:<br /><br />
			 <?php echo ABSPATH.CONFIGFILE; ?>.<br /><br />
			 Create it now!.<br /><br />
			 </td>
			</tr>
			<tr>
			 <td valign="top">
			  <label for="email" class="required">Email Address<span class="required_star"> * </span></label>
			 </td>
			 <td valign="top">
			  <input type="text" name="email" id="email" maxlength="100" style="width:180px">
			 </td>
			</tr>

			<tr>
			 <td valign="top">
			  <label for="subject" class="required">Subject Line<span class="required_star"> * </span></label>
			 </td>
			 <td valign="top">
			  <input type="text" name="subject" id="subject" maxlength="100" value="Contact form submission" style="width:180px">
			 </td>
			 </tr>

			<tr>
			 <td valign="top">
			  <label for="thankyou" class="required">Redirect Page<span class="required_star"> * </span></label>
			 </td>
			 <td valign="top">
			  <input type="text" name="thankyou" id="thankyou" maxlength="100" value="thankyou.htm" style="width:180px">
			 </td>
			 </tr>

			<tr>
			 <td valign="top">
			  <label for="answer" class="required">Antispam Answer<span class="required_star"> * </span></label>
			 </td>
			 <td valign="top">
			  <input type="text" name="answer" id="answer" maxlength="100" value="25" style="width:180px">
			 </td>

			<tr>
			 <td colspan="2" style="text-align:center" >
			 <br /><br />
			  <input type="submit" value=" Install My Form " style="width:200px;height:40px">
			  <br /><br />
			  
			 </td>
			</tr>
			</table>
			</form>
			

      <?php
      }  
  
  
  break;
  
  
  
  
  case "2":
  
      $error_strings = array();
      if(!file_exists(ABSPATH.CONFIGFILE)) {
      
        $config_data = str_replace(
          array(
            "{EMAIL}",
            "{SUBJECT}",
            "{THANKYOU}",
            "{ANSWER}"), 
          array(
            $_POST['email'],
            $_POST['subject'],
            $_POST['thankyou'],
            $_POST['answer']
          ),
          $config_template
        );
        
        // generate config
        if(!$config_h = fopen(ABSPATH.CONFIGFILE,"wb")) {
        	$viewable_code = nl2br(str_replace("<","&lt;",$config_data));
	          $error_strings[] = "Cannot write your configuration file to: ".ABSPATH.CONFIGFILE." - Please change the directory permissions to allow write access.<br /><br /> 
	          If you prefer, you can create the configuration file using the code below:<br /><br />".$viewable_code."<br /><br />Save the above code to a new file at: ".ABSPATH.CONFIGFILE;
	       
        } else {
	        if(!fwrite($config_h, trim($config_data))){
	          $viewable_code = nl2br(str_replace("<","&lt;",$config_data));
	          $error_strings[] = "Cannot write your configuration file to: ".ABSPATH.CONFIGFILE." - Please change the directory permissions to allow write access.<br /><br /> 
	          If you prefer, you can create the configuration file using the code below:<br /><br />".$viewable_code."<br /><br />Save the above code to a new file at: ".ABSPATH.CONFIGFILE;
	        }
	        fclose($config_h);
        }
      }
      
      if(count($error_strings) > 0) {
        foreach($error_strings as $es) {
          echo "$es <br />";
        }
      } else {
        echo $install_complete;
      }
  
  break;
  
  
}
?>
  &copy; Copyright <a href="http://www.freecontactform.com">www.freecontactform.com</a>
	<br /><br />
	</div>
	</div>
  </body>
</html>