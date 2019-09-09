'use strict'

// Localstorage - podemos guardar información que persiste a modo de sesión

// Comprobardisponibilidad del localstorage según versión del navegador

if(typeof(Storage) !== 'undefined'){
	console.log("Localstorage disponible")
}else{
	console.log("Incompatible con Localstorage")
}

// Guardar datos, se aclara la clave y luego el valor
localStorage.setItem("titulo", "Curso de Symfony");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo")

// Guardar objetos - es necesario convertir los datos en string
var usuario = {
	nombre: "Esteban Rivera",
	email: "esteban@hotmail.com",
	web: "google.com"
}

localStorage.setItem("usuario", JSON.stringify(usuario))
// con JSON.stringify podemos convertir un objeto json a string

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"))

console.log(userjs)
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre)

// Borrar un objeto, borrar todo
localStorage.removeItem("usuario")
localStorage.clear()