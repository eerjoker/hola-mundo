
var fecha = new Date()

var year = fecha.getFullYear()
//var year = fecha.getYear() // saca el año pero no sale completo
var mes = fecha.getMonth() // saca el mes empezando por 0
var dia = fecha.getDate() // getDay saca el día de la semana (0 es domingo)
var hora = fecha.getHours()
// getMinutes, getSeconds y getMiliseconds

var textoHora = `
	El año es: ${year}
	El mes es: ${mes+1}
	El día es: ${dia}
	La hora es: ${hora}
`
console.log(textoHora)

// Funciones matemáticas JS

console.log(Math.random()) // Saca número aleatorio
console.log(Math.ceil(Math.random()*1000)) // Lo multiplico para elegir cuantos digitos tiene, con Math.ceil lo hago entero

/* Para ver las funciones posibles
https://www.w3schools.com/JSREF/jsref_obj_math.asp
*/