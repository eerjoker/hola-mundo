'use strict'

// Funciones anónimas
// Es una función que no tiene nombre.
/*
var pelicula = function(nombre){
	return "La pelicula es: " +nombre;
}*/
// La función tiene el nombre de la variable, pero el nombre de la variable se puede modificar.

// Callback es una función que se ejecuta dentro de otra.
// Es una función anónima que se le pasa como parámetro a otra función.

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar=numero1+numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar)
	return sumar;
}
/*
sumame(5, 7, function(dato){
	console.log("La suma es: ", dato)
}, function(dato){
	console.log("La suma por dos es: ", (dato*2))
})*/

// Función de flecha: es una forma limpia y clara de definir funciones de callback.
// Si lleva más de un parámetro sí necesita ().
sumame(5, 7, dato => {
	console.log("La suma es: ", dato)
}, dato => {
	console.log("La suma por dos es: ", (dato*2))
})