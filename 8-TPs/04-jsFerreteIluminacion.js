/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidad;
    let marcas;
    let IIBB;
    let precio;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marcas = document.getElementById("Marca").value;
    precio = 35 * cantidad;
    IIBB = precio * .1;

    if (cantidad >= 6) {
        document.getElementById("txtIdprecioDescuento").value = precio * .5;
    }
    if (cantidad >= 7) {
        document.getElementById("txtIdprecioDescuento").value = precio* .5 + IIBB;
        alert("Ud pago " +  IIBB + " de IIBB");
    }

    switch (marcas) {
        case "ArgentinaLuz":
            if (cantidad == "5") {
                document.getElementById("txtIdprecioDescuento").value = precio * .6;
            } else if (cantidad == "4") {
                document.getElementById("txtIdprecioDescuento").value = precio * .75;
            } else if (cantidad == "3") {
                document.getElementById("txtIdprecioDescuento").value = precio * .85;
            } break;
        case "FelipeLamparas":
            if (cantidad == "5") {
                document.getElementById("txtIdprecioDescuento").value = precio * .7;
            } else if (cantidad == "4") {
                document.getElementById("txtIdprecioDescuento").value = precio * .75;
            } else if (cantidad == "3") {
                document.getElementById("txtIdprecioDescuento").value = precio * .90;
            } break;
        case "JeLuz": case "Osram": case "HazIluminacion":
            if (cantidad == "5") {
                document.getElementById("txtIdprecioDescuento").value = precio * .7;
            } else if (cantidad == "4") {
                document.getElementById("txtIdprecioDescuento").value = precio * .8;
            } else if (cantidad == "3") {
                document.getElementById("txtIdprecioDescuento").value = precio * .95;
            } break;
        case "ArgentinaLuz": case "FelipeLamparas": case "JeLuz": case "Osram": case "HazIluminacion":
            if (cantidad >= 6) {
                document.getElementById("txtIdprecioDescuento").value = precio * .5;


            }


    }


}








          // else if (cantidad >= 6) {
               // document.getElementById("txtIdprecioDescuento").value = (precio_final * 6) * 0.5

/*        case "ArgentinaLuz": case "FelipeLamparas": case "Jeluz": case "HazIluminacion": case "Osram":
if (cantidad <= 6) {
 document.getElementById("txtIdprecioDescuento").value = precio_final * 0.5;*/

