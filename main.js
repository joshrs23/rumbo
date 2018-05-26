$(document).ready( function() {   // Esta parte del código se ejecutará automáticamente cuando la página esté lista.
    $("#botonEnviar").click( function() {    // Con esto establecemos la acción por defecto de nuestro botón de enviar.
        if(validaForm()){                               // Primero validará el formulario.
            $.post("enviar.php",$("#formdata").serialize(),function(res){
                //$("#formulario").fadeOut("slow");   // Hacemos desaparecer el div "formulario" con un efecto fadeOut lento.
                if(res == 1){
                    window.location.href = "https://www.google.com";      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
                } else {
                    if(res == 99){
                    $("#fracaso").delay(500).fadeIn("slow"); console.log("entro");  // Si no, lo mismo, pero haremos aparecer el div "fracaso"
                    }  
                }
            });
        }
    });   
//acabo
function validaForm(){
    // Campos de texto
    if($("#Email").val() == ""){
       
        $("#Email").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        $("#fracaso").delay(500).fadeIn("slow");
        return false;
    }
    if($("#Password").val() == ""){
        $("#Password").focus();
        $("#fracaso").delay(500).fadeIn("slow");
        return false;
    }

    return true; // Si todo está correcto
}
});