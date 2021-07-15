function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		case "Enero":	
		case "Marzo":				
		case "Abril":			
		case "Mayo":			
		case "Junio":			
		case "Julio":			
		case "Agosto":			
		case "Septiembre":			
		case "Octubre":			
		case "Noviembre":		
		case "Diciembre":
			alert("Este mes tiene 30 o mas dias");
			break;

	}	


}//FIN DE LA FUNCIÓN

/* let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
	default:
		alert("Este mes tiene 30 o mas dias");
			break; solo si las opciones son dadas, ej listado html	*/ 