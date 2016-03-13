<?php

    $to = "will.chongster@gmail.com"; // this is your Email address

	if (isset($_POST["email"]) && !empty($_POST["email"])) {
   	
   		$email_from = $_POST['email']; // this is the sender's Email address

	}

	if (isset($_POST["name"]) && !empty($_POST["name"])) {
	
    	$name = $_POST['name'];

	}

	if (isset($_POST["message"]) && !empty($_POST["message"])) {
	
    	$message = $name . " wrote the following:" . "\n\n" . $_POST['message'];

	}

	if (isset($_POST["company"]) && !empty($_POST["company"])) {
	
    	$company = $_POST['company'];
    	$message = $message."\n\n Company: ". $company;

	}

	if (isset($_POST["phone"]) && !empty($_POST["phone"])) {
	
    	$company = $_POST['phone'];
    	$message = $message."\n\n Phone: ". $phone;

	}

    $subject = "[atbubblesoccer.ca] - Form Submission from ".$name;

    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($to,$subject,$message,$headers);

?>