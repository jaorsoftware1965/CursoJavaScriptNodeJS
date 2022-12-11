// -------------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 54_parseInt_parseFloat.js -------------------------------------------------------------------------

// Mensaje
console.log("54 parseInt parseFloat")
console.log()

// Sintaxis
// parseInt(string, base);

// Conversiones a Entero
x = parseInt("10", 16);
console.log("a) x:",x)

x = parseInt("17", 8);
console.log("b) x:",x)

x = parseInt("15", 10);
console.log("c) x:",x)

x = parseInt(15.99, 10);
console.log("d) x:",x)

x = parseInt("1111", 2);
console.log("e) x:",x)

x = parseInt("16*3", 10);
console.log("f) x:",x)

x = parseInt("12", 13)
console.log("g) x:",x)
console.log(" ")

// Convirtiendo números con decimales
x = parseFloat(3.14)
console.log("h) x:",x)

x = parseFloat('3.1416')
console.log("i) x:",x)

x = parseFloat('  3.14159  ')
console.log("j) x:",x)

x = parseFloat('314e-2')
console.log("k) x:",x)

x = parseFloat('0.03145E+2')
console.log("l) x:",x)

x = parseFloat('3.1415some non-digit characters')
console.log("m) x:",x)

