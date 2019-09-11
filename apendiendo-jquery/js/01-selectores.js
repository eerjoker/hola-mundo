// Utilizando jquery hay que comprobar que el documento esté listo con el evento ready.
// jQuery y $ son el mismo objeto, se puede usar cualquiera de las dos
// lo que se pone luego entre () es el selector para después utilizar cualquier método
$(document).ready(function(){

	// Selector de ID - "#id"
	$("#rojo").css("background","red") // con .css puedo modificar los valores css poniendo (clave, valor)
			  .css("color","white") // se puede encadenar a la llamada anterior
	
	$("#amarillo").css("background","yellow")
				  .css("color","green")

	$("#verde").css("background","green")
			   .css("color","white")

	// Selectores de clases - '.class'
	// a diferencia del id, la clase puede ser común a muchos elementos, mostrándolos en array
	var mi_clase = $('.zebra')
	//console.log(mi_clase.eq(1)) // con .eq puedo seleccionar un elemento de un array teniendo métodos de jQuery adjuntos
	mi_clase.css("padding", "5px")

	$('.sin_borde').click(function(){
		console.log("Click dado")
		$(this).addClass('zebra') // con this agarro lo que ya venía seleccionado
	})

	// Selectores de etiqueta
	var parrafos = $('p').css("cursor", "pointer") // para cambiar el cursor cuando se coloque sobre el párrafo

	parrafos.click(function(){
		var that = $(this)
		if(!that.hasClass('grande')){
			that.addClass('grande')
		}else{
			that.removeClass('grande')
		}
	})

	// Selectores de atributo - '[atributo="valor"]'
	$('[title="Google"]').css('background', '#ccc')
	$('[title="Facebook"]').css('background', 'blue')

	// Otros

	//$('p, a').addClass('margen-superior') // selecciona dos etiquetas

	//var busqueda = $("#caja").find(resaltado) // para encontrar elementos de html uso .find() (sirve también .resaltado en este caso)
	//var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]') //con .parent() me lleva un nivel por encima del elemento seleccionado
	var busqueda = $("#elemento2").parent().parent().find('.resaltado')
	console.log(busqueda)
})