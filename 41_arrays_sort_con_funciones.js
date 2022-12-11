// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 41_arrays_sorts_funciones.js
// EL método sort, evalua siempre con cadenas
// Utilizaremos una función para ordenar numeros
// ----------------------------------------------------------------------

// Mensaje
console.log("42 Ordenamiento de arreglos con Funciones")

// Definimos un arreglo
datos = ["10","23","45","67","2","7","14"]

// Ordenamos
console.log(datos.sort())

// Definimos un arreglo de entero
datos = [10,23,45,67,2,7,14]

// Ordenamos
console.log(datos.sort())
console.log(" ")

// Ordenamos a través de una función
console.log(datos.sort(function(a,b){return a-b}))

// Ordenamos a travès de una función
console.log(datos.sort(function(a,b){return b-a}))

// Dejamos espacio
console.log(" ")


// Definimos una función para ordenar
fnSortAsc = function(x,y)
{
    // Evaluando
    console.log("x:",x,"y:",y);

    // hace la resta
    return x-y;
}

// Descendente
fnSortDesc = function(x,y)
{
    // Evaluando
    console.log("x:",x,"y:",y);

    // hace la resta
    return y-x;
}


// Redefinimos el arreglo
console.log(datos.sort(fnSortAsc))
console.log(" ")


// Redefinimos el arreglo
console.log(datos.sort(fnSortDesc))
console.log(" ")
