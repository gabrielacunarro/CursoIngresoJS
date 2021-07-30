function mostrar()
{
	let mensaje;
	let cantidad;

	cantidad = parseInt(prompt("Ingrese la cantidad de repeticiones deseadas"));
	while(isNaN(cantidad)){
		cantidad = parseInt(prompt("Valor ingresado no valido, Ingrese la cantidad de repeticiones deseadas" ));
	}

	for(let i=0; i < cantidad; i++){

		mensaje= "Hola UTN FRA"

		console.log(mensaje)

	}

	

	


}//FIN DE LA FUNCIÓN












/* 	let mensaje = "Hola UTN FRA";
	 let cantidad;

	cantidad = parseInt (prompt("Ingrese el numero de repeticiones deseadas"));
	while(isNaN(cantidad)){
		cantidad = parseInt(prompt("Ingrese lo solicitado, intente nuevamente"));
	}

	 for(let i =0; i < cantidad; i++){
		console.log(mensaje);	

	 }*/
