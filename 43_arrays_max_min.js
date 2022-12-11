// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 43_arrays_max_min.js
// ----------------------------------------------------------------------

// Mensaje
console.log("43 arrays max y min");

// Declaramos un arreglo de cadenas
var nombres = ["Juan","Jose","Maria","Benito","Bodoque"]

// Declaramos un arreglo de numeros
var edades = [13,32,45,36,57,38]

// Podemos usar la función max indicando directamente el arreglo
console.log("Max 1:",Math.max(1,2,3));
console.log("Max 2:",Math.max(edades));
console.log("Max 3:",Math.max(...edades));
console.log("Max 4:",Math.max(nombres));
console.log("Max 5:",Math.max(...nombres));

// Usando el arreglo de cadenas
console.log("Max Nombres:",Math.max.apply(Math,nombres));

// Usando el arreglo de numeros
console.log("Max edades:",Math.max.apply(Math,edades));
console.log(" ")

// Los Mínimos
console.log("Min 1:",Math.min(1,2,3));
console.log("Min 2:",Math.min(edades));
console.log("Min 3:",Math.min(...edades));
console.log("Min 4:",Math.min(nombres));
console.log("Min 5:",Math.min(...nombres));


// Usando el arreglo de cadenas
console.log("Min Nombres:",Math.min.apply(Math,nombres));

// Usando el arreglo de numeros
console.log("Min edades:",Math.min.apply(Math,edades));

// Usando reduce
// Función para reducir y obtener el maximo
function fnReduceMax(a,b) 
{
    // Retorna el Maximo
    return Math.max(a,b);
}

// Función para reducir y obtener el minimo
function fnReduceMin(a,b) 
{
    // Retorna el Maximo
    return Math.min(a,b);
}

// Otra forma
function getMaxOfArray(total, value, index, array) 
{
    console.log("Entro");
    return Math.max(...array);
}
  

// Ejecuta la función para reducir
console.log("El maximo:",edades.reduce(fnReduceMax));
console.log("El minimo:",edades.reduce(fnReduceMin));
console.log("El maximo:",edades.reduce(getMaxOfArray));
