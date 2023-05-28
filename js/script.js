let l_enviar = document.querySelector(".enviar");
let l_nombre =  document.querySelector("#campo_field");
let l_mail = document.querySelector("#email");
let l_mensaje = document.querySelector("#mensaje");


function enviar(){
    if((l_nombre.value!="none")||(l_mail.value!="none")|| (l_mensaje.value!="none")){
        alert("Mensaje enviado con éxito")
    }else{
        alert("Hubo un error con el envío de mensaje")
    }
}