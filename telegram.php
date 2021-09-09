<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
$token = "723931324:AAEUCABzW48Mk1w8zBD21nfn5OR0yuiYqlE";
$chat_id = "-520309229";
$arr = array(
  'Имя пользователя: ' => $user-name,
  'Телефон: ' => $user-tel,
  'Сообщение:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// $sendToTelegram2 = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>