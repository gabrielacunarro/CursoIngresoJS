/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let num;
	let num_max; 
	let num_min; 
	let respuesta;
	let flag = 0



	do {
		num = parseInt(prompt("Ingrese un numero"));
		while (isNaN(num)) {
			num = parseInt(prompt("Ese no es un numero, Ingrese un numero"));

		} if (flag == 0) {
			num_max = num;
			num_min = num;
			flag = 1
		}

		if (num > num_max) {
			num_max = num;


		} else  (num < num_min) 
			num_min = num;
		

		respuesta = prompt("Quiere ingresar otro numero s/n").toLowerCase();


	} while (respuesta == "s");

	document.getElementById("txtIdMaximo").value = num_max;
	document.getElementById("txtIdMinimo").value = num_min;






































}

