// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 38_arrays_metodos.js
// Arreglos y sus métodos
// ----------------------------------------------------------------------

// Mensaje
console.log("38 Arreglos y sus métodos")

// Función mensaje
function msgHolaMundo(persona)
{
    // Tabla de Multiplicar
    console.log("Hola",persona)
}

// Definiendo un arreglo
var lenguajes = ["Pascal","Fortran","C++", "Java", "Python"];
var sistemas  = ["Windows", "Linux", "Macintosh"];
var datos     = ["Juan Perez",true,35,75.50,"Agustin Melgar",sistemas,msgHolaMundo];

// Método sort
console.log("Sort lenguajes :",lenguajes.sort())
console.log("Sort sistemas  :",sistemas.sort())
console.log("Sort datos     :",datos.sort())
console.log()

// Buscar con indexOf
console.log("datos     :",datos)
console.log("Buscando 'Windows'    :",datos.indexOf("Windows"))
console.log("Buscando sistemas     :",datos.indexOf("Juan Perez"))
console.log("Buscando sistemas     :",datos.indexOf(true))
console.log("Buscando sistemas     :",datos.indexOf(35))
console.log("Buscando sistemas     :",datos.indexOf(75.5))
console.log("Buscando sistemas     :",datos.indexOf("Agustin Melgar"))
console.log("Buscando sistemas     :",datos.indexOf(sistemas))
console.log("Buscando msgHolaMundo :",datos.indexOf(msgHolaMundo))
console.log()

// Método reverse
console.log(lenguajes)
console.log("Reverse lenguajes :",lenguajes.reverse())
console.log("Reverse sistemas  :",sistemas.reverse())
console.log("Reverse datos     :",datos.reverse())
console.log("datos             :",datos)
console.log()

// Elimina el ultimo elemento
console.log("Eliminando el ultimo elemento de Lenguajes:",lenguajes.pop())
console.log("lenguajes :",lenguajes)
console.log("Eliminando el ultimo elemento de Sistemas :",sistemas.pop())
console.log("sistemas  :",sistemas)
console.log("Eliminando el ultimo elemento de Datos    :",datos.pop())
console.log("datos     :",datos)
console.log()

// Agregando elementos al final con push
lenguajes.push("Objective-C")
sistemas.push("Unix")
datos.push(3.1416)
console.log("lenguajes :",lenguajes)
console.log("sistemas  :",sistemas)
console.log("datos     :",datos)
console.log()

// Elimina el primer elemento
console.log("Eliminando el primer elemento de Lenguajes:",lenguajes.shift())
console.log("lenguajes :",lenguajes)
console.log("Eliminando el primer elemento de Sistemas :",sistemas.shift())
console.log("sistemas  :",sistemas)
console.log("Eliminando el primer elemento de Datos    :",datos.shift())
console.log("datos     :",datos)
console.log()

// Agregando elementos al inicio con unshift
lenguajes.unshift("Swish")
sistemas.unshift("Novell")
datos.unshift(2020)
console.log("lenguajes :",lenguajes)
console.log("sistemas  :",sistemas)
console.log("datos     :",datos)
console.log()

// Convirtiendo a string los elementos del arreglos
console.log("A String lenguajes:",lenguajes.toString())
console.log("A String sistemas :",sistemas.toString())
console.log("A String datos    :",datos.toString())
console.log()

