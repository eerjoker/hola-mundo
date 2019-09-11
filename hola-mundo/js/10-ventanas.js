"use strict"

// ALERTA
/*alert("Esta es mi alerta!")
alert("Este es mi texto!")*/

// CONFIRMACIÓN (lo metemos en una variable para poder mostrar el resultado en la consola)
var mi_resultado = confirm("¿Estás seguro de querer continuar?")
console.log(mi_resultado) //la variable mostrará si el usuario acepta o no (true o false)

//INGRESO DATOS
var mi_resultado = prompt("¿Qué edad tienes?" , 18/*valor por defecto*/)
console.log(mi_resultado) //va a mostrar lo ingresado como un string, podemos modificarlo con el convertidor de datos Number.