/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  let sueldo;
  let nuevo_sueldo;
  let aumento;
  // para calcular nuevo sueldo debo sumarle al original al aumento
  //el calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100

  sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

  // recordar que en estos casos se usa parsefloat ya que el sueldo no es necesariamente un Z (num entero)
  
  aumento = sueldo * 10 / 100;

  nuevo_sueldo = sueldo + aumento;

  document.getElementById("txtIdResultado").value = nuevo;












}
