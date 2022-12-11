// ----------------------------------------------------------------------
// 06_operadores_bits.js
// Operaciones con los operadores de bit:
// AND, OR, XOR, NOT, Desplamiento Izquierda, Desplazamiento Derecha,
// ----------------------------------------------------------------------

// Mensaje
console.log('06 Operadores de Bit');
                            //  8421   8421
var a = 12; // Bit presentation 1100  11000  <- desplazamiento izquierda 1 = 24
var b = 13; // Bit presentation 1101   0110   <--desplazamiento derecha  1 = 6
                             // --
                             // 1100  <-and = 12
                             // 1101  <-or  = 13
                             // 0001  <-xor                              
                             
// Desplegamos los valores                              
console.log("a:",a);
console.log("b:",b);

// Operacion And
console.log("(a & b) => ",a & b);

// Operacion Or
console.log("(a | b) => ",a | b);

// Operacion XOR
console.log("(a ^ b) => ",a ^ b);

// Operacion NOT
console.log("(~b)  => ",~b);
console.log("~(~b) => ",~(~b));

// Operacion Desplazamiento Izquierda
console.log("(a << 2) => ",a << 2);

// Operacion Desplazamiento Derecha
console.log("(a >> 2) => ",a >> 2);

