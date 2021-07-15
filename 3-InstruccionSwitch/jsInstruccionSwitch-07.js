function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino){
		case "Bariloche":
			alert("Esta al oeste")
			break;
		case "Mar del plata":
			alert("Esta al este")
			break;
		case "Ushuaia":
			alert("Esta al sur")
			break;
		case "Cataratas":
			alert("Esta al norte")
			break;	
			
	}



}//FIN DE LA FUNCIÓN