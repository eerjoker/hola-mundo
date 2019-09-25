// Puedo crear tipo de datos personalizados
type alfanumerico = string | number // con | se indica otro tipo de dato posible

// String
//let cadena: string | number = "esteban"
let cadena: alfanumerico = "esteban"

cadena = 44

// Number
let numero: number = 12

// Boleano
let verdadero_falso: boolean = true

// Any
let cualquiera: any = "hola"
cualquiera = 77

// Arrays - se define de dos formas
var lenguajes: Array<string> = ["PHP", "JS", "CSS"] // se indica tipo de datos que contiene entre <>

let years: any[] = ["DOCE", 13, 14]

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years)

// Let vs var

var numero1 = 10
var numero2 = 12

if(numero1 == 10){
	let numero1 = 44
	var numero2 = 55

	console.log(numero1, numero2)
}

console.log(numero1, numero2)