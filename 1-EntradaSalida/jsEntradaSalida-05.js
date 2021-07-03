/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//reservo espacio en memoria

	let nombre;
    let edad;

	//traigo el valor de la caja de texto

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	//genero un alert concatenado con + entre strings y variables

	//alert("Usted se llama " + nombre +  " y tiene " + edad + " años"); forma alternativa

    alert(`Usted se llama ${nombre} y tiene ${edad} años`)

	



}

