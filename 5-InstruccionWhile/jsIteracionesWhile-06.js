function mostrar()
{
	let num;
	let acumulador=0
	let contador=0
	let promedio;


	while (contador <5){
		num =parseInt( prompt("Ingrese 5 numeros "));

		acumulador = num + acumulador;

		contador++; 
		
	} promedio = acumulador / contador;
	  document.getElementById("txtIdSuma").value= acumulador;
	  document.getElementById("txtIdPromedio").value= promedio;



}//FIN DE LA FUNCIÓN

/* let contador = 0;
let acumulador = 0;
let numero;
let promedio;

while(contador <5) {
	numero= parseInt(prompt ("Ingrese un numero: "));

	acumulador = acumulador + numero; // = decir acumulador += numero

	contador++; // contador = contador +1
	
}
promedio = acumulador / contador; //va fuera el promedio se calcula 1 vez y luego de tener ingreado los 5 nums

document.getElementById("txtIdSuma").value = acumulador
document.getElementById("txtIdPromedio").value = promedio; */