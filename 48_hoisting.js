// ------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 48_hoisting.js
// ------------------------------------------------------------

// Mensaje
console.log("51 Hoisting")
console.log()

// Hoisting es la características de poder utilizar funciones y
// variables, antes de su definición

// // Esto es lo normal
// function fnTest()
// {
//     // Mensaje
//     console.log("Hola Mundo")
// }

// // Llama a la función
// fnTest()

// // Esto es lo normal
// function fnTest()
// {   
//     // Mensaje
//     console.log("Hola Mundo")
// }


// Declaramos la variable despues
// var variable = "Hola Mundo 2"

// Hacemos uso de una variable que está despues
console.log(variable)

// Declaramos la variable despues
var variable = "Hola Mundo 2"