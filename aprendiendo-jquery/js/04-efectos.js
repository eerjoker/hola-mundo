$(document).ready(function(){

	var caja = $("#caja")
	var mostrar = $("#mostrar")
	var ocultar = $("#ocultar")
	var todoenuno = $("#todoenuno")
	var animar = $("#animar")

	mostrar.hide()

	mostrar.click(function(){
		$(this).hide()
		ocultar.show()
		//caja.show('normal')
		//caja.fadeIn('fast')
		//caja.fadeTo('slow', 0.8)
		caja.slideDown('slow')
	})

	ocultar.click(function(){
		$(this).hide('slow')
		mostrar.show('slow')
		//caja.hide('fast') // puedo configurar la velocidad del efecto, lo escala a tamaño cada vez menor hasta un display none.
		//caja.fadeOut('fast') // lo desvanece quedando en el mismo tamaño hasta el display none
		//caja.fadeTo('slow', 0.2) // lo desvanece hasta la opacidad indicada (0 es none y 1 es normal)
		caja.slideUp('slow', function(){
			console.log("Cartel ocultado") // esto hace un callback recién cuando termina la animación
		})
	})

	// Con un toggle, un botón cumple ambas funciones
	todoenuno.click(function(){
		//caja.toggle('fast')
		//caja.fadeToggle('fast')
		caja.slideToggle('fast')
	})

	// Animaciones

	animar.click(function(){
		// se indica la animación de css en un JSON
		caja.animate({
						marginLeft: '500px', // la propiedad left es para elementos de posición absoluta
						fontSize: '40px',
						height: '110px'
					}, 'slow')
			.animate({
						borderRadius: '900px',
						marginTop: '80px'
					}, 'slow')
			.animate({
						borderRadius: '0px',
						marginLeft: '0px'	
					}, 'slow')
			.animate({
						borderRadius: '100px',
						marginTop: '0px'
					}, 'slow')
			.animate({
						marginLeft: '500px',
						fontSize: '40px',
						height: '110px'
					}, 'slow')
	})

})