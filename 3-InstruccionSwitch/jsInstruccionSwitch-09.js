function mostrar() {
	let estacion;
	let destino;
	let precio_base;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precio_base = 15000

	switch (destino) {
		case "Bariloche":
			if (estacion == "Invierno") {
				alert(precio_base * .2 + precio_base);
			} else if (estacion == "Verano") {
				alert(precio_base * .8);
			} else {
				alert(precio_base * .1 + precio_base);
			}
			break;
		case "Cataratas":
			if (estacion == "Invierno") {
				alert(precio_base * .9);
			} else {
				alert(precio_base * .1 + precio_base);
			}
			break;
		case "Cordoba":
			if (estacion == "Invierno") {
				alert(precio_base * .9);
			} else if (estacion == "Verano") {
				alert(precio_base * .1 + precio_base);
			} else {
				alert(precio_base);
			} break;
		case "Mar del plata":
			if (estacion == "Invierno") {
				alert(precio_base * .8);
			} else if (estacion == "Verano") {
				alert(precio_base * .2 + precio_base);
			} else {
				alert(precio_base * .1 + precio_base);

			}
	}
}
