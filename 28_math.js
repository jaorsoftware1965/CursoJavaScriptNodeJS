// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 28_math.js
// El Objeto Math para operaciones matemáticas
// ----------------------------------------------------------------------

// Mensaje
console.log("28 Math")

// El Valor de PI
console.log(typeof(Math))
console.log(Math.PI)
console.log()

// Redondeo a entero
console.log(Math.round(4.7));  // returns 5
console.log(Math.round(4.4));     // returns 4
console.log(Math.round(4.44));    // returns 4
console.log(Math.round(4.55));    // returns 5
console.log()

// Potencia
console.log(Math.pow(8, 2));
console.log()

// Raiz Cuadrada
console.log(Math.sqrt(82));
console.log()

// Valor Absoluto
console.log(Math.abs(-82.34));
console.log()

// Rendondea a entero mas cercano arriba
console.log(Math.ceil(-82.34));
console.log(Math.ceil(82.34));
console.log()

// Rendondea a entero mas cercano abajo
console.log(Math.floor(-82.34));
console.log(Math.floor(82.34));
console.log()

console.log(Math.min(0,150,30,-12,45,8,90));
console.log(Math.max(0,150,30,-12,45,8,90));
console.log()


// Un numero menor que 1 con decimales
console.log("Número Aleatorio menor que 1 con decimales:",Math.random())
console.log()

// Un Numero entre 0 y 9
console.log("Numero entre 0 y 9 con decimales:",Math.random() * 10)
console.log()

// Un Numero entre 0 y 99
console.log("Numero entre 0 y 99 con decimales:",Math.random() * 100)
console.log()

// Un Numero entereo entre 0 y 10
console.log("Numero entero entre 0 y 10:",Math.round(Math.random() * 10))
console.log()

// Función para obtener un random en un rango
function getRandomInteger(min, max) 
{
    // Ejecuta la Función
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Despliega
console.log("Numeros enteros entre 1 y 16")
console.log(getRandomInteger(1,16))
console.log(getRandomInteger(1,16))
console.log(getRandomInteger(1,16))
console.log(getRandomInteger(1,16))
console.log(getRandomInteger(1,16))
console.log(getRandomInteger(1,16))
