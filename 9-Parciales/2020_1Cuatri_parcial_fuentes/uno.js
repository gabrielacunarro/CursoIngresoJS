
function mostrar() {
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let cant_Albarato;
	let fabric_Albarato;
	let precio_Albarato;
	let flagAlcohol = 1;
	let acum_b = 0;
	let acum_a = 0;
	let acum_j = 0;
	let cont_b = 0;
	let cont_a = 0;
	let cont_j = 0;
	let promedio;
	let mayorTipo;

	for (let i = 0; i < 5; i++) {

		tipo = prompt("Ingrese el tipo ( barbijo/jabon/alcohol)").toLowerCase();
		while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol")) {
			tipo = prompt("Tipo invalido. Reingrese el tipo ( barijo/jabon/alcohol)").toLowerCase();

		}
		precio = parseFloat(prompt("Ingrese precio $ (100-300):"));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseFloat(prompt("Error, Ingrese precio $ (100-300):"));
		}
		cantidad = parseInt(prompt("Ingrese cantidad de unidades- max 1000"));
		while (!(cantidad >= 1 && cantidad <= 1000)) {
			cantidad = parseInt(prompt("Incorrecto, ingrese la cantidad de unidades- max 1000"));
		}
		marca = prompt("Ingrese marca ");
		fabricante = prompt("Ingrese fabricante ");


		switch (tipo) {
			case "alcohol":
				acum_a += cantidad; // recordar!! acumulador += cantidad para que funcione
				cont_a++;

				if (tipo == "alcohol") {

					if (flagAlcohol || precio < precio_Albarato)
						cant_Albarato = cantidad;
					fabric_Albarato = fabricante;
					precio_Albarato = precio;
					flagAlcohol = 0;
				} break;

			case "jabon":
				acum_j += cantidad;
				cont_j++;
				break;

			case "barbijo":
				acum_b += cantidad;
				cont_b++;

		}

	} if (acum_b > acum_a && acum_b > acum_j) {
		mayorTipo = "barbijo";
		promedio = acum_b / cont_b;
	} else if (acum_a > acum_b && acum_a > acum_j) {
		mayorTipo = "alcohol";
		promedio = acum_a / cont_a;
	} else {
		mayorTipo = "jabon";
		promedio = acum_j / cont_j;
	}
	if (flagAlcohol ==0){
		alert("El alcohol mas barato: " + precio_Albarato + " Hay " + cant_Albarato + " unidades del alcohol mas barato y su fabricante es " + fabric_Albarato );

	}else {
		alert("No se compro ningun alcohol");
	}
	
	alert("El producto con mas unidades es " + mayorTipo + " y el promedio de compra es " + promedio + " unidades/compra");
	
	alert("Hay " + acum_j + " cantidad de jabones en total");








}























/*  1-declarar variables pedir al usuario > tipo/ precio/cantidad/marca/fabricante
	a. cant_Albarato/ fabric_Albarato/ precio_Albarato/ flagAlcohol
	b. acum_b/ acum_a/ acum_j/ cont_b/ cont_a/cont_j
	c. acum_j utilizada en el punto b
	------------------------------------------------------------------------------------------
	2- generar un bucle q se repita 5 veces(for) ya q se de antemano la cantidad de repeticiones
	cosa que se tiene q hacer dentro del bucle:
	2.1 > pido  tipo y lo valido
	2.2 > pido precio y lo valido
	2.3 > pido cantidad y lo valido
	2.4 > pido marca
	2.5 > pido fabricante
	-------------------------------------------------------------------
	3- cosa que tengo que hacer para poder responder el punto A
	3.1 > me fijo si es un alcohol
	si es alcohol me fijo si es la primera vez que se ingresa
	o si ya se habia ingresado previamente
	si es la primera vez, cambio el flag, guardo el precio, la cantidad y el fabricante como alcohol barato y por
	cada alcohol me fijo si es mas barato q el q ya tengo y de ser asi actualizo los precios.
	3.2 me fijo el tipo de producto  y actualizo el acumulador y el contador segun corresponda
	-------------------------------------------------------------------------------------------
	4- cosa que tengo que hacer despues del for
	b me fijo cual fue el mas tipo con mas unidades vendidas y calculo el promedio

	mostrar los resultados


*/
