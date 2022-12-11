// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 18_sentencia_return.js
// Retorna valores
// ----------------------------------------------------------------------

// Mensaje
console.log('18 La sentencia return en Funciones');

// Concatena
function concatena(cadena1, cadena2) 
{
    // Variable para el resultado
    var resultado;

    // Ejecuta la Suma
    resultado = cadena1 + "-"+cadena2;

    // Retorno
    return resultado;
}

// Declara una función
function suma(numero1,numero2) 
{
    // Ejecuta la operación y retorna el resultado
    return numero1 + numero2;
}

// Llama a una función que retorna un valor
var resultado = suma(5,6);
console.log(concatena("Jaor","Software"))
console.log("La suma de 5 + 6 =",suma(5,6));
console.log("La suma de 5 + 6 =",resultado);
console.log("La suma de 5 + 6 =",suma(6,5));
console.log("Nombre Completo:",concatena("JAOR","software"))
console.log("Nombre Completo:",concatena(8,"JAOR"))
console.log(suma(7,"SOFTWARE"))
console.log(suma("SOFTWARE",8))