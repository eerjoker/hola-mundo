// Interface - controla qué propiedades y métodos obligatorios tendrán las clases indicadas
interface CamisetaBase{
	setColor(color);
	getColor()
}

//Decorador - es un patrón de diseño que hace una copia de una clase para luego modificarla y darle acciones
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de: "+logo)
		} //estampacion es un método que le quedará a la clase
	}
}

// Clase (molde del objeto) - debe llamarse igual que el fichero, usando Mayus o camelCase

//export Camiseta{ // puedo exportar esta clase a otro archivo
@estampar('Gucci Gang') //el decorador nunca se cierra con ; porque se aplica a la clase siguiente
class Camiseta implements CamisetaBase{

	// Propiedades (características del objeto) - se aclara la visibilidad antes (public, protected o private)
	
	/*
	public permite acceder desde cualquier lugar
	protected permite acceder desde la clase que los define y desde las clases que las heredan (subclases)
	private solo permite acceder desde la clase que los define
	*/
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	// Métodos (funciones o acciones del objeto) - el primer método que se ejecuta es el constructor
	// el constructor se usa para dar un valor inicial a la clase, no devuelve ningún dato
	constructor(color, modelo, marca, talla, precio){
		this.color = color
		this.modelo = modelo
		this.marca = marca
		this.talla = talla
		this.precio = precio
	}


	// puedo acceder a las propiedades privadas con un método
	public setColor(color){
		this.color = color
	}

	public getColor(){
		return this.color
	}

}

// Clase hija - hereda las propiedades y métodos
class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha
	}

	getCapucha():boolean{
		return this.capucha
	}
} 

//var camiseta = new Camiseta("rojo", "manga larga", "nike", "l", 14)
//camiseta.setColor("Rojo")

/*
camiseta.color = "Rojo"
camiseta.modelo = "Manga Larga"
camiseta.marca = "Nike"
camiseta.talla = "L"
camiseta.precio = 10
*/
// ya no puedo acceder a las propiedades porque son privadas
/*
var playera = new Camiseta()
playera.setColor("Azul")

playera.color = "Azul"
playera.modelo = "Manga Corta"
playera.marca = "Adidas"
playera.talla = "L"
playera.precio = 15
*/

//console.log(camiseta.getColor(), playera)

var camiseta = new Camiseta("fdas", "dasd", "fasd", "fasw", 12)
console.log(camiseta)

var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike","L", 30)
sudadera_nike.setCapucha(true)
sudadera_nike.setColor("Gris")
console.log(sudadera_nike)