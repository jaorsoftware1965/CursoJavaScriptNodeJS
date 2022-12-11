// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 21_funciones_dentro_funciones.js
// ----------------------------------------------------------------------

// Mensaje 
console.log ("21 Funciones dentro de Funciones")

// Función sumar Cuadrados
function sumarCuadrados(numero1, numero2) 
{
    // Declaro una función dentro de una función    
    function cuadrado(numero) 
    {
        // Retorna el Cuadrado
        return numero * numero;
    }

    // Retorna la suma de los 2 cuadrados
    return cuadrado(numero1) + cuadrado(numero2);
}

// Ejecuta la Función
console.log("La Suma de los Cuadrados de 2 y 3 es:",sumarCuadrados(2, 3));
console.log("La Suma de los Cuadrados de 2 y 3 es:",sumarCuadrados(3, 4));
console.log("La Suma de los Cuadrados de 2 y 3 es:",sumarCuadrados(4, 5));


// Declara una función
function fnFuera(numero1) 
{
  // Función interna
  function fnDentro(numero2) 
  {
    // Retorna la suma del parametro de la función externa y la interna
    return numero1 + numero2;
  }
  // Retorna la función
  return fnDentro;
}

// Obtiene la Funcion de dentro
fnObtenida = fnFuera(3); // función que agregue 3 a lo que sea que le des

// Desplegamos el tipo de dato
console.log("Typeof(fnObtenida):",typeof(fnObtenida))

// Ejcuta la función
resultado = fnObtenida(5); // devuelve 8

// Despliega el resultado
console.log("Resultado de fnObtenida(5):",resultado)

// Puedes llamarla de esta forma
resultado = fnFuera(3)(5); // devuelve 8

// Despliega el resultado
console.log("Resultado de fnFuera(3)(5):",resultado)