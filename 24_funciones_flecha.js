// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 24_funciones_flecha
// ----------------------------------------------------------------------

// Mensaje 
console.log("24 funciones flecha")

// Una función flecha es una variante de una función expresión;
// Son anóminas es decir que no se les establece un nombre

// Creamos una función y se la asignamos a una variable
// ES5 = ECMAScrpit5
var sumaES5 = function(x, y) 
{
    // Retorna la suma de los argumentos
    return x + y;
};


// Usamos la función
console.log("sumaES5(5,10):",sumaES5(5,10));

// Definimos la función flecha
const sumaES6 = (x, y) => { return x + y };

// Usamos la función flecha
console.log("sumaES6(8,7):",sumaES6(8,7));

// Ejemplo sin Parámetros
var holaEs5 = function() 
{
    // Desplegar Mensaje
    console.log('Hola');
};

// ES6
const holaEs6 = () => { 
                         console.log('Hola');
                         console.log("Mundo"); 
                      };

// Llamamos a la función flecha
holaEs6();

// Con 1 parametro
// ES5
var cuadradoEs5 = function(x) {
    return x * x;
};

// ES6
const cuadradoEs6 = (x) => { return x * x };

// Usamos la función flecha
console.log(cuadradoEs6(3)); // 9