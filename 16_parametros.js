// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 16_parametros.js
// Ejemplos de uso de parámetros en funciones
// ----------------------------------------------------------------------

// Mensaje
console.log('16 Parámetros en Funciones');

// Función para desplegar la tabla de Cualquier numero
function despliegaTabla(tabla, multiplicadorInicial, multiplicadorFinal=10)
{    
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



