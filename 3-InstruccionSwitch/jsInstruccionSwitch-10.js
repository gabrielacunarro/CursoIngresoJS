function mostrar() {
	let destino;
	let estacion;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("Se viaja");
			} else {
				alert("No se viaja");
			}break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas"){
				alert ("Se viaja");
			}else{
				alert ("No se viaja");
			}break;
		case "Otoño":
			if (destino != " "){
				alert ("Se viaja");
			}break;	
		case "Primavera":
			if (destino != "Bariloche"){
				alert("Se viaja");
			}else {
				alert("No se viaja");
		    }break;

				
	}































}

/*
	destino = document.getElementById("txtIdEstacion").value;
	estacion = document.getElementById("txtIdDestino").value;


	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("Se viaja");
			}
			break;
			alert("No se viaja");
		case "Verano":
			if  (destino == "Mar del plata" || destino == "Cataratas"){
				alert("Se viaja");
			}
			break;
			alert("No se viaja");
		case "Otoño":
			if (destino != " "){
				alert ("Se viaja");
			}
			break;
		case "Primavera":
			if (destino != "Bariloche"){
				alert("Se viaja");
			}
			alert("No se viaja");
			break;*/