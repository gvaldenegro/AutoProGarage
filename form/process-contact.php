<?php

	$to = "contacto@autoprogarage.cl";  // Your email here
	$from = $_REQUEST['email'];
	$name = $_REQUEST['name'];
	$phone = $_REQUEST['phone'];
	$message = $_REQUEST['message'];

	$headers = "From: $to"."\r\n";
	$headers .= "Reply-to: $from";
	$subject = "[Sitio Web] Mensaje enviado desde contacto";
	
	$fields = array();
	$fields{"name"} = "Nombre";
	$fields{"email"} = "Correo Electrónico";
	$fields{"phone"} = "Teléfono";
	$fields{"message"} = "Mensaje";
	

	$body = "";
	foreach($fields as $a => $b){   $body .= sprintf("%20s: \t%s\n",$b,$_REQUEST[$a]); }

	$send = mail($to, $subject, $body, $headers);

?>
