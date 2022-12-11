// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 42_arrays_map_filter_reduce_every_find_index.js
// ----------------------------------------------------------------------

// Mensaje
console.log("42_arrays_map_filter_reduce_every_find_index.js")

// Definimos un arreglo
datos = [10,23,45,67,2,7,14]

// Función para mapear
function fnMapea(value, index, array) 
{
    //return value * 5;
    if (value%2==0)
        return value * 5;
    else
        return value;    
}

// Ejecuta la función para mapear
datosMapeados = datos.map(fnMapea);
console.log("Datos mapeados:",datosMapeados);
console.log()

// Función para filtrar
function fnFiltra(value, index, array) 
{
    if (value%2==0)
       return value;
}

// Ejecuta la función para iterar
datosFiltrados = datos.filter(fnFiltra);
console.log("Datos Filtrados:",datosFiltrados);
console.log(" ")

// Función para reducir
function fnReduce(total, value, index, array) 
{
    return total + String(value);
}

// Ejecuta la función para reducir
datosReducidos = datos.reduce(fnReduce)
console.log("Datos Reducidos:",datosReducidos);
datosReducidos = datos.reduce(fnReduce,100)
console.log("Datos Reducidos:",datosReducidos);
console.log(" ")

// Reduce a la derecha
datosReducidos = datos.reduceRight(fnReduce)
console.log("Datos Reducidos Right:",datosReducidos);
datosReducidos = datos.reduceRight(fnReduce,100);
console.log("Datos Reducidos Right:",datosReducidos);
console.log(" ")

// Función para evaluar
function fnEvalua(value) 
{
    return value % 2 == 0;
}

// Evalua
datosEvery = datos.every(fnEvalua);

// Mensaje
console.log("Todos son pares:",datosEvery);
console.log(" ")


// Evalua
datosSome = datos.some(fnEvalua);
console.log("Algunos son Pares:",datosSome);
console.log(" ")

// Buscando
datosPrimerPar = datos.find(fnEvalua)
console.log("El primer par:",datosPrimerPar);

datosIndicePrimerPar = datos.findIndex(fnEvalua)
console.log("El indice del primer par:",datosIndicePrimerPar);
console.log(" ")
