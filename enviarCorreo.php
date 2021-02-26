<?php
  $destinatario = "joaquinbriz1@gmail.com";
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $asunto = $_POST["asunto"];
  $mensaje = $_POST["mensaje"];

  $header = 'From: ' . $mail . " \r\n";

  mail($destinatario, $asunto, $mensaje, $header);




?>