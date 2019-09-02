'use strict'

// Transformación de textos

var numero=444;
var texto1=" Bienvenido al curso Curso de JavaScript    "
var texto2="es muy buen curso"

/*
var dato = numero.toString() //es una función que recibe como parámetro lo primero.

dato=texto1.toLowerCase() //convierte a minúsculas.
dato=texto2.toUpperCase() //convierte a mayúsculas.

//console.log(dato)

// Calcular longitud de texto
var nombre="Esteban  "
var nombre=["hoa", "hola"]

//console.log(nombre.length) //no puede medir número
//sirve para ver si la variable existe y tiene texto. Cuenta también la cantidad de elementos en un array.

// Concatenar - Unir textos
//var textoTotal = texto1+", "+texto2
var textoTotal = texto1.concat("; "+texto2)//hace lo mismo

console.log(textoTotal)
*/

// Métodos de búsqueda
/*
var busqueda = texto1.indexOf("curso")
// muestra el n° de carácter donde se encuentra la primer coincidencia de la búsqueda.

busqueda = texto1.search("curso")
//hace lo mismo que .indexOf()

busqueda = texto1.lastIndexOf("curso")
// muestra el n° de carácter de la última coincidencia.

busqueda = texto1.match(/curso/gi)
// devuelve en un array los resultados que encuentra, el carácter donde empieza la palabra y el texto donde la busca.
// busca la primer coincidencia si la palabra está entre "".
// si la palabra tiene /palabra/gi devuelve todas las coincidencias del texto.

busqueda = texto1.substr(15,5)
// extrae un texto a partir del carácter 15, hasta 5 caracteres en adelante.

busqueda = texto1.charAt(30)
// extrae solo el carácter indicado.

busqueda = texto1.startsWith("Bien")
// da true o false dependiendo si el texto empieza con lo indicado.

busqueda = texto1.endsWith("Script")
// da true o false dependiendo si el texto termina con lo indicado.

busqueda = texto1.includes("de")
// da true o false dependiendo si lo indicado existe en el texto.

// son case sensitives, tiene que ser la palabra exacta.
console.log(busqueda)
*/

// Reemplazar texto

var reemplazo = texto1.replace("JavaScript", "Symfony")
// reemplaza el primer texto indicado por el segundo

reemplazo = texto1.slice(14, 35)
// separa el string y deja a partir del primer carácter hasta el segundo (si se indica)

reemplazo = texto1.split(" ")
// recorta las palabras y las pone en un array. Separa según el caracter indicado.

reemplazo = texto1.trim()
//recorta los espacios al principio y al final del texto.

console.log (reemplazo)