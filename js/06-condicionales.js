"use strict"

// Condicional if
// Si A es igual a B entonces haz algo.

var edad1=30
var edad2=12

// Si pasa lo del () ejecuta lo del {}.
if(edad1>edad2){
	console.log("Edad 1 es mayor que edad 2")
}else{
	console.log("Edad 1 es inferior")
}

/* Operadores relacionales
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Menor o igual: <=
	Igual: ==
	Distinto: !=
*/
var edad=45
var nombre="David Suarez"
// Dentro de un if se puede hacer otro.
if (edad >= 18) {
	console.log(nombre+" tiene "+edad+" años, es mayor de edad")
	
	if(edad<=33){
		console.log("Todavia eres millenial")
	}else if(edad>=70){
		console.log("Eres anciano")
	}else{
		console.log("Ya no eres millenial")
	}
}else{console.log(nombre+" tiene "+edad+" años, es MENOR de edad")
}

/* Operadores lógicos
AND (Y): &&
OR (O): ||
NEGACION: !
*/

// Negación
var year= 2018
if(year != 2016){
	console.log("El año no es 2016, realmente es: "+year)
}

// And
if(year >= 2000 && year <= 2020){
	console.log("Estamos en la era actual")
}else{
	console.log("Estamos en la era post moderna")
}

// Or
if(year==2008 || (year>=2018 && year==2028)){
	console.log("El año acaba en 8")
}else{
	console.log("AÑO NO REGISTRADO")
}
