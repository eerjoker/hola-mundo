$(document).ready(function(){

	reloadLinks()

	//console.log($('a').length)
	$('#add_button')
		.removeAttr('disabled') // así remuevo atributos
		.click(function(){
			//$('#menu').html('<li><a href="'+$("#add_link").val()+'"></a></li>') // con .html puedo agregar html a una lista, pero así borro lo anterior
			//$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>') // con append agrego después a lo que ya había
			$('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>') // .prepend añade antes de la lista
			//$('#menu').before('<li><a href="'+$("#add_link").val()+'"></a></li>') // .before añade antes y fuera de la lista que tengo
			//$('#menu').after('<li><a href="'+$("#add_link").val()+'"></a></li>') // .after lo pone después y fuera de lo que tenía
			$("#add_link").val('') // así vacío el input luego de agregar el valor
			reloadLinks()
		})
})

function reloadLinks(){
	// .each recorre cada elemento seleccionado
	$('a').each(function(index){
		var that = $(this)
		var enlace = that.attr("href") // .attr selecciona el atributo
		that.attr('target','_blank') // así agrego atributos al link
		that.text(enlace) // .text agrega lo seleccionado como texto
	})
}