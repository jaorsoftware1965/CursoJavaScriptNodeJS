// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 09_operador_typeof
// typeof
// Devuelve el tipo de dato de una variable u objeto
// Valores posibles a devolver:
// Tipo         Retorna
// Number	    "number"
// String	    "string"
// Boolean	    "boolean"
// Object	    "object"
// Function	    "function"
// Undefined	"undefined"
// Null	        "object"
// ----------------------------------------------------------------------

// Mensaje
console.log('09 Operador typeof');

// Variables
var a = 10;
var b = "String";
var c = true;

console.log("typeof a => ",typeof a);
console.log("typeof b => ",typeof b);
console.log("typeof c => ",typeof c);
console.log("typeof console => ",typeof (console));
console.log("typeof console.log => ",typeof (console.log));

result = true ? console.log("Verdadero") : console.log("Falso");
console.log(result);
console.log("typeof result => ",typeof (result));
console.log("typeof null => ",typeof (null));
