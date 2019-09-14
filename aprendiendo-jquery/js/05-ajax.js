$(document).ready(function(){

	var datos = $("#datos")

	// Load - petición ajax y trae resultado
	//datos.load("https://reqres.in/")

	// Get - hace petición a la url, indicando en un json la sección y como tercer parámetro tiene el callback
	$.get("https://reqres.in/api/users", {page: 2}, function(response){
		console.log(response)

		response.data.forEach((element, index) => {
			datos.append("<p>"+element.first_name+" "+element.last_name+"</p>")
		})
	})

	// Post - crea un nuevo usuario en la url remota y lo trae de vuelta
	
	$("#formulario").submit(function(e){
		e.preventDefault(); // así evito que me redirija a la página que tiene configurada el formulario
		var usuario = {
			name: $('input[name="name"]').val(),
			web: $('input[name="web"]').val()
		}
		console.log(usuario)
		/*
		$.post($(this).attr("action"), usuario, function(response){
			console.log(response)
		}).done(function(){
			alert("Usuario añadido correctamente")
		})
		*/
		//return false // con esto también evito que se redirija a la web del form
	
		// Con $.ajax puedo manipular las peticiones que quiera hacer. Es un json donde se indica tipo de petición, la url, los datos a enviar o recibir, el tipo de datos, el formato de los datos.
		// puede hacer varias acciones como beforeSend
	
		$.ajax({
			type: 'POST',
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("Enviando usuario...")
			},
			success: function(response){
				console.log(response)
			},
			error: function(){
				console.log("Ha ocurrido un error")
			},
			timeout: 10000, // indico cuantos segundos quiero que tarde en realizarse la petición
			//dataType: 'json',
			//contentType: 'application/json'
		})
	})
})