'use strict'

// Arrays, Arreglos o Matrices
// Colección de tipos de valores que puede tener una variable.

var nombre = "Esteban Rivera" // variable con un solo dato.
var nombres =["Esteban Rivera", "Juan Lopez", "Manolo García", "Jose Martin", 52, true]; //puedo tener todo tipo de datos, incluso otros arrays.
// tienen índices.   0				1				2				3			4	5
//empiezan desde el 0.


// se pueden definir con [] o creandolos como objetos.

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");
/*
console.log (nombres[2]) //así accedo a un ítem en particular.
console.log (lenguajes)*/

console.log (nombres.length) //para saber cuántos elementos tiene.

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres?",0))
if(elemento >= nombres.length){
	alert("Introduce el número correcto menor que " + nombres.length)
	elemento = parseInt(prompt("¿Qué elemento del array quieres?",0))
}else{
	alert("El usuario seleccionado es: "+nombres[elemento])
}
*/

//Recorrer elementos del array
/*
document.write("<h1>Lenguajes de programación del 2018</h1>")
document.write("<ul>")
*/
/*
for(var i=0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>")
}

document.write("</ul>")
*/
/*
//Otra forma más práctica, con función de callback y .forEach
lenguajes.forEach((elemento, indice, array)=>{
	//console.log(array) //trae el dato del array original
	document.write("<li>"+indice+" - "+elemento+"</li>")
})
//indice (index) y array (data) son opcionales, si se quiere saber esa información
*/

// Recorrer arreglos con el For in
/*
for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>")
	//acá lenguaje es solo el índice y poniéndolo entre [] sale el valor de cada índice dentro del array lenguajes.
}
*/

// Búsquedas
//para comprobar si el elemento existe dentro de un array.
/*
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP"
})
*/
// Forma más práctica
var busqueda = lenguajes.find(lenguaje => lenguaje=="C#")

console.log(busqueda)

// Para buscar en que número de índice está el elemento
var busqueda_indice = lenguajes.findIndex(lenguaje => lenguaje == "C#")
console.log(busqueda_indice)

// Para encontrar valores en un array de números
var precios =[10, 20, 50, 80, 12]

var busqueda_numeros = precios.some(precio => precio >= 20)
console.log (busqueda_numeros)