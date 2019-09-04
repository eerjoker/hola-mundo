'use strict'

// DOM - Document Object Model

//var caja = document.getElementById("micaja") // Muestra el objeto del html.

var caja = document.querySelector("#micaja") // selecciona con el querySelector. "#" para seleccionar id y "." para seleccionar clase.

//var caja = document.getElementById("micaja").innerHTML // Muestra solo lo que está dentro del div.

function cambiaColor(color){
	caja.style.background = color
}

// Para editar los elementos:

caja.innerHTML= "¡TEXTO EN LA CAJA DESDE JS!"
caja.style.background = "red"
caja.style.padding = "20px"
caja.style.color = "white"
caja.className = "hola hola2" // agrega clases.

console.log(caja)