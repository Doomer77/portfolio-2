<?php
	$jsonst = json_decode( file_get_contents('php://input'));
	$name_field = 'name';
	$organization_field = 'organization';
	$message_field = 'message';

	$name = $jsonst->$name_field;	
	$organization = $jsonst->$organization_field;
	$message_text = $jsonst->$message_field;
	$subject = 'Новое сообщение из портфолио';

	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html;charset=utf-8 \r\n";

	$message = "<p>Новая сообщение</p>
	<p><strong>Название организации или ФИО частного лица:</strong>$name</p>
	<p><strong>Организация:</strong>$organization</p>
	<p><strong>Сообщение:</strong> $message_text</p>
	";

	$to      = 'podgorniy.sergei@yandex.ru';
	$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'Content-type: text/html;charset=utf-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	echo $message;
?>