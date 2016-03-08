<?php

    $to = "will.chongster@gmail.com"; // this is your Email address
    $email_from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "[atbubblesoccer.ca] - Form Submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($to,$subject,$message,$headers);

?>