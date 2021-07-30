function mostrar() {
	let num;
	let contadorDivisores = 0;

	num = parseInt(prompt("Ingrese un numero"));
	while (isNaN(num)) {
		num = parseInt(prompt("Incorrecto, por favor ingrese un numero "));
	}
	for (let i = 1; i <= num; i++) {

		if (num % i == 0) {
			contadorDivisores++;
			console.log(i);
		}


	} alert("Se encontraron " + contadorDivisores + " divisores");









}//FIN DE LA FUNCIÓN














/*	num = parseInt(prompt("ingrese un numero: "));

	for (let i= 1; i <= num; i++){

		if (num % i == 0)
		{
			contadorDivisores++;
			console.log(i);
			alert("Se encontraron " + contadorDivisores + " numeros divisores");
		}
	} */

