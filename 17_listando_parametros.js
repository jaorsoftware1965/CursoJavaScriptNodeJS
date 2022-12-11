// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 17_listando_parametros.js
// ----------------------------------------------------------------------

// Mensaje
console.log('17 Listando Parámetros en Funciones');

// Función para desplegar la tabla de Cualquier numero
function despliegaTabla(tabla, multiplicadorInicial, multiplicadorFinal=10)
{
    // Listando los argumentos
    console.log("Argumentos Recibidos en la Función:",arguments.length)
    console.log("Desplegando el valor de los argumentos...")
    for (i = 0; i < arguments.length; i++) {
        console.log("Argumento:",i,arguments[i])
     }
    // Tabla de Multiplicar
    console.log("Tabla de Multiplicar del",tabla)


    // Ciclo para la tabla de multiplicar
    for (multiplicador=multiplicadorInicial; multiplicador<=multiplicadorFinal;multiplicador++)
    {
        // Despliega
        console.log(tabla,"X",multiplicador,"=",tabla*multiplicador)
    }
    console.log("")

    
}


// Ejecutamos la función
despliegaTabla(8,1,5);
despliegaTabla(9,5,17);
despliegaTabla(10,5);