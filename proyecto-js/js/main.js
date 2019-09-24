$(document).ready(function(){
	
	// Slider - usando el bxSlider cargado
	if(window.location.href.indexOf('index')>-1){
		$('.galeria').bxSlider({
			mode: 'fade',
			captions: false,
			slideWidth: 1200,
			responsive: true,
			//pager: false
		})
	}

	// Posts
	if(window.location.href.indexOf('index')>-1){
		var posts = [
			{
				title: 'Prueba de titulo 1',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"), // usa el momentjs cargado
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor maximus ex sed suscipit. Praesent lacinia massa metus, a efficitur magna pellentesque eu. In in gravida elit. Suspendisse eleifend posuere nulla in suscipit. Suspendisse lacus eros, blandit at urna quis, varius maximus diam. Maecenas dignissim nulla nec accumsan dignissim. Sed diam ligula, facilisis eget mi vitae, auctor ultrices odio. Donec iaculis consequat leo dictum facilisis. Nunc sit amet odio accumsan leo eleifend interdum. Fusce dignissim sollicitudin imperdiet. Nullam vitae tortor nec dui mollis vestibulum a a mauris. Nullam laoreet venenatis sollicitudin. Cras sodales magna non nunc rutrum accumsan.'
			},
			{
				title: 'Prueba de titulo 2',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor maximus ex sed suscipit. Praesent lacinia massa metus, a efficitur magna pellentesque eu. In in gravida elit. Suspendisse eleifend posuere nulla in suscipit. Suspendisse lacus eros, blandit at urna quis, varius maximus diam. Maecenas dignissim nulla nec accumsan dignissim. Sed diam ligula, facilisis eget mi vitae, auctor ultrices odio. Donec iaculis consequat leo dictum facilisis. Nunc sit amet odio accumsan leo eleifend interdum. Fusce dignissim sollicitudin imperdiet. Nullam vitae tortor nec dui mollis vestibulum a a mauris. Nullam laoreet venenatis sollicitudin. Cras sodales magna non nunc rutrum accumsan.'
			},
			{
				title: 'Prueba de titulo 3',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor maximus ex sed suscipit. Praesent lacinia massa metus, a efficitur magna pellentesque eu. In in gravida elit. Suspendisse eleifend posuere nulla in suscipit. Suspendisse lacus eros, blandit at urna quis, varius maximus diam. Maecenas dignissim nulla nec accumsan dignissim. Sed diam ligula, facilisis eget mi vitae, auctor ultrices odio. Donec iaculis consequat leo dictum facilisis. Nunc sit amet odio accumsan leo eleifend interdum. Fusce dignissim sollicitudin imperdiet. Nullam vitae tortor nec dui mollis vestibulum a a mauris. Nullam laoreet venenatis sollicitudin. Cras sodales magna non nunc rutrum accumsan.'
			},
			{
				title: 'Prueba de titulo 4',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor maximus ex sed suscipit. Praesent lacinia massa metus, a efficitur magna pellentesque eu. In in gravida elit. Suspendisse eleifend posuere nulla in suscipit. Suspendisse lacus eros, blandit at urna quis, varius maximus diam. Maecenas dignissim nulla nec accumsan dignissim. Sed diam ligula, facilisis eget mi vitae, auctor ultrices odio. Donec iaculis consequat leo dictum facilisis. Nunc sit amet odio accumsan leo eleifend interdum. Fusce dignissim sollicitudin imperdiet. Nullam vitae tortor nec dui mollis vestibulum a a mauris. Nullam laoreet venenatis sollicitudin. Cras sodales magna non nunc rutrum accumsan.'
			},
			{
				title: 'Prueba de titulo 5',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor maximus ex sed suscipit. Praesent lacinia massa metus, a efficitur magna pellentesque eu. In in gravida elit. Suspendisse eleifend posuere nulla in suscipit. Suspendisse lacus eros, blandit at urna quis, varius maximus diam. Maecenas dignissim nulla nec accumsan dignissim. Sed diam ligula, facilisis eget mi vitae, auctor ultrices odio. Donec iaculis consequat leo dictum facilisis. Nunc sit amet odio accumsan leo eleifend interdum. Fusce dignissim sollicitudin imperdiet. Nullam vitae tortor nec dui mollis vestibulum a a mauris. Nullam laoreet venenatis sollicitudin. Cras sodales magna non nunc rutrum accumsan.'
			},
			{
				title: 'Prueba de titulo 6',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor maximus ex sed suscipit. Praesent lacinia massa metus, a efficitur magna pellentesque eu. In in gravida elit. Suspendisse eleifend posuere nulla in suscipit. Suspendisse lacus eros, blandit at urna quis, varius maximus diam. Maecenas dignissim nulla nec accumsan dignissim. Sed diam ligula, facilisis eget mi vitae, auctor ultrices odio. Donec iaculis consequat leo dictum facilisis. Nunc sit amet odio accumsan leo eleifend interdum. Fusce dignissim sollicitudin imperdiet. Nullam vitae tortor nec dui mollis vestibulum a a mauris. Nullam laoreet venenatis sollicitudin. Cras sodales magna non nunc rutrum accumsan.'
			},
		]
		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;
			
			$("#posts").append(post)
		})
	}	
	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css")
		localStorage.setItem("theme", "css/green.css")
	})

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css")
		localStorage.setItem("theme", "css/red.css")
	})

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css")
		localStorage.setItem("theme", "css/blue.css")
	})

	var theme_storage = localStorage.getItem("theme") 
	theme.attr("href", theme_storage)
	if(theme_storage == null){
		theme.attr("href", "css/green.css")
	}

	// Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault() //para evitar que el link haga su función default de redirigir

		$('html, body').animate({
			scrollTop: 0 //sube hasta el pixel cero
		}, 500)

		return false
	})

	// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val()

		localStorage.setItem("form_name", form_name)
	})
	var form_name = localStorage.getItem("form_name")

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p")
		about_parrafo.html("<br><strong>Bienvenido, "+form_name+". </strong>")
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>")

		$("#login").hide()

		$("#logout").click(function(){
			localStorage.clear()
			location.reload() //para recargar la pantalla
		})
	}

	// Acordeón
	if(window.location.href.indexOf('about')>-1){
		$("#acordeon").accordion()
	}

	// Reloj
	if(window.location.href.indexOf('reloj')>-1){
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss")
			$("#reloj").html(reloj)	
		}, 1000)
	}

	// Validación

	if(window.location.href.indexOf('contact')>-1){
		
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		})

		$.validate({
    		lang: 'es',
    		errorMessagePosition: 'top',
    		scrollToTopOnError: true
  		});
	}
})