'use strict'

function holaMundo(texto){
	var hola_mundo="Texto dentro de función";

	console.log(texto)
	console.log(typeof(numero.toString(/*permite convertir el objeto número en string*/)))
	//Llamo a la variable que está fuera
	console.log(hola_mundo) //Llamo a la variable local
}

var numero = 12
var texto = "Hola mundo, soy una variable global"

holaMundo(texto)

//console.log(hola_mundo)
//Da error porque la variable no está definida en el ámbito global, solo dentro de la función