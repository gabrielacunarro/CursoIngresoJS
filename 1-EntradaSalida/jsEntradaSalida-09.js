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

  sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

  // recordar que en estos casos se usa parsefloat ya que el sueldo no es necesariamente un Z (num entero)
  
  aumento = sueldo * .1;

  nuevo_sueldo = sueldo + aumento;

  document.getElementById("txtIdResultado").value = nuevo_sueldo;












}
