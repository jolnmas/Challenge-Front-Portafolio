var band1=false;
var band2=false;
var band3=false;
var band4=false;

var buttonEnviarMensaje= document.querySelector('#button__enviar');
buttonEnviarMensaje.addEventListener('click',function(){
    textName=getName();
    textEmail=getEmail();
    textAsunto=getAsunto();
    textMensaje=getMessage();

    //nombre
    if(validateEmpty(textName)){
        if(validarSpecialCharts(textName)){
                if(validateWord(textName)){
                    band1=true;
                }
        
         }
    }
    if(!band1){
        var spanNombreError= document.querySelector('.error__nombre');
        spanNombreError.style.opacity="100%";
    
        setTimeout(function(){ 
            spanNombreError.style.opacity="0%";
         }
        , 4000);


    }


    //email
    if(validateEmail(textEmail)){
        band2=true;
    }

    if(!band2){
        var spanEmailError= document.querySelector('.error__email');
        spanEmailError.style.opacity="100%";
    
        setTimeout(function(){ 
            spanEmailError.style.opacity="0%";
         }
        , 4000);


    }



    //asunto
   if(validateEmpty(textAsunto)){
    if(validarSpecialCharts(textAsunto)){
            if(validateWord(textAsunto)){
                band3=true;
            }
    
     }
    }


    if(!band3){
        var spanAsuntoError= document.querySelector('.error__asunto');
        spanAsuntoError.style.opacity="100%";
    
        setTimeout(function(){ 
            spanAsuntoError.style.opacity="0%";
         }
        , 4000);
    }


      //mensaje
   if(validateEmpty(textMensaje)){
 
                band4=true;
        
     
    }

    if(!band4){
        var spanMensajeError= document.querySelector('.error__mensaje');
        spanMensajeError.style.opacity="100%";
    
        setTimeout(function(){ 
            spanMensajeError.style.opacity="0%";
         }
        , 4000);


    }



    if(band1&&band2&&band3&&band4){
        sendMessage(textName,textEmail,textAsunto,textMensaje);
    }


});



function sendMessage(nombre,email,asunto,mensaje){
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycby8e8YhugXGnUu1hQG6HkoSRR5l3Ot0llVcJB4mOVm4PyG8DYPEXSNP4hh714OA5-3d/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>finalMessage())
        .catch(error => console.error('Error!', error.message))
    })
  
 


}
function finalMessage(){
   cleanForm();
   band1=false;
   band2=false;
   band3=false;
   band4=false;
   alert("Su mensaje ha sido enviado")
} 


