'use strict'

//Operadores
//permiten hacer operaciones.

var numero1=7
var numero2=12
var operacion=numero1*numero2

//hay operadores como + - * / y % (que indica el resto de la division).

alert("El resultado de la operación es: "+operacion)

//Tipos de datos

//son el entero, el string o cadena de texto, la coma flotante o decimal, el buleano (true o false), el array y los objetos.

var numero_entero=44
var cadena_texto="Hola 'que' tal"
//para el texto se pueden usar "" o '', pero las "" tienen más prioridad.
var verdadero_o_falso=true
//puede ser true y false, o 1 y 0.

var numero_falso="33" //es un string por las "".
console.log(numero_falso+7)

//hay funciones que convierten el dato en otro tipo de dato.
console.log(Number(numero_falso)+7) // convierte a cualquier número.
console.log(parseInt(numero_falso)+8) // convierte a número entero.
console.log (parseFloat(numero_falso)+9) // convierte a número decimal.

console.log(numero_entero+7)
console.log(String(numero_entero)+7) // convierte el número en un string.
console.log(numero_entero.toString())// ||

//typeof mustra el tipo de dato de la variable.
console.log(typeof numero_entero)
console.log(typeof cadena_texto)
console.log(typeof verdadero_o_falso)
console.log(typeof numero_falso)
