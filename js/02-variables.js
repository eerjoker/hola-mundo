// VARIABLES
// contienen información. la variable se define con var

var pais="España";
var continente="Europa";
var antiguedad="2019";
var pais_y_continente=pais+" "+continente;

alert("hola");

// para cambiar la variable no hay que volver a escribir var, sino la variable directo.
pais="Argentina";
continente="Latinoamérica";
//var pais_y_continente=pais+" "+continente
//eso es para actualizar la variable

console.log(pais, continente, antiguedad);
alert(pais_y_continente) //va a tomar las definicion de españa y europa porque se definieron antes que se cambie cada var.
