"use strict"

// Bucle while: primero comprueba una condición y después ejecuta un bloque de código.

var year=2018;

//while tiene una (condición) y lo que se ejecuta. Es menos estricto que el Bucle for.

while(year<=2051){
	console.log("Estamos en el año: "+year)

	year++ //sin poner esto, indicaría infinitamente que es el 2018.
}

year--
year--

while(year!=1991){
	console.log("Retrocedimos al año: "+year)

	if (year==2000) {
		break //corta la ejecución del bucle, entonces llega a 2000 en vez de a 1992.
	}

	year-- //decrementador
}

// Do while: primero ejecuta un bloque de código y después comprueba la condición para seguir.

var years=28

do{
	alert("ES DIFERENTE A 20")
	years--
}while(years>25) //si no se cumple la condición, solo muestra el alert una vez.