/*function validateForm(){

    var nombre =$("#name").val();
	var email = $("#input-email").val();

// nombre
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       	var mensaje = "No debe dejar el campo Nombre en blanco";
       	$("#name").parent().append("<span>" + mensaje + "</span>");

		return false;
	}
 	else if(/^^[a-zA-Z]*$/.test(nombre) == false){
		var mensaje = "Nombre no valido, ingresar solo letras";
		$("#name").parent().append("<span>" + mensaje + "</span>");
 		return true;
 	}    
 	else if(nombre.charAt(0).toUpperCase()!== nombre.charAt(0)){
        var mensaje = "Nombre no valido, la primera letra debe ser en mayúscula";
        $("#name").parent().append("<span>"+ mensaje + "</span>");
 		return false;
 	}

 	// email
	if( email === null || email.length === 0 || /^\s+$/.test(email) ) {
		var mensaje = "No debe dejar el campo Mail en blanco";
        $("#input-email").parent().append("<span>"+ mensaje + "</span>");
		return false;
	}
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if( !re.test(email) ) {
	
		var mensaje = "Tu correo electrónico no es válido";
        $("#input-email").parent().append("<span>"+ mensaje + "</span>");
		return false;
	}
}	
	validateForm(); */

	$(document).ready(function(){
    $('.next').click(function(){
      var inputemail = $("#input-email").val();
        if( inputemail == null || inputemail.length < 50 || /^\s+$/.test(inputemail) || /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(inputemail) == false ) {
            alert('Tu correo electronico no es valido');
            return false;
        }
      });
})