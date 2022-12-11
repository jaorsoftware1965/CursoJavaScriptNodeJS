// -------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 55_funciones_callback.js ----------------------------------------------------

// Mensaje
console.log("55 funciones callback")
console.log()


// función que despliega un dato
function fnDesplegar(dato) 
{
    // Mensaje
    console.log("Ejecutandose función fnDesplegar ...")
    console.log(dato);
}

// función que despliega un dato
function fnDividir(dato) 
{
    // Mensaje
    console.log("Ejecutandose función fnDividir ...")
    console.log(dato/2);
}


// Función Sumar
function fnSumar(num1, num2, fnCallback) 
{
    // Mensaje
    console.log("Ejecutandose función fnSumar ...")

    // Ejecuta la suma
    let suma = num1 + num2;

    // Llama a la función a desplegar el dato
    fnCallback(suma);
}
  
// Ejecuta la función pasando la función callback
fnSumar(5, 6, fnDesplegar);
fnSumar(5, 6, fnDividir);




