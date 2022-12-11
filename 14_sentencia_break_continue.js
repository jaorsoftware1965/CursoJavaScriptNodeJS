// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 14_sentencia_break_continue.js
// Sentencia break rompe el ciclo
// Sentencia continue regresa el control a la evaluación de la condición 
// Ejemplos de uso de break y continue
// ----------------------------------------------------------------------

// Mensaje
console.log('14 Sentencia break y continue');

// Variable de Conteo
console.log("Iniciando el Ciclo  ");

// Variable 
count = 0

// Ciclo while
while (++count < 10) 
{
    console.log("Actual conteo : ",count);
    if (count++==5)
        break;
}
console.log("count:",count)

// Inicializo count
count = 0;

// Ciclo while
while (count < 10) 
{    
    // Verifica si es 5
    if (count==5)
    {
        // Regreso el control a la evaluación de la condición
        continue;               
    }
    console.log("Actual conteo : " + count);
    count++;
}
console.log("count:",count)