function mostrar() {
	let estacion;
	let destino;
	let seViaja = 1; //técnica flag.
  
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
  
	switch (destino) {
	  case "Bariloche":
		if (estacion != "Invierno" && estacion != "Otoño") { // primavera != invierno y otoño V + V =VERDADERO ENTRA
		  seViaja = 0;                                       // invierno != otoño pero invierno= invierno = F + V =F NO ENTRA 
		}
		break;
  
	  case "Mar del plata":
	  case "Cataratas":
		if (estacion == "Invierno") {
		  seViaja = 0;
		}
		break;
  
	  case "Cordoba":
		if (estacion != "Otoño" && estacion != "Primavera") {
		  seViaja = 0;
		}
	  
	}
  
	if (seViaja) {
	  alert("Se viaja.");
	} else {
	  alert("No se viaja.");
	}
  
	



}

/*
ej negando :
switch (destino) {
	  case "Bariloche":
		if (!(estacion == "Invierno" || estacion == "Otoño")) invierno = invierno -V- invierno != otoño F = F
		  seViaja = 0;                                         Al ser falso como estoy negando "!" se hace V y entra        
		}
		break;


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

			/*let destino;
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
		    }break;*/