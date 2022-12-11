// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 13_ciclo_for.js
// Ejemplos de uso de for
// ----------------------------------------------------------------------

// Mensaje
console.log('13 Sentencia For');

// Variable de Conteo
var count;
console.log("Iniciando el Loop ");

// Ciclo for
for (count = 0; count < 10; count++) 
{
    console.log("Conteo Actual : " + count );
    if (count==5)
       count=9;
}
console.log("Ciclo For finalizado");
console.log("")

for (count = 10; count > 0; count--) 
{
    console.log("Conteo Actual : " + count );
}
console.log("Ciclo For finalizado");
