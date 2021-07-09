function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 || edad > 17) {

		alert("Ud no es adolescente");

	}

}//FIN DE LA FUNCIÓN