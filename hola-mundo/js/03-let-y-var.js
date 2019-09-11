'use strict' // modo estricto, es más restrictivo con las malas prácticas.

// Pruebas con let y var

// Prueba var: define variables de forma global

var numero=40
console.log(numero) // valor 40

if(true){
	var numero=50
	console.log(numero) // valor 50
}

console.log(numero) // valor 50


// Prueba let: define variables limitando su alcance al bloque donde se usa

var texto="Curso JS"
console.log(texto) //valor Curso JS

if(true){
	let texto="Curso Laravel 5"
	console.log(texto) //valor Curso Laravel 5
}

console.log(texto) //valor Curso JS