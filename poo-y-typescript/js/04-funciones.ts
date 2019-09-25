// Funciones - puedo indicar tipos de datos de parámetro y de la devolución, y el valor por defecto del parámetro
function getNumero(numero:number = 12):string{
	return "El número es: "+numero
}

console.log(getNumero(55))