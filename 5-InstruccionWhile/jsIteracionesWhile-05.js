/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {

	let sexo;

	sexo = prompt("Ingrese su sexo f o m").toLowerCase();

	while (!(sexo == "f" || sexo == "m" )){
		sexo = prompt ("Incorrecto, ingrese f o m ");

	} document.getElementById("txtIdSexo").value = sexo;

}	

//FIN DE LA FUNCIÓN

/* 	let sexo;
	sexo = prompt("Ingrese f o m ").toLowerCase(); // lower me pasa el dato ingresado en minuscula
	while (!(sexo == "f" || sexo == "m")){
		sexo = prompt("Incorrecto, por favor ingrese f o m").value;
	}
	document.getElementById("txtIdSexo").value = sexo;
}



txtIdSexo.value = sexoIngresado; */