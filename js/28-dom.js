'use strict'

// DOM - Document Object Model. Es el árbol de todos los elementos que hay en una página html.

// Conseguir elementos con un ID concreto

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

//console.log(caja)

// Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div')

/*
var contenidoEnTexto = todosLosDivs[2].textContent // Muestra texto dentro del div.
todosLosDivs[2].innerHTML = "Otro texto para el segundo elemento" // Modifico el contenido del texto
console.log(contenidoEnTexto)

console.log(todosLosDivs)
*/

var seccion = document.querySelector("#miseccion")
var hr = document.createElement('hr')
var valor
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p") // Crea elemento p en HTML para el parrafo
		var texto = document.createTextNode(todosLosDivs[valor].textContent)
		parrafo.append(texto) // Mete el texto dentro del párrafo, después de lo que ya había
		seccion.append(parrafo)
		// .prepend mete el parrafo en el documento, antes de lo que ya había
	}
}
seccion.append(hr)

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo')
var divsAmarillos = document.getElementsByClassName('amarillo')

divsAmarillos[0].style.background = "yellow"

var div
for(div in divsRojos){
	if(divsRojos[div].className=="rojo"){
		divsRojos[div].style.background = "red"
	}
}

// Query selector
// Funciona seleccionando un id:
var id = document.querySelector("#encabezado")
console.log(id)

// Para seleccionar muchas etiquetas, solo agarra el primero de los elementos con esa etiqueta.
var claseRojo = document.querySelector("div.rojo")
console.log(claseRojo)

// Para esose usa el .querySelectorAll
var etiqueta = document.querySelectorAll("div")
console.log(etiqueta)