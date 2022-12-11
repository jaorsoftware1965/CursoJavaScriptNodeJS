// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 15_funciones.js
// Ejemplos de uso de funciones
// ----------------------------------------------------------------------

// Mensaje
console.log('15 Funciones');

// Función para desplegar la tabla del 7
function tablaDel7()
{
    // Declaro la tabla
    var tabla=7;

    // Tabla de Multiplicar
    console.log("Tabla de Multiplicar del",tabla)


    // Ciclo para la tabla de multiplicar
    for (multiplicador=1; multiplicador<=10;multiplicador++)
    {
        // Despliega
        console.log(tabla,"X",multiplicador,"=",tabla*multiplicador)
    }
    console.log("")
}

// Ejecutamos la función
tablaDel7();
tablaDel7();
tablaDel7();