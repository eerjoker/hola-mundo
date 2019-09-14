$(document).ready(function(){

	// MouseOver y MouseOut
	var caja = $("#caja");

	function cambiaRojo(){
		$(this).css("background", "red");
	}
	
	function cambiaVerde(){
		$(this).css("background", "green");
	}
	/*
	caja.mouseover(function(){
		$(this).css("background", "red");
	})
	caja.mouseout(function(){
		$(this).css("background", "green");
	})
	*/

	// Hover - es lo mismo que un mouseover con un mouseout
	caja.hover(cambiaRojo, cambiaVerde);

	// Click, Doble-click
	caja.click(function(){
		$(this).css("background", "blue")
			   .css("color", "white");
	})

	caja.dblclick(function(){
		$(this).css("background", "pink")
			   .css("color", "yellow");
	})

	// Focus y blur
	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function(){
		$(this).css("border", "2px solid green");
	})

	nombre.blur(function(){
		$(this).css("border", "1px solid #ccc");
		datos.text($(this).val()).show() // hay métodos hide() y show() para los elementos del html
		// .val obtiene la información del elemento
	})

	// Mousedown y mouseup - para cuando se presiona y se suelta el click
	datos.mousedown(function(){
		$(this).css("border-color", "gray");
	})

	datos.mouseup(function(){
		$(this).css("border-color", "black");
	})

	// Mousemove - captura todos los movimientos del raton
	$(document).mousemove(function(){
		/*
		console.log("En X: "+event.clientX);
		console.log("En Y: "+event.clientY);
		*/
		// así muestro las coordenadas del mouse
		$('body').css("cursor", "none")
		$("#sigueme").css("left", event.clientX)
					 .css("top", event.clientY)
	})
})