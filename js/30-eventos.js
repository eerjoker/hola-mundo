'use strict'

// Eventos del ratón

// un evento es una función que se ejecuta cuando sucede algo.

// todo lo metemos dentro del evento load para cargarlo luego de tener los elementos del dom.

window.addEventListener('load', () => {
	
	function cambiarColor (){
		console.log ("Me has dado click")
		var bg = boton.style.background
		if(bg == "green"){
			boton.style.background = "red"
		}else{
			boton.style.background = "green"
		}
		boton.style.padding = "10px"
		boton.style.boder = "1 px solid #ccc"
		return true
	}

	var boton = document.querySelector("#boton")
	// en vez de poner el evento en html, queda más limpio dentro de javascript

	// Click
	boton.addEventListener('click', function(){
		cambiarColor()
	})

	// Doble Click
	/*
	boton.addEventListener('dblclick', function(){
		cambiarColor()
	})
	*/

	// Mouse over, cuando pasa el mouse por encima
	boton.addEventListener('mouseover', function(){
		boton.style.background = "yellow"
	})

	// Mouse out, cuando el mouse sale de encima
	boton.addEventListener('mouseout', function(){
		boton.style.background = "#ccc"
	})

	// Focus, cuando uno se mete dentro del input
	var input = document.querySelector("#campo_nombre")

	input.addEventListener('focus', function(){
		console.log("[focus] Estás dentro del input")
	})

	// Blur, cuando uno sale del input
	input.addEventListener('blur', function(){
		console.log("[blur] Estás fuera del input")
	})

	// Keydown
	input.addEventListener('keydown', function(event){
		console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode))
		// con keyCode me dice qué tecla uso, con fromCharCode convierto ese dato en string.
	})

	// Keypress
	input.addEventListener('keypress', function(event){
		console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode))
	})

	// Keyup
	input.addEventListener('keyup', function(event){
		console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode))
	})
}) // finaliza el load
