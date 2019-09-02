'use strict'

/*
1. Pida 6 números por pantalla y los meta en un array
2. Motrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice.
(Se valorará el uso de funciones)
*/

function mostrarArray(elementos, textoCustom=""){
	document.write("<h1>Contenido del array "+textoCustom+"</h1>")
	document.write("<ul>")
	elementos.forEach((elemento, index) => {
		document.write("<li><strong>"+elemento+"</strong></li>")
	})
	document.write("</ul>")
}

// var numeros = new Array(6) // entre () se indican cuantas posiciones tendrá el Array.
var numeros = []

for(var i=0; i <= 5; i++){
	// numeros[i] = parseInt(prompt("Introduce un número",0))
	numeros.push(parseInt(prompt("Introduce un número",0)))
}

mostrarArray(numeros)

console.log(numeros)

numeros.sort(function(a, b){return a-b}) // Para ordenar de forma numérica
console.log(numeros)
mostrarArray(numeros, 'ordenado')

numeros.reverse()
console.log(numeros)
mostrarArray(numeros, 'revertido')

document.write("<h1> El array tiene "+numeros.length+" elementos.</h1>")


var busqueda = parseInt(prompt("Busca un número",0))

var posicion = numeros.findIndex(numero => numero == busqueda)

if(posicion && posicion != -1){

	document.write("<hr/><h1>ENCONTRADO</h1>")
	document.write("<h1>Posición de la búsqueda: "+posicion+"</h1><hr/>")
}else{
	document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>")
}


/*
Como lo hice yo:

var numeros = new Array

var elemento = ""

do {
	elemento = parseInt(prompt("Introduce un número",0))
	numeros.push(elemento)
}while(
	elemento != 0
)

numeros.pop()

function mostrar (cuerpo, consola){
	console.log(numeros.length)
	document.write("<p>"+cuerpo.join("<br/>")+"</p>")
	console.log(consola)
}

mostrar(numeros, numeros)

mostrar(numeros.sort(), numeros.sort())
mostrar((numeros.sort()).reverse(), (numeros.sort()).reverse())

var busqueda = parseInt(prompt("Indique número a buscar",0))
var buscado = numeros.findIndex(numero => numero == busqueda)


if (buscado>=0){
	console.log ("Se ha encontrado el número en el índice "+buscado+".")
	document.write("<p>Se ha encontrado el número en el índice "+buscado+".</p>")
}else{
	console.log("No se ha encontrado el número.")
	document.write("<p>No se ha encontrado el número.</p>")
}
*/