<?php
$destino="mago@pcuervo.com";

$nombre = $_POST['q1']
$mail=$_POST['q2']
$project = $_POST['q3']
$budget = $_POST['q4']

$headers = "From: $nombre <$mail>\r\n";
$headers ="MIME-Version:1.0;\r\n";
$headers .="Content-type:text/html; \r\n charset=iso-8859-1; \r\n";
$headers.= "To: $destino;\r\n";


mail('mago@pcuervo.com',$destino,$nombre,$project,$budget,$headers);

?>