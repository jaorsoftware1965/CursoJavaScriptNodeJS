// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 12_sentencia_while.js
// Ejemplos de uso de while
// ----------------------------------------------------------------------

// Mensaje
console.log('12 Sentencia while');

// Variable de Conteo
var count = 0;

// Mensaje
console.log("Iniciando el Loop ");

// Ciclo while
while (++count < 10) 
{
    console.log("Actual conteo : " + count);
    //count++;
    //break;
}

// Mensaje de Finalización
console.log("Loop finalizado");

// Inicializa la variable de Conteo
count = 0

// Ciclo do while
do 
{
    console.log("Current Count : " + count);
    //count++;
}
while (++count < 10);

// Mensaje de Loop Detenido
console.log ("Loop Detenido");
