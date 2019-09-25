var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador - es un patrón de diseño que hace una copia de una clase para luego modificarla y darle acciones
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        }; //estampacion es un método que le quedará a la clase
    };
}
// Clase (molde del objeto) - debe llamarse igual que el fichero, usando Mayus o camelCase
//export Camiseta{ // puedo exportar esta clase a otro archivo
var Camiseta = /** @class */ (function () {
    // Métodos (funciones o acciones del objeto) - el primer método que se ejecuta es el constructor
    // el constructor se usa para dar un valor inicial a la clase, no devuelve ningún dato
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // puedo acceder a las propiedades privadas con un método
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang') //el decorador nunca se cierra con ; porque se aplica a la clase siguiente
    ], Camiseta);
    return Camiseta;
}());
// Clase hija - hereda las propiedades y métodos
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
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
var camiseta = new Camiseta("fdas", "dasd", "fasd", "fasw", 12);
console.log(camiseta);
var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");
console.log(sudadera_nike);
