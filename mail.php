<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['onderwerp'];
$message = $_POST['message'];

$from = 'From: Netbezig.nl';
$to = 'info@netbezig.nl';
$subject = "$subject";
$body = "Message:\n $name\n $email\n $subject\n $message\n";

if (mail($to, $subject, $body, $from)) {
    header('Location: bedankt.php');
    $fh = fopen('/tmp/track.txt', 'a');
    fwrite($fh, $_SERVER['REMOTE_ADDR'] . ' ' . date('c') . "\n");
    fclose($fh);
} else {
    echo '<p>Something went wrong, go back and try again!</p>';
}
?>