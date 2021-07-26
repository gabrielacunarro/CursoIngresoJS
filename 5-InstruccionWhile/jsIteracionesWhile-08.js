/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let num;
	let acumulador_positiv=0
	let acumulador_negativ=1
	let respuesta;
	let flag =0;

	do{
		num=parseInt (prompt("Ingrese numeros"));

		while(isNaN(num)){

			num=parseInt (prompt("Ese no es un numero, Ingrese un numero"));
		}
		if (num >=0){
			acumulador_positiv = acumulador_positiv + num;
		
				
		}else {
			flag =1;
			acumulador_negativ = acumulador_negativ * num;

		}
        respuesta = prompt("Quiere ingresar otro numero? S / N").toLowerCase();

	}while (respuesta == "s");

	if (flag ==0){
		acumulador_negativ =0;
	} document.getElementById("txtIdSuma").value= acumulador_positiv;
	  document.getElementById("txtIdProducto").value= acumulador_negativ;

	

	







}
