/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	nombre = document.getElementById("txtIdNombre") .value;

	//nombre = textIdNombre.value;


	alert(nombre);

	document.getElementById("txtIdNombre").value = ""; //al darle valor string vacio deja la caja de texto vacia
	

}


