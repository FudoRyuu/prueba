//Muestra registro, agregar el nombre iniciar sesion
$('.toggle').click(function(){
	$('.formulario').animate({
		height: "toggle",
		'padding-top': 'toggle',
		'padding-bottom': 'toggle',
		opacity: 'toggle',
	}, "slow");
});
//validacion formulario
function validar(){
	var nombre, apellidos, correo, usuario, clave, telefono, expresion;
	nombre = document.getElementById("Nombre").value;
	apellidos = document.getElementById("Apellidos").value;
	usuario = document.getElementById("Usuario").value;
	correo = document.getElementById("Correo").value;
	clave = document.getElementById("Password").value;
	telefono = document.getElementById("Telefono").value;

	expresion = /\w+@\w+\.+[a-z]/;

	//Revision de campos
	if(nombre == ""){
		alert("El campo nombre esta vacío");
		return false;
	}
	else if(apellidos == ""){
		alert("El campo apellidos esta vacío");
		return false;
	}else if(usuario == ""){
		alert("El campo usuario esta vacío");
		return false;
	}else if(correo == ""){
		alert("El campo correo esta vacío");
		return false;
	}else if (expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}else if(clave == ""){
		alert("El campo contraseña esta vacío");
		return false;
	}else if(telefono == ""){
		alert("El campo telefono esta vacío");
		return false;
	}else if (nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}else if (apellidos.length>80){
		alert("Los apellidos son muy largos");
		return false;
	}else if (correo.length>100){
		alert("El correo es muy largo");
		return false;
	}else if (usuario.length>20 || clave.length>20){
		alert("El usuario y la contraseña deben tener 20 caracteres como máximo");
		return false;
	}else if (telefono.length>13 || clave.length>20){
		alert("El telefono es muy largo");
		return false;
	}else if (isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}

}