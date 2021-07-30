function mostrar() {
	let num;
	let contadorDivisores;

	num = parseInt(prompt("Ingrese un numero"));
	while (isNaN(num)) {
		num = parseInt(prompt("Incorrecto, igrese un numero valido"));
	}
	for (let i = 2; i < num; i++) {

		if (num % i == 0) {
			contadorDivisores++;


		}
	} if (contadorDivisores != 0) {
		alert(num + " es primo");
	} else
		alert(num + " no es primo");

}




//FIN DE LA FUNCIÓN
/*

let num;
	let contador=0;

	num = parseInt(prompt("ingrese un numero: "));

	for (let i= 2; i < num; i++){

		if (num % i ==0);
		{ contador++;


		}if (contador != 0){
			alert(numero + "El numero es primo");
		} else
		alert (numero + " El numero no es primo"); */