<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "test@mail.ru";
  
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['msg'];

	$mes = "Пользователь оставил сообщение" . "<br>";
	
	if (!empty($name)) {
	 $mes .= "Имя: $name" . "<br>";
	 // $mes .= "Имя: $name" . "\n";
	}

	if (!empty($email)) {
	 $mes .= "Email: $email" . "<br>";
	 // $mes .= "Email: $email" . "\n";
	}

	if (!empty($message)) {
 		$mes .= "Сообщение: $message" . "<br>";
 		// $mes .= "Сообщение: $message" . "\n";
	}

	$sub = 'Сообщение с сайта '.$_SERVER['HTTP_HOST']; // заголовок письма

	$email2 = "<message@{$_SERVER['HTTP_HOST']}>";

	$send = mail ($address,$sub,$mes,"Content-type:text/html; charset=utf-8\r\nFrom:$email2");

	if(!$send) {
		// echo "Error";
		// или
		return false;
	} else {
		// echo "Ok";
		// или
		header ('location: message.html');
		// или
		return true;
	}
?>