function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18 )
	{

		alert("Ud es mayor de edad");
	}
	
	if (edad < 18)
	{
		
		alert("Ud es menor de edad");

	}

	    

}//FIN DE LA FUNCIÓN