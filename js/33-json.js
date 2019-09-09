'use strict'

// JSON - JavaScript Object Notation. Hace una especie de array asociativo

// Un objeto json se define con llaves indicando las propiedades que tiene.
var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados Unidos'
}

// Para cambiar una propiedad
pelicula.titulo = "Superman Begins"

var caja_peliculas = document.querySelector("#peliculas")
var peliculas = [
	{titulo: "La vedad duele", year: 2016, pais: "Francia"},
	pelicula
]

var index
for (index in peliculas) {
	var p = document.createElement("p")
	p.append(peliculas[index].titulo + " - " + peliculas[index].year)
	caja_peliculas.append(p)
}

console.log(pelicula)