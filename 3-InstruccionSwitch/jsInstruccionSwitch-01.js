function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
			alert("Que comiences bien el año!");
			break; // para finalizar el case utilizar este termino. Tomara nada mas lo que esta dentro de las llaves de switch
		case "Marzo":
			alert("A clases!");
			break;
		case "Julio":
			alert ("Se vienen las vacaciones!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!");
			break;
	}					

	



	
	
	



}//FIN DE LA FUNCIÓN

/*	if (mes == "Enero"){
		alert("Que comiences bien el año!");
	} else if (mes =="Marzo"){
		alert("A clases! ");
	}else if (mes == "Diciembre"){
		alert ("Felices fiestas");*/