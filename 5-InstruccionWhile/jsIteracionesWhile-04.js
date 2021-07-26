/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	num = parseInt (prompt("ingrese un numero del 0 al 9 "));

	while (!(num >= 0 || num <=9)){
		num = parseInt(prompt ("Error ingrese un numero valido "));

	} document.getElementById("txtIdNumero").value = num;

	
}//FIN DE LA FUNCIÓN

/* 	let num;
	num = parseInt ( prompt("Ingrese un numero de 0 a 9"));

	while (!(num >=0 && num <=9)){
		num = parseInt (prompt ("Error, Ingrese un numero valido"));
		

	} document.getElementById("txtIdNumero").value = num; */