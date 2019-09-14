$(document).ready(function(){

	var elemento = $('.elemento')

	// Mover elemento por la página
	elemento.draggable()

	// Redimensionar elementos
	elemento.resizable()

	// Seleccionar y ordenar elementos
	//$(".lista-seleccionable").selectable() // usa los estilos elegidos en el html
	$(".lista-seleccionable").sortable({
		update: function(event, ui){
			console.log("ha cambiado la lista")
		}
		// se puede poner dentro de un json el update para cada vez que se hace un cambio de orden 
	})

	// Drop
	$("#elemento-movido").draggable()
	$("#area").droppable({
		drop: function(){
			console.log("Has soltado algo dentro del área")
		}
	})

	// Efectos - se pueden usar con .effect (solo hace el efecto) o .toggle (hace el efecto y la inversa al presionar otra vez)
	$("#mostrar").click(function(){
		//$(".caja-efectos").toggle("explode")
		//$(".caja-efectos").toggle("blind")
		//$(".caja-efectos").toggle("slide")
		//$(".caja-efectos").toggle("drop")
		//$(".caja-efectos").toggle("fold")
		//$(".caja-efectos").toggle("puff")
		$(".caja-efectos").toggle("scale", "slow")
		$(".caja-efectos").effect("shake", 4000) // se puede indicar en json los cambios en propiedades, y la velocidad o tiempo que tarda en hacer el efecto
	})

	// Tooltip - es un pop-up que aparece al pasar por encima de un elemento
	$(document).tooltip() // indico que muestre el title al pasar por encima de los elementos
	// Para varios efectos en los tooltips ir a https://iamceege.github.io/tooltipster/

	// Dialog
	$("#lanzar-popup").click(function(){
		$("#popup").dialog()
	})
	
	// Datepicker
	$("#calendario").datepicker()

	// Tabs
	$("#pestanas").tabs()

})