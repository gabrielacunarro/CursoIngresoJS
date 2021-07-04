/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// reservar memoria variables

	let numUno;

	let numDos;

	let resultado;

	//traer id de variables desde html

	numUno = document.getElementById("txtIdNumeroUno").value;
	
	numDos = document.getElementById("txtIdNumeroDos").value;

//tengo que parsear las variables string, para que devuelva un numero

	numUno = parseInt(numUno);

	numDos = parseInt(numDos);

	// una vez parseado sumar variables asi da el resultado

    resultado = numUno + numDos;

	// cargar el alert con el string la suma es + la variable resultado
	alert("La suma es " + resultado);

//parseint es para pasar numeros enteros, para numeros con punto usar parsefloat

}

/* reservar memoria variables

let numUno

let numDos

let resultado

//traer id de variables desde html

numUno = document.getElementById("txtIdNumeroUno").value;

numUno = parseInt(numUno);  parseo luego de asignar value

numDos = document.getElementById("txtIdNumeroDos").value;

numDos = parseInt(numDos); parseo luego de asignar value

resultado = numUno + numDos;

 //cargar el alert con el string la suma es + la variable resultado

alert("La suma es " + resultado);

parseint es para pasar numeros enteros, para numeros con punto usar parsefloat*/

// num1 = parseInt(documente.getElementById("txtidNumUno").value) otra alternativa para
//parsear el num dentro del value de la variable