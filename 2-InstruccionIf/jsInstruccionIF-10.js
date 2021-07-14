function mostrar()
{
	let nota = Math.floor (Math.random() * 10 + 1 )
	console.log(nota);

	if (nota >=9){
		alert ("Excelente ");
	} else if (nota > 4){
		alert("Aprobo ");
	}else {
		alert("Vamos, la proxima se puede. ");
	}	


}//FIN DE LA FUNCIÓN