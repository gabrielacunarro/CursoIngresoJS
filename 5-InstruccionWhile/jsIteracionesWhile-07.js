/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num;
	let acumulador=0;
	let promedio;
	let contador=0;
	let respuesta= "si";

	do{
		num = parseInt (prompt ("Ingrese un numero: "))
		acumulador = num + acumulador;
		contador++;
		respuesta= prompt("Quiere ingresar otro numero? ");

	} while(respuesta == "si");
		promedio = acumulador / contador;
	 document.getElementById ("txtIdSuma").value = acumulador;
	 document.getElementById ("txtIdPromedio").value = promedio;





}//FIN DE LA FUNCIÓN

/* let respuesta;
let num;
let promedio;
let acumulador=0
let contador=0

do {

	num = parseInt(prompt ("Ingrese un numero: "))

	acumulador = acumulador + num;

	contador++;

	respuesta = prompt ("Quiere ingresar otro numero? ");

}while ( respuesta == "s");

promedio = acumulador / contador;

document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = promedio; */