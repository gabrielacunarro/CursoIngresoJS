function mostrar() {
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Julio": case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Enero": case "Febrero": case "Marzo": case "Abril": case "Mayo": case "Junio":
			alert("Falta para el invierno");
			break;
		case "Septiembre": case "Octubre": case "Noviembre": case "Diciembre":
			alert("Ya pasamos el frio");
			break;

	}


}






}//FIN DE LA FUNCIÓN