/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let tempf;
    
    let tempc;

    tempf = parseFloat (document.getElementById("txtIdTemperatura").value);

    tempc = (tempf -32) / 1.8;

    alert(tempf + " grados Fahrenheit son " + tempc + " grados centigrados");
}

function CentigradosFahrenheit () 
{
	let tempf;
    let tempc;

    tempc = parseFloat (document.getElementById("txtIdTemperatura").value);

    tempf = tempc * 1.8  + 32;

    alert(tempc + " grados Centigrados son " + tempf + " grados Fahrenheit");
}
