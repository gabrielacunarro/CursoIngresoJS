function mostrar() {
	let destino;
	let precio_base;
	let precio_final;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precio_base = 15000

	switch (destino) {
		case "Bariloche":
			if (estacion == "Invierno") {
				precio_final = precio_base * .2 + precio_base;
			} else if (estacion == "Verano") {
				precio_final = precio_base * .8;
			} else {
				precio_final =precio_base * .1 + precio_base;
			}
			break;
		case "Cataratas":
			if (estacion == "Invierno") {
				precio_final = precio_base * .9;
			} else {
				precio_final =precio_base * .1 + precio_base;
			}
			break;
		case "Cordoba":
			if (estacion == "Invierno") {
				precio_final =precio_base * .9;
			} else if (estacion == "Verano") {
				precio_final = precio_base * .1 + precio_base;
			} else {
				precio_final =precio_base;
			} break;
		case "Mar del plata":
			if (estacion == "Invierno") {
				precio_final = precio_base * .8;
			} else if (estacion == "Verano") {
				precio_final = precio_base * .2 + precio_base;
			} else {
				precio_final = precio_base * .1 + precio_base;
			}break;
	}
	alert ("Precio final $" + precio_final);
}

