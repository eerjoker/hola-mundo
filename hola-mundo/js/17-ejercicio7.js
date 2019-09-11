'use strict'

/*
Tabla de multiplicar de un número introducido por pantalla.
*/

/*
var numero = parseInt(prompt("¿De qué número quieres la tabla?", 1))

while(isNaN(numero)){
	alert("El número no es válido")
	numero=parseInt(prompt("¿De qué número quieres la tabla?", 1))
}
console.log(numero)
document.write("<h1>Tabla de multiplicar del "+numero+"</h1>")
for(var i=1; i<=10; i++){
	document.write(i+" x "+numero+" = "+ i*numero + "<br/>")
} */

//Todas las tablas de multiplicar

for(var c=1; c<=10; c++){
	document.write("<h1>Tabla de multiplicar del "+c+" </h1><br/>")
	for(var i=1; i<=10; i++){
		document.write(i+" x "+c+" = "+ i*c + "<br/>")
	}
}