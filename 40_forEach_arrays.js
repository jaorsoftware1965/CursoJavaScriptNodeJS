// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 40_forEach_arrays.js
// ----------------------------------------------------------------------

// Mensaje
console.log("41 Ciclo forEach para iterar en arreglos")

// Función
function fnItera(item, index, arr) 
{
    // Desplegamos el dato
    console.log("item :",item);
    console.log("index:",index);
    console.log(" ")
}

// Declaramos un arreglo de datos
var sistemas = ["windows", "linux", "macintosh"];

// Utilizamos el método desde la variable y el ciclo forEach
sistemas.forEach(fnItera);

// Declaramos un arreglo de numeros
var numeros = [60, 40, 10, 5];

// Variable para sumar
var suma = 0

// Función para sumar
function fnSumar(item) 
{
    // Sumamos
    suma += item;
}

// Utilizamos el método desde la variable y el ciclo forEach
numeros.forEach(fnSumar);

// La suna de los elementos
console.log("suma:",suma);

// Inicializa de nuevo suma
suma = 0

// Función para sumar
function fnSumarConIndice(item,index) 
{
    // Sumamos
    suma += item + index;
}

// Utilizamos el método desde la variable y el ciclo forEach
numeros.forEach(fnSumarConIndice);

// La suma de los elementos con su index
console.log("suma con su index:",suma);




