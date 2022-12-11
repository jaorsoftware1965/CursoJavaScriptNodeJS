// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJs
// 08_operador_condicional.js
// ? :
// resultado = Condicion ? ResultadoSiVerdadero : ResultadoSiFalso
// resultado = Condicion ? EjecutarSiVerdaero   : EjecutarSiFalso
// ----------------------------------------------------------------------

// Mensaje
console.log('08 Operador Condicional');

// Variables
var a = 10;
var b = 20;

console.log("Valor de a:",a)
console.log("Valor de b:",b)
console.log()

console.log ("((a > b) ? 100 : 200) => ");
result = (a > b) ? 100 : 200;
console.log(result);
console.log()

console.log ("((a < b) ? 100 : 200) => ");
result = (a < b) ? 100 : 200;
console.log(result);

result = -10 ? console.log("Verdadero") : console.log("Falso");
console.log(result);
console.log()

