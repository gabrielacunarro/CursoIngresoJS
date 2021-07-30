function mostrar() {
//declaro variables
	let num;
	let nums_pares;
	let cantidad_pares=0;
// pdio numero y lo valido
	num = parseInt(prompt("Ingrese un numero"));
	while (isNaN(num)) {
		num = parseInt(prompt("Incorrecto por favor ingrese un numero"));

	}
//bucle for, incio el valor de i con 1 , indico que i es menor al nro ingresado, i++
	for (let i = 1; i < num; i++) {
// condicional: si i lo divido por dos y el resto da 0 es par, por ende se contabiliza y se muestra en console.log.
		if(i % 2 == 0){
			cantidad_pares++;
			console.log(i);
		}


	} alert("Pares encontrados " + cantidad_pares);































}//FIN DE LA FUNCIÓN

/*
let num;
	let contadorPares = 0;

	num = parseInt(prompt("ingrese un numero: "));

	for (let i= 1; i <= num; i++)
	{
		if (i % 2 == 0)
		{
			contadorPares++;
			console.log(i);
		}
	}
	console.log("Pares encontrados " + contadorPares);


















--------------------------------------------------------
if (i % 2 == 0) numeros pares
	if (!(i % 2 )) // if( i % 2 ) numeros negativos*/