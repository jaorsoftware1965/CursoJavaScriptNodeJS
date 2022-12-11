// -------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// variables_tipos_constantes.js
// -------------------------------------

// Mensaje
console.log('Clase 02 Variables Tipos de Datos y Constantses');

// Variable es un espacio de memoria en donde se almacena informacion
// y que se puede referenciar a través de un nombre. 
// La información se puede cambiar, por eso se llama variable

// Tipo de dato es la clase de informacion que se puede almacenar
// 5 tipos de datos, controlados por el operador typeof
//    Undefined
//    Boolean
//    Number
//    String
//    BigInt

// Una constante es un variable a la cual no se le puede cambiar su contenido.
// Por eso se llama constante

// Declarando variables
var nombre = "jesus";
var edad   = 34;
var peso   = 78.50;
var casado = false;
var genero = 'm';
var muyGrande = 1234567890123456789012345678901234567890n;
//var sinDefinir;
var sinDefinir = String();


// Mensaje de la Clase
console.log("02 Variables Tipos y Constantes");

// Desplegando sus valores
console.log("nombre     :",nombre);
console.log("edad       :",edad);
console.log("peso       :",peso);
console.log("casado     :",casado);
console.log("genero     :",genero);
console.log("muyGrande  :",muyGrande);
console.log("sinDefinir :",sinDefinir,"\n");

console.log("tipo de dato de nombre     :",typeof(nombre));
console.log("tipo de dato de edad       :",typeof(edad));
console.log("tipo de dato de peso       :",typeof(peso));
console.log("tipo de dato de casado     :",typeof(casado));
console.log("tipo de dato de genero     :",typeof(genero));
console.log("tipo de dato de muyGrande  :",typeof(muyGrande));
console.log("tipo de dato de sinDefinir :",typeof(sinDefinir),"\n");

// Cambiamos el contenido de las Variables
edad   = "24 años"
peso   = true
casado ="No"

// Desplegamos contenido de Nuevo
console.log("edad   :",edad);
console.log("peso   :",peso);
console.log("casado :",casado,"\n");

console.log("tipo de dato de edad   :",typeof(edad));
console.log("tipo de dato de peso   :",typeof(peso));
console.log("tipo de dato de casado :",typeof(casado));


console.log("Programa terminado ...")