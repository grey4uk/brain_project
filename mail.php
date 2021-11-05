<?php

$header = "From: brainarchitects\r\n";
$header.= "MIME-Version: 1.0\r\n";
$header.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$header.= "X-Priority: 1\r\n";
$to.= "barchytest@gmail.com";
$subject.= "request from brainarchitects";

$name = ($_POST['name']);
$email = ($_POST['email']);
$phone = ($_POST['tel']);
$service = ($_POST['service']);
$date = ($_POST['date']);
$price = ($_POST['cost']);
$message = ($_POST['textarea']);

$arr = array(
  'Name:' => $name,
  'Email:' => $email,
  'Phone:' => $phone,
  'Product:' => $service,
  'Deadline:' => $date,
  'Price:' => $price,
  'Message:' => $message
);

foreach($arr as $key => $value) {
$txt .= "<b>".$key."</b> ".$value."%0A";
$mess.= "<b>".$key."</b>".$value."\r\n";
};

// Set your Bot ID and Chat ID.
$token="1907051921:AAFvXSrqQgNJPs1Lo62gmpZFEOTMNKCzKoY";
$chat_id = "-1001529675408";

// Telegram function which you can call
function telegram($msg) {
  global $token,$chat_id;
  $url='https://api.telegram.org/bot'.$token.'/sendMessage?';$data=array('chat_id='=>$chat_id,'&parse_mode=html&text='=>$msg);
  $options=array('http'=>array('method'=>'POST','header'=>"Content-Type:application/x-www-form-urlencoded\r\n",'content'=>http_build_query($data),),);
  $context=stream_context_create($options);
  $result=file_get_contents($url,false,$context);
  return $result;
}

// Function call with your own text or variable
$sendToTelegram = telegram ($txt);
// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
$status = mail($to, $subject, $mess, $header);

function phpAlert() {
  echo' <div style="position:relative; height:120vh; width:100vw;">
  <div style=" height: 120vh; position: absolute; top: 0; left: 0; right: 0; background-color: rgba(53, 23, 71, .9);">
   <div style=" width: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; text-align: center; color:rgb(255,255,255);">
       <h3>Щось пішло не за планом</h3>
       <a href="./index.html" style="text-decoration: none;color:rgb(255,255,255);"><span style="color:rgb(255,255,255);text-decoration:underline;">Повернутися і спробувати ще раз</span></a>
   </div>
  </div>
 </div>';
}

function phpSuccess(){
  echo' <div style="position:relative; height:120vh; width:100vw;">
  <div style=" height: 120vh; position: absolute; top: 0; left: 0; right: 0; background-color: rgba(53, 23, 71, .9);">
   <div style=" width: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; text-align: center; color:rgb(255,255,255);">
       <h3>Запит надіслано</h3>
       <p style="margin-bottom: 24px;">Ми зконтактуємо з вами найближчим часом!</p>
       <a href="https://www.google.com" style="margin-bottom: 24px; text-decoration: none;color:rgb(255,255,255);"><span style="color:rgb(255,255,255);">Закрити вебсайт</span></a>
       <a href="./index.html" style="text-decoration: none;color:rgb(255,255,255);"><span style="color:rgb(255,255,255);text-decoration:underline;">Лишитися на сайті</span></a>
   </div>
  </div>
 </div>';
}

// handling telegramm result
// if ($sendToTelegram) {
//   phpSuccess();
// } else {
//   phpAlert();
// }

//handling mail result
if($status)
{
  phpSuccess();
} else {
  phpAlert();
}
?>