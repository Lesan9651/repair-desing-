<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'lesandrokirienkov@gmail.com';                     // SMTP username
    $mail->Password   = 'ygbeth83tr938th3';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;
    //Recipients
    $mail->setFrom('lesandrokirienkov@gmail.com', 'Александр');
    $mail->addAddress('shurakirienkov@yandex.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = 'Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}';

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправленно. Код ошибки: {$mail->ErrorInfo}";
}