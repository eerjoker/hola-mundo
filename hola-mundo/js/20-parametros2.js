'use strict'

// Parámetros REST y SPREAD
// Sirven si no está definido el número de parámetros que serán necesarios.

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1)
	console.log("Fruta 2: ", fruta2)
	console.log(resto_de_frutas) //por los ... mete el resto de los parámetros en un array o colección de valores.
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melon", "Coco")

//Creando un array:
var frutas = ["Naranja", "Manzana"]

listadoFrutas( ...frutas, "Sandía", "Pera", "Melon", "Coco")
//Por los ... reparte los valores del array en cada parámetro, en vez de tomar los dos solo dentro del primero.
