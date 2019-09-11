'use strict'

window.addEventListener('load', () => {
	
	// Timers

	function intervalo(){
		var tiempo = setInterval(function(){
			console.log("Set interval ejecutado")
			
			var encabezado = document.querySelector("h1")
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "30px"
			}else{
				encabezado.style.fontSize = "50px"
			}
		}, 500)
		// setInterval(x, t) ejecuta x cada t milisegundos.
		
		/*
		var tiempo = setTimeout(function(){
			console.log("Set timeout ejecutado")
			
			var encabezado = document.querySelector("h1")
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "30px"
			}else{
				encabezado.style.fontSize = "50px"
			}
		}, 5000)
		// setTimeout(x, t) ejecuta x solo una vez, a los t milisegundos.
		*/

		return tiempo
	}

	var tiempo = intervalo()

	var stop = document.querySelector("#stop")

	stop.addEventListener('click', function(){
		alert("Has parado el intervalo en bucle")
		clearInterval(tiempo)
	}) // El clearInterval frena el setInterval

	var start = document.querySelector("#start")
	
	start.addEventListener('click', function(){
		alert("Has iniciado el intervalo en bucle")
		intervalo() // así llamo nuevamente al intervalo
	})

})