// String
//let cadena: string | number = "esteban"
var cadena = "esteban";
cadena = 44;
// Number
var numero = 12;
// Boleano
var verdadero_falso = true;
// Any
var cualquiera = "hola";
cualquiera = 77;
// Arrays - se define de dos formas
var lenguajes = ["PHP", "JS", "CSS"]; // se indica tipo de datos que contiene entre <>
var years = ["DOCE", 13, 14];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
// Let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
