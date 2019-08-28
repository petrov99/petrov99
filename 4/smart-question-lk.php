<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "support@icon-trade.ltd, iconinvest.company@gmail.com, 875549748@etlgr.com";


	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$msg = $_POST['msg'];

	$mes = "Пользователь оставил сообщение" . "<br>";
	// $mes = "Пользователь оставил свои данные" . "\n";
	
	if (!empty($name)) {
	 $mes .= "Имя: $name" . "<br>";
	 // $mes .= "Имя: $name" . "\n";
	}
	if (!empty($phone)) {
	 $mes .= "Телефон: $phone" . "<br>";
	 // $mes .= "Телефон: $phone" . "\n";
	}
	if (!empty($email)) {
 		$mes .= "Почта: $email" . "<br>";
 		// $mes .= "Почта: $email" . "\n";
	}
	if (!empty($msg)) {
 		$mes .= "Сообщение: $msg" . "<br>";
 		// $mes .= "Почта: $email" . "\n";
	}



	$sub = 'Сообщение от клиента с сайта '.$_SERVER['HTTP_HOST']; // заголовок письма

	$email2 = "<no-reply@{$_SERVER['HTTP_HOST']}>";
	// $email2 = "<info@{$_SERVER['HTTP_HOST']}>";

	// $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset=windows-1251\r\nFrom:$email2");
	// $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset=utf-8\r\nFrom:$email2");
	// $send = mail ($address,$sub,$mes,"MIME-Version: 1.0\r\n; Content-type:text/html; charset=utf-8\r\nFrom:$email2");
	$send = mail ($address,$sub,$mes,"Content-type:text/html; charset=utf-8\r\nFrom:$email2");
	// $send = mail ($address, $sub, $mess,"From: $useremail\r\nReply-to: $useremail\r\nContent-type: text/html; charset=utf-8\r\n");
	// 'Content-type: text/html; charset=utf-8
	// From: stastroi.ru <mail@stastroi.ru>
	// ini_set('short_open_tag', 'On');
	// header('Refresh: 3; URL=index.html');

	if(!$send) {
		// echo "Error";
		// или
		return false;
	} else {
		// echo "Ok";
		// или
		header ('location: thanks.html');
		// или
		return true;
	}
?>