function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case " Mayo":	
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias")	
			break;
		case "Febrero":
			alert("tiene 28 dias")		
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias")
			break;				
	}

	
	
	



}//FIN DE LA FUNCIÓN