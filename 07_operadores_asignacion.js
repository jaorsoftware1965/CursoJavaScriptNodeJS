// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 07_operadores_asignacion.js
// Los operadores de asignación:
// =, +=, -=, *=, /=, %=
// ----------------------------------------------------------------------
// Ejemplos
// a = a + 5  es igual  a += 5
// a = a - 5  es igual  a -= 5
// a = a * 5  es igual  a *= 5
// a = a / 5  es igual  a /= 5
// a = a % 5  es igual  a %= 5

// Mensaje
console.log('07 Operadores de Asignación');

// Variables
var a = 33;
var b = 10;

console.log("Valor de a:",a)
console.log("Valor de a:",b)

console.log("Valor de: a += b => ");
a += b;
console.log(a);

console.log("Valor de: a -= b => ");
a -= b;
console.log(a);

console.log("Valor de: a *= b => ");
a *= b;
console.log(a);

console.log("Valor de: a /= b => ");
a /= b;
console.log(a);

console.log("Valor de: a %= b => ");
a %= b;
console.log(a);