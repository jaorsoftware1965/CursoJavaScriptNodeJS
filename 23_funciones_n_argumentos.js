// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 23_funciones_n_argumentos
// ----------------------------------------------------------------------

// Mensaje 
console.log("23 funciones con n argumentos")

// Función sumar Cuadrados
function fnSumarLosNumeros(incremento)
{
    // Variable para el resultado
    let resultado = 0

    // Variable para el indice
    let indice;

    // itera a través de arguments
    for (indice = 1; indice < arguments.length; indice++) 
    {
        console.log("indice:",indice," valor:",arguments[indice])
        resultado += arguments[indice] + incremento;
    }

    // Retorna la suma de los 2 cuadrados
    return resultado;
}

// Ejecuta la Función                        10+9+8+7+6 = 40
console.log("La Suma es:",fnSumarLosNumeros(5,5,4,3,2,1));
console.log("La Suma es:",fnSumarLosNumeros(5));
console.log("La Suma es:",fnSumarLosNumeros(5,1,2));