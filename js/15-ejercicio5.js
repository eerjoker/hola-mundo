'use strict'

/*
Mostrar todos los números divisores de un número introducidos en prompt.
*/

var numero=parseInt(prompt("Introduce un número", 1))
var divisor=0

while (isNaN(numero) || numero==0){
	alert("Introduzca un número válido")
	numero=parseInt(prompt("Introduce un número", 1))
}

console.log(numero)

document.write("<h1>Los números divisores de "+numero+" son:</h1>")

if (numero>0) {
	/*LO QUE HICE YO:
		while (divisor<=numero){
			divisor++
			if (numero%divisor == 0){
			document.write(divisor+"<br/>")
		}*/
			
	for (var i=1; i<=numero; i++){
		if(numero%i == 0){
			document.write(i+"<br/>")
		}
		
	}
}else if(numero<0){
	let divisor=numero
	while (divisor<=numero*-1){
		if (numero%divisor == 0){
			document.write(divisor+"<br/>")
		}
		divisor++
	}
}