function mostrar() {
  let precio;
  let tipo;
  let cantidad;
  let acumCal = 0;
  let acumCemento = 0;
  let acumArena = 0;
  let importeBruto = 0;
  let importeNeto=0;
  let descuento = 0;
  let maxTipo;
  let maxPrecio;
  let seguir;
  let flagCaro = 1;
  let subtotal;
  let totalBolsas=0;
  let mayorCantidadBolsas;


  do {

    tipo = prompt("Ingrese el tipo ( cemento/cal/arena)").toLowerCase();
    while (!(tipo == "cemento" || tipo == "cal" || tipo == "arena")) {
      tipo = prompt("Tipo invalido. Reingrese el tipo ( cemento/cal/arena)").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese cantidad:"));
    while (isNaN(cantidad) || cantidad <= 0) {
      cantidad = parseInt(prompt("Incorrecto, ingrese la cantidad de unidades- max 1000"));

    }
    precio = parseFloat(prompt("Ingrese precio:"));
    while (isNaN(precio)) {
      precio = parseFloat(prompt("Error, Ingrese un precio valido"));

    }
    subtotal = precio * cantidad;
    importeBruto += subtotal;

    if (tipo == "cemento") {
      acumCemento += cantidad;
    }
    else if (tipo == "cal") {
      acumCal += cantidad;
    } else {
      acumArena += cantidad;
    }

    if (flagCaro || precio > maxPrecio) {
      maxPrecio = precio;
      maxTipo = tipo;
      flagCaro = 0;
    }


    seguir = prompt("Quiere ingresar otro producto? s/n")
  } while (seguir == "s");

  totalBolsas = acumArena + acumCal + acumCemento;

  if (totalBolsas > 30) {
    descuento = importeBruto * 0.25;
  } else if (totalBolsas > 10) {
    descuento = importeBruto * 0.15;
  }

  importeNeto = importeNeto - descuento;

  if (acumArena > acumCal && acumArena > acumCemento) {
    mayorTipo = "Arena";
    mayorCantidadBolsas = acumArena

  } else if (acumCal > acumArena && acumCal > acumCemento) {
    mayorTipo = "Cal";
    mayorCantidadBolsas = acumCal

  } else {
    mayorTipo = "Cemento";
    mayorCantidadBolsas = acumCemento
  }

  document.write("Importe Bruto: " + importeBruto + "<br>");

  if (descuento != 0) {
    document.write("Importe Neto: " + importeNeto + "<br>");
  }
  else {
    document.write("No se efectuo ningun descuento" + "<br>");
  }

  document.write("El tipo con mas cant de bolsa es " + mayorTipo + "cantidad: " + mayorCantidadBolsas +"<br>");
  document.write("El tipo mas caro " + maxTipo + "<br>");


}