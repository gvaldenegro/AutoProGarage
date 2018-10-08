<?php

	$to = "contacto@autoprogarage.cl";  // Your email here
	$name = $_REQUEST['name'];
	$lastname = $_REQUEST['lastname'];
	$phone = $_REQUEST['phone'];
	$from = $_REQUEST['email'];
	$date = $_REQUEST['date'];
	$time = $_REQUEST['time'];
	$autoinfo = $_REQUEST['autoinfo'];
	$kilometers = $_REQUEST['kilometers'];
	$year = $_REQUEST['year'];
	$message = $_REQUEST['message'];

	$headers = "From: $to"."\r\n";
	$headers .= "Reply-to: $from";
	$subject = "[Sitio Web] Solicitud de agendamiento";

	$fields = array();
	$fields{"name"} = "Nombres";
	$fields{"lastname"} = "Apellidos";
	$fields{"phone"} = "Teléfono";
	$fields{"email"} = "Correo Electrónico";
	$fields{"date"} = "Fecha";
	$fields{"time"} = "Hora";
	$fields{"autoinfo"} = "Vehículo";
	$fields{"year"} = "Año";
	$fields{"kilometers"} = "Kilómetros";
	$fields{"message"} = "Mensaje";

	$body = ""; 
	foreach($fields as $a => $b){   
		$body .= sprintf("%20s: \t%s\n",$b,$_REQUEST[$a]);
	}
	$send = mail($to, $subject, $body, $headers);

?>