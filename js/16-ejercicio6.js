'use strict'

/*
Programa que nos diga si un número es par o impar:
1. Ventana prompt
2. Si no es válido, que nos pida de nuevo el número
*/

var number=parseInt(prompt("Introduce un número", 0))

while(isNaN(number)){
	alert("El número no es válido")
	number=parseInt(prompt("Introduce un número", 0))
}

if (number%2 == 0) {
	alert ("El número "+number+" es par")
}else if (number%2 != 0){
	alert ("El número "+number+" es impar")
}