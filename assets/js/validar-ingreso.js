
var nombreContacto= document.querySelector('.input__nombre');


var emailContacto= document.querySelector('.input__email');


var asuntoContacto= document.querySelector('.input__asunto');


var mensajeContacto= document.querySelector('#input__area');

function getName(){
return nombreContacto.value;
}

function getEmail(){
return emailContacto.value;
}

function getAsunto(){
return asuntoContacto.value;
}

function getMessage(){
    return mensajeContacto.value;
    }


function cleanForm(){
    nombreContacto.value="";
    emailContacto.value="";
    asuntoContacto.value="";
    mensajeContacto.value="";
}
        



function validateEmpty(value){
    var e=true;
    if(value<=0){
       /* alert("accion no valida");   */
        e=false
    }
    return e;
}

function validateWord(text){
    //match all words with no digits
    var reg= /^[ a-zA-Z]/
    if(reg.test(text)){
        return true;
    }
    else{
      /*  alert("only words");*/
        nombreContacto.value="";
        return false;
    }
}


function validateEmail(text){
    var reg=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(reg.test(text)){
        return true;
    }
    else{
        /*alert("invalid email");*/
        emailContacto.value="";
        return false;
    }
}



function validarSpecialCharts(text){
    //valida caracteres especiales que no esten en el texto
    var reg = /[^\w \s]/gi
    if(!reg.test(text)){
        return true;
    }
    else{
     /*   alert("Special characters are not allowed");*/
        return false;
    }
}