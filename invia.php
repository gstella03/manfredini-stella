<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$messaggio = $_POST['messaggio'];

$to = 'gabrielestella2003@gmail.com';
$subject = 'Nuovo messaggio dal modulo di contatto';
$body = "Nome: $nome\nEmail: $email\nMessaggio:\n$messaggio";

$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
  echo "Messaggio inviato con successo.";
} else {
  echo "Errore nell'invio del messaggio.";
}
?>
