/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  let largo;
  let ancho;
  let alambre;

  largo = parseFloat (document.getElementById("txtIdLargo").value);

  ancho = parseFloat (document.getElementById("txtIdAncho").value);

  alambre = (largo + ancho) * 3;

  alert (alambre);


}
function Circulo () 
{
	let radio;
    let diametro;
    let circunferencia;
    let alambre;

    radio = parseFloat (document.getElementById("txtIdRadio").value);

    diametro = radio * 2;

    circunferencia = diametro * 3.1415;

    alambre = circunferencia * 3;

    alert(alambre);


}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    //const CEMENTO_X_MT2 = 2
    //const CAL_X_MTS2 = 3
    //const se usa para no equivocarse en los valores, es una constante

    largo = parseFloat(document.getElementById("txtIdLargo").value);

    ancho = parseFloat(document.getElementById ("txtIdAncho").value);

    area = largo * ancho;

    cemento = area * 2;

// cemento = area * CEMENTO_X_MT2

    cal = area * 3;

    //cal = area * CAL_X_MT2
    
    alert(`Para un contrapiso de ${area} m2 necesito comprar ${cemento} bolsas de cemento y ${cal} bolsa de cal`);

}