// Se puede hacer Programación Orientada a Objetos básica creando clases en Json
var bicicleta = {
	color: 'Rojo',
	modelo: 'BMX',
	frenos: 'De disco',
	velocidadMaxima: '60km',
	// las clases también pueden traer métodos 
	cambiaColor: function(nuevo_color){
		//bicicleta.color = nuevo_color
		this.color = nuevo_color
		console.log(this)
	},
}

bicicleta.cambiaColor("Azul")