'use strict'

// Arrays Multidimensionales

var categorias = ['Acción', 'Terror', 'Comedia']
var peliculas = ['La Verdad Duele', 'La Vida Es Bella', 'Gran Torino']

var cine = [categorias, peliculas]

//es un array con otros dos arrays dentro
/*
console.log(cine)

console.log(cine[0][1]) //para acceder a un elemento de uno de los arrays.
console.log(cine[1][2])
*/

// Añadir y quitar elementos del array

peliculas.push("Batman")

var elemento = ""

do{
	elemento=prompt("Introduce tu pelicula")
	peliculas.push(elemento)
}while(elemento != "ACABAR")

// Para sacar el último elemento:
peliculas.pop()

console.log(peliculas)

// también se puede reemplazar un elemento en particular
// peliculas[0]=undefined

var indice = peliculas.indexOf('Gran Torino')
if(indice>-1){
	peliculas.splice(indice, 2)//elimina, desde el elemento indicado, la cantidad de elementos que se señala.
}

// Convertir array a texto

var peliculas_string = peliculas.join()

console.log(peliculas_string)

// Convertir texto en array

var cadena = "texto1, texto2, texto3"
var cadena_array = cadena.split(", ")

console.log(cadena_array)

// Ordenar un array

//peliculas.sort() //lo ordena por defecto según orden alfabético.

peliculas.reverse()//lo pone en el orden inverso al que tenía.
console.log(peliculas)