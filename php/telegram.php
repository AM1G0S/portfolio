<?php

//проверяем наличие ПОСТ-параметров
if(!empty($_POST)){
    
    //проверяем наличие параметров нашей формы
    if (!empty($_POST['name']) && !empty($_POST['phone'])){
    
        //токен вашего бота
        $token = "1852666231:AAECt4rasZUgFf8dVFSoU0Dom43EPev0WIg";
        //имя чата, если публичный или id для приватного
        $chat = "391625292"; 
    
        //данные из форм
        $name = $_POST['user-name'];
        $phone = $_POST['user-tel'];
        $txt = $_POST['message'];;  

        if (
            fopen("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat&text=$txt", "") &&
            fopen("https://api.telegram.org/bot$token/sendContact?chat_id=$chat&phone_number=$phone&first_name=$name", "")
            ) {
            
            $return = 'Спасибо, ваше запрос отправлен!';
    
        } else {
        
            $return =  'Ошибка отправки!';
        }
    }
}
 
?>