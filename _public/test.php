<?php
header('Content-disposition: attachment; filename=http://paullandon.net/php/submit.php');
header('Content-type: text/html');
readfile('http://paullandon.net/php/submit.php');
?>