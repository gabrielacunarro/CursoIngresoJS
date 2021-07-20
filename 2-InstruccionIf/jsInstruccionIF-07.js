function mostrar() {
	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if (edad < 18 && estado != "Soltero") {
		alert("Es muy pequeño para no ser soltero ")

	}

}









//FIN DE LA FUNCIÓN

/*
	edad = parseInt(document.getElementById("txtIdEdad").value);

	estado = document.getElementById("estadoCivil").value;

// si edad es menor a 18 y el estado es distinto a Soltero

	if (edad <18 && estado != "Soltero"){
		alert("Es muy pequeño para NO ser soltero "); */