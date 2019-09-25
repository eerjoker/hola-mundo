// Funciones - puedo indicar tipos de datos de parámetro y de la devolución, y el valor por defecto del parámetro
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El número es: " + numero;
}
console.log(getNumero(55));
