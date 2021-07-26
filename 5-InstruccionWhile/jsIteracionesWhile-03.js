/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	 clave= prompt ( "Ingrese su clave");

	while (clave != "utn750"){
		prompt("Clave incorrecta, ingresela nuevamente");
		
		
	} alert("Bienvenido");




	
		
	
		
	
	
}//FIN DE LA FUNCIÓN

/* 	let clave;

	clave = prompt("Ingrese su clave: "); // si ingresa bien a la primera solo se ejectua este prompt y el alert fuera de la funcion "clave correcta", sino ingreso al while.

	while(clave != "utn750"){ // tengo q poner una condicion que sea VERDADERA cuando el dato sea INVALIDO
		clave = prompt("Clave incorrecta. Reingrese clave: ");
	}

	alert ("Clave correcta "); */
