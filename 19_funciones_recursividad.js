// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 19_funciones_recursividad.js
// ----------------------------------------------------------------------

// Recursividad es la capacidad de una función de poder llamarse a si misma

// Mensaje
console.log('19 Recursividad');

// !5 = 5 x 4 x 3 x 2 x 1
// !4 =     4 x 3 x 2 x 1

// Por lo tanto:
// !5 = 5 x !4


// Función recursiva factorial
function factorial(numero) 
{
    // Variable para el resultado
    var resultado;

    // Despliega a quien esta evaluando
    console.log("Evaluando :",numero)

    // La pregunta donde la función recursiva deja de serlo
    if ((numero == 0) || (numero == 1))
        resultado = 1;
    else
    {
        // Calcula el resultado
        resultado  =(numero * factorial(numero - 1));        
    }
    // Desplegando el resultado
    console.log("El Factorial de ",numero," es:",resultado);

    // retorna el resultado
    return resultado;
  }

  // Llamando a la función
  res = factorial(5);
  console.log("El Factorial de 5 es:",res)
  