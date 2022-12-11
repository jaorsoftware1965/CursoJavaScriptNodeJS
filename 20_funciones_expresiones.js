// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 20_funciones_expresiones.js
// ----------------------------------------------------------------------

// Es posible definir expresiones como si fueran una constate; llamadas
// en diversos lenguajes como "inline"

// Mensaje
console.log('20 Funciones expresiones');

// Definiiendo la función cuadrado
const cuadrado = function(numero) { return numero * numero }

// Definiendo el factorial
const factorial = function fac(numero) { return (numero==0 || numero==1) ? 1 : numero * fac(numero - 1),console.log("Resultado:",numero) }


// llamando a la funcion cuadrado
console.log("Cuadrado de 4:",cuadrado(4))

// llamando a la función factorial
console.log("Factorial de 5:",factorial(5))