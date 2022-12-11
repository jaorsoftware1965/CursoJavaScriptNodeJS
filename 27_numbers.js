// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 27_numbers.js
// ----------------------------------------------------------------------

// Mensaje
console.log("27 Numbers")

// Declaramos 2 numeros, uno entero y el otro decimal
var x = 3;
var y = 3.14;

// Otra forma de declarar números
x = 123e5;    // 12300000
y = 123e-5;   // 0.00123

// Desplegamos
console.log("x->",x)
console.log("y->",y)
console.log(" ")

// Límites
// Los Enteros pueden manejar hasta 15 digits.
x =  999999999999999;   // x será     999999999999999
y = 8999999999999999;   // 
z = 9999999999999999;   // y será    10000000000000000
console.log("x->",x)
console.log("y->",y)
console.log("z->",z)
console.log(" ")

// El máximo numero de decimales es 17, pero no es 100% efectiva:
x = 0.2 + 0.1; 
console.log("x->",x)
console.log(" ")

// Resolver el problema
x = (0.2 * 10 + 0.1 * 10) / 10; 
console.log("x->",x)
console.log(" ")

// Sumando Numeros con cadenas
x = "10";
y = "20";
z = x + y;  

console.log("z->",z)
console.log(" ")

x = 10;
y = "20";
z = x + y;  

console.log("z->",z)
console.log(" ")

// Dos numeros con un numero en cadena
x = 10;
y = 20;
z = "30";

// Sumamos las 3 variables
var a = x + y + z;
console.log("a->",a)
console.log(" ")

a = y + z + x;
console.log("a->",a)
console.log(" ")

x = "100";
y = "10";
z = x / y;       
console.log("z->",z)
console.log(" ")

// Restamos como si fueran numeros
z = x - y;       
console.log("z->",z)
console.log(" ")

// NaN - Not a Number
x = 100 / "Apple"; 
console.log("x->",x)
console.log(" ")

// Asignando NaN a variable
x = NaN;
y = 5;
z = x + y;         // z será  NaN
console.log("z->",z,typeof(z))
console.log(" ")

x = NaN;
y = "5";
z = x + y;         // z serà NaN
console.log("z->",z,typeof(z))
console.log(" ")

// Declaramos variable
var numero = 2;
while (numero != Infinity) 
{   // Execute until Infinity
    numero = numero * numero;
    console.log("numero:",numero)
}

// División entre 0 genera Infinity
x =  2 / 0;
console.log("x->",x)
console.log(" ")

// Valores en hexadecimal
x = 0xFF;
console.log("x->",x)
console.log(" ")

// Creamos la variable numero
numero = 32;

// Convertimos a cualquier base
console.log(numero.toString(10));  // returns 32
console.log(numero.toString(32));  // returns 10
console.log(numero.toString(16));  // returns 20
console.log(numero.toString(8));   // returns 40
console.log(numero.toString(2));   // returns 100000
console.log(" ")

// Creando 2 cadenas con y sin new
var cadena1 = new String("Hola Mundo");             
var cadena2 = "Hola Mundo"
console.log("String creada con new; typeof(cadena1)",typeof(cadena1))
console.log("String creada sin new; typeof(cadena2)",typeof(cadena2))
console.log(" ")

// Creando 2 numeros con y sin new
num1 = new Number(500);
num2 = 500
console.log("Number creada con new; typeof(num1)",typeof(num1))
console.log("String creada con new; typeof(num2)",typeof(num2))
console.log(" ")
