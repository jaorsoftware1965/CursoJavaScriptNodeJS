// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 30_precedencia_operadores.js
// ----------------------------------------------------------------------

// La precedencia de operadores se utiliza para saber; en una expresión
// que contiene mas de una operación; cuales se deben realizar primero
//

// 5 + 3 * 2 = 16 Erroneo
// 5 + 3 * 2 = 11 Correcto
// 5 + 6     = 11

// (5 + 3) * 2 = 16

// Usemos una expresión mas compleja y evaluemos
// 5 - 130 / (4 + 5 + 7 * 8) + 2 * 2 =
// 5 - 130 / (4 + 5 + 56)    + 4     = 
// 5 - 130 / 65              + 4     = 
// 5 -     2                 + 4     = 7


// 5 - 130 / (4 + 5 + 7 * 8) > 2 * 2 =
// 5 - 130 / (4 + 5 + 56)    > 4       =
// 5 - 130 / 65              > 4       =
// 5 - 2                     > 4       =
// 3                         > 4       = falso


// 5 - 130 / (4 + 5 + 7 * 8) + 2 * 2 << 2 = 
// 5 - 130 / (4 + 5 + 7 * 8) + 2 * 2 << 2 =
// 5 - 130 / (4 + 5 + 56)    + 4     << 2 = 
// 5 - 130 / 65              + 4     << 2 = 
// 5 -     2                 + 4     << 2 =
// 7                                 << 2 = 28


// Mensaje
console.log("30 Precedencia de Operadores")

// Evaluamos las 2 expresiones analizadas
console.log(5 - 130 / (4 + 5 + 7 * 8) + 2 * 2)
console.log(5 - 130 / (4 + 5 + 7 * 8) > 2 * 2)
console.log(5 - 130 / (4 + 5 + 7 * 8) + 2 * 2 << 2)