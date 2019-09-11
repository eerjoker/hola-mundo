'use strict'

/*
Calculadora:
- Pida dos números por pantalla
- Si metemos uno mal, que nos los vuelva a pedir
- En el body de la página, en una alerta y por la consola nos muestre el resultado
 de sumar, restar, multiplicar y dividir esas dos cifras.
*/

var numero1 = parseInt(prompt("Introduzca el primer número",0))
var numero2 = parseInt(prompt("Introduzca el segundo número",0))

while (numero1<0 || numero2<0 || isNaN(numero1)||isNaN(numero2)){
	alert("El número no es válido")
	numero1 = parseInt(prompt("Introduzca el primer número",0))
	numero2 = parseInt(prompt("Introduzca el segundo número",0))
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
				"La resta es: "+(numero1-numero2)+" <br/>"+
				"La multiplicación es: "+(numero1*numero2)+" <br/>"+
				"La división es: "+(numero1/numero2)+" <br/>";

// \n es para salto de línea en otros lenguajes de programación que no sean html.

var resultadoCMD = "La suma es: "+(numero1+numero2)+" \n"+
				"La resta es: "+(numero1-numero2)+" \n"+
				"La multiplicación es: "+(numero1*numero2)+" \n"+
				"La división es: "+(numero1/numero2)+" \n";

document.write(resultado)
console.log(resultadoCMD)
alert(resultadoCMD)		

/*YO HICE:

document.write(numero1+" + "+numero2+" = "+ (numero1+numero2)+"<br/>"+
	numero1+" - "+numero2+" = "+ (numero1-numero2)+"<br/>"+
	numero1+" x "+numero2+" = "+ (numero1*numero2)+"<br/>"+
	numero1+" / "+numero2+" = "+ (numero1/numero2)+"<br/>")

console.log(numero1+" + "+numero2+" = "+ (numero1+numero2))
console.log(numero1+" - "+numero2+" = "+ (numero1-numero2))
console.log(numero1+" x "+numero2+" = "+ (numero1*numero2))
console.log(numero1+" / "+numero2+" = "+ (numero1/numero2))

alert(numero1+" + "+numero2+" = "+ (numero1+numero2))
alert(numero1+" - "+numero2+" = "+ (numero1-numero2))
alert(numero1+" x "+numero2+" = "+ (numero1*numero2))
alert(numero1+" / "+numero2+" = "+ (numero1/numero2))
*/
