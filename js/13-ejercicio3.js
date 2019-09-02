'use strict'

/*
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.
*/

var numero1=parseInt(prompt("Introduce el primer número", 0))
var numero2=parseInt(prompt("Introduce el segundo número", 0))

while (numero1==numero2){
	alert("Introduzca dos números diferentes")
	numero1=parseInt(prompt("Introduce el primer número", 0))
	numero2=parseInt(prompt("Introduce el segundo número", 0))
}

while (isNaN(numero1) || isNaN(numero2)){
	alert("Introduzca dos números válidos")
	numero1=parseInt(prompt("Introduce el primer número", 0))
	numero2=parseInt(prompt("Introduce el segundo número", 0))
}

console.log(numero1)
console.log(numero2)

// document.write sirve para escribir texto en el body.

if (numero1>numero2) {
	document.write("<h1>Del "+numero2+" al "+numero1+" están estos números:</h1>")
}else if (numero2>numero1) {
	document.write("<h1>Del "+numero1+" al "+numero2+" están estos números:</h1>")
}

for (var i = numero2; i <= numero1; i++){
	document.write(i+"<br/>")
	//o
	//document.write(i+"; ")
}

for (i = numero1; i <= numero2; i++){
	document.write(i+"<br/>")
	//o
	//document.write(i+"; ")
}