// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 03_operadores_aritmeticos.js
// Operaciones con los operadores
// Suma, Resta, División, Multiplicación, Residuo, Incremento, Decremento
// ----------------------------------------------------------------------

// Mensaje
console.log('03 Operadores Aritméticos');

// Declaramos variables
var a = 33;
var b = 10;
var c = "Test"
var y = true;

// Desplegamos los valores
console.log("a) El valor de a:",a);
console.log("b) El valor de b:",b);
console.log("c) a + b        = ",a + b);
console.log("d) a - b        = ",a - b);
console.log("e) a * b        = ",a * b);
console.log("f) a / b        = ",a / b);
console.log("g) a % b        = ",a % b);
console.log("h) a + b + c    = ",a + b + c);
console.log("i) c + a + b    = ",c + a + b);
console.log("j) ++a          = ",++a);
console.log("k) b++          = ",b++);
console.log("l) b            = ",b);
console.log("m) --a          = ",--a);
console.log("n) b--          = ",b--);
console.log("o) b            = ",b);

// Suma valores distintos
var resultado = a + b + c + y;
console.log("p) a + b + c + y: ",resultado);
console.log("q) Tipo de dato : ",typeof(resultado));

resultado = y + a + b + c;
console.log("r) y + a + b + c : ",resultado);
console.log("s) Tipo de dato : ",typeof(resultado));

resultado = c - a + b - y;
console.log("t) c - a + b - y : ",resultado);
console.log("u) Tipo de dato : ",typeof(resultado));