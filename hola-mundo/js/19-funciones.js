'use strict'

//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones.
//Ejemplos son console.log, alert y prompt.

//Las funciones tienen parámetros entre () que alteran la lógica.
//Además hay parámetros opcionales que tienen valores por defecto.

function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicación: " + (numero1*numero2));
	console.log("División: " + (numero1/numero2));
	console.log("**********************************");	
}

function porPantalla(numero1, numero2){
	document.write("Suma: " + (numero1+numero2)+"<br/>");
	document.write("Resta: " + (numero1-numero2)+"<br/>");
	document.write("Multiplicación: " + (numero1*numero2)+"<br/>");
	document.write("División: " + (numero1/numero2)+"<br/>");
	document.write("**********************************"+"<br/>");
	}

function calculadora(numero1, numero2, mostrar = false/* mostrar actúa como flag*/){
	if (mostrar == false){
		porConsola(numero1, numero2)
	}else{
		porPantalla(numero1, numero2)
	}

	return true
}

//Con return "" dentro de la función, devuelve un texto en un console.log o cuando se la invoca en la consola.

calculadora(1, 4)
calculadora(2, 5, true)

/*var resultado = calculadora()

console.log(resultado)*/
/*
for(var i = 1; i <= 10; i++){
	console.log(i)
	calculadora(i, 8)
}*/