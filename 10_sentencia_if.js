// ----------------------------------------------------------------------
// Aprende javascript desde 0 con NodeJs
// 10_sentencia_if.js
// Devuelve el tipo de dato de una variable u objeto
// Ejemplos de uso de if else
// ----------------------------------------------------------------------

// Mensaje
console.log('10 Operador if else');

// Edad
var edad = 34;

// Verifica la edad
if (edad > 17 && edad < 66) 
{
    // Si la condición se cumple
    console.log("Puede tener licencia de conducir");

} 
else 
{
    // Mensaje de que no se puede conducir
    console.log("No puede conducir un auto");
}



// Variable
var libro = "matematicas";

if ( libro == "historia" ) 
{
   console.log("Ciencias Sociales");
} 
else if( libro == "matematicas" ) 
{
   console.log("Ciencias Matemáticas");
} 
else if( libro == "economia" ) 
{
   console.log("Ciencias Económicas");
} 
else 
{
   console.log("Desconocido libro");
}


// Cambio el valor de Edad
edad = 2;

if (edad < 3)
{
    console.log("Educación Maternal");
}
else if (edad < 6)
{
    console.log("Educación Pre Primaria");
}
else if (edad < 12)
{
    console.log("Educación Primaria");
}
else if (edad < 15)
{
    console.log("Educación Secundaria");
}
else if (edad < 18)
{
    console.log("Educación Bachillerato");
}
else if (edad < 22)
{
    console.log("Educación Profesional");
}
else if (edad >21 && edad < 24)
{
    console.log("Educación Maestría");
}
else if (edad > 23 && edad < 26)
{
    console.log("Educación Doctorado");
}
else if (edad > 25 )
{
    console.log("Educación La Vida")
}

