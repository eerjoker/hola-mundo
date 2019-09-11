'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario.
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

while (numero1<numero2){
	numero1++

	if (numero1%2 != 0) {
		document.write("El "+numero1+" es impar.<br/>")
	}
}

/* HECHO POR MI:

if (numero1>numero2) {
	document.write("<h1>Del "+numero2+" al "+numero1+" están estos números impares:</h1>")
}else if (numero2>numero1) {
	document.write("<h1>Del "+numero1+" al "+numero2+" están estos números impares:</h1>")
}

for (var i = numero2; i <= numero1; i++){
	if (numero2/2!=parseInt(numero2/2)){
		document.write(i+"<br/>")
		i++
	}else{
		i++
		if (i<=numero1) {
			document.write(i+"<br/>")
		}
	}
}

for (i = numero1; i <= numero2; i++){
	if (numero1/2!=parseInt(numero1/2)){
		document.write(i+"<br/>")
		i++
	}else{
		i++
		if (i<=numero2) {
			document.write(i+"<br/>")
		}
	}
}*/