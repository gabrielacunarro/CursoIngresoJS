/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar nombre de usuario
let nombre;

//guardo en la variable el nombre del texto que ecribio un usuario dentro de la ventana prompt
nombre = prompt("Ingrese su nombre");

//copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pag html
document.getElementById("txtIdNombre").value = nombre;

// el =nombre se invierte ya que se quiere cambiar el orden - destino
}

