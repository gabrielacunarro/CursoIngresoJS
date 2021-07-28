/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let num;
	let respuesta = "s"
	let cantidadNegativos = 0;
	let cantidadPositivos = 0;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidad_par=0;
	let promedio_positiv;
	let promedio_negativ;
	let cantidad_0 = 0
	let contador = 0
	let diferencia;


	do {
		num = parseInt(prompt("Ingrese un numero"));
		while (isNaN(num)) {
			num = parseInt(prompt("Ese no es un numero, ingrese un numero"));

		} if (num % 2 == 0) {
			nums_par++;
		} if (num == 0) {
			cantidad_0++;

		} else if (num >= 0) {
			sumaPositivos = sumaPositivos + num;
			cantidadPositivos++;
			promedio_positiv = sumaPositivos / cantidadPositivos;

		} else (num < 0) 
		    sumaNegativos = sumaNegativos + num;
			cantidadNegativos++;
			promedio_negativ = sumaNegativos / cantidadNegativos;

		diferencia = sumaPositivos - sumaNegativos;

		respuesta = prompt("Quiere ingresar otro numero s/n").toLowerCase();


	} while (respuesta == "s");

	alert("La cantidad de positivos es de: " + cantidadPositivos);
	alert("La cantidad de negativos es de: " + cantidadNegativos);
	
	alert("La suma de positivos es de: " + sumaPositivos);
	alert("La suma de negativos es de: " + sumaNegativos);
	
	alert("La cantidad de numeros pares es de: " + cantidad_par);
	alert("La suma de ceros es de: " + cantidad_0);
	alert("La diferencia de positivos y negativos: " + diferencia);



}



/* 	alert("Ingreso " + contador + "  numeros");
	alert("Promedio  = " + promedio_positiv);
	alert("Ingreso " + contador + "  numeros");
	alert("Promedio  = " + promedio_negativ);*/











