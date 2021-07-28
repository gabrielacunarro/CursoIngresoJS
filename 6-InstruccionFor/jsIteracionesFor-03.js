function mostrar()
{
	let mensaje = "Hola UTN FRA";
	 let cantidad;

	cantidad = parseInt (prompt("Ingrese el numero de repeticiones deseadas"));
	while(isNaN(cantidad)){
		cantidad = parseInt(prompt("Ingrese lo solicitado, intente nuevamente"));
	}

	 for(let i =0; i < cantidad; i++){
		console.log(mensaje);	

	 }
	

	


}//FIN DE LA FUNCIÓN

