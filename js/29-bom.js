'use strict'

// BOM - Browser Object Model

function getBom(){
	//console.log(window.innerWidth) // con window se selecciona la ventana del navegador
	//console.log(window.innerHeight)
	console.log(screen.width) // hace lo mismo, utiliza propiedades que ya tienen el cálculo del tamaño
	console.log(screen.height)
	console.log(window.location) // muestra todo el objeto de location
	console.log(window.location.href) // obtiene URL
}
function redirect (url){
	window.location.href = url // cuando se llame a la función, va a redirigir a la nueva URL
}

function abrirVentana(url){
	//window.open(url) // va a abrir una nueva pestaña
	window.open(url,"","width=400,height=300") // abre una ventana con altura y ancho indicados
}

getBom()
