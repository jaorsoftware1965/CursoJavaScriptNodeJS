// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 11_sentencia_switch.js
// Ejemplos de uso de switch
// ----------------------------------------------------------------------

// Mensaje
console.log('11 Sentencia switch');

// Variable para calificación
var calificacion = 'X';

console.log("Evaluando la Califación");
// Evaluar una expresión
switch (calificacion) 
{    
    case 'A': 
        console.log("Calificación Excelente");
        break;

    case 'B': 
        console.log("Calificación Muy Buena");
        break;

    case 'C': 
        console.log("Calificación Buena");
        break;

    case 'D': 
        console.log("Calificación Aceptable");
        break;

    case 'F': 
        console.log("Calificación Aprobatoria");
        break;

    default:  
        console.log("Calificación Desconocida o No Aprobatoria")
        break;            
}

// Deja una linea
console.log("")

// Declaro una variable para la Edad
var edad = 65;

console.log("Evaluando la Edad");
switch (edad) 
{
    case 0:          
        console.log("Es un Bebe");
        break;

    case 1: 
    case 2: 
        console.log("Educación Maternal");
        break;
        
    case 3: 
    case 4: 
    case 5: 
        console.log("Educación Pre Primaria");
        break;

    case 6: 
    case 7: 
    case 8: 
    case 9: 
    case 10: 
    case 11: 
        console.log("Educación Primaria");
        break;

    case 12: 
    case 13: 
    case 14: 
        console.log("Educación Secundaria");
        break;

    case 15: 
    case 16: 
    case 17: 
        console.log("Educación Bachillerato");
        break;

    case 18: 
    case 19: 
    case 20: 
    case 21: 
        console.log("Educación Profesional");
        break;

    case 22: 
    case 23: 
        console.log("Educación Maestría");
        break;    

    case 24: 
    case 25: 
        console.log("Educación Doctorado");
        break;    
     
    default:  
        if (edad<66)
           console.log("Vida Laboral")
        else
           console.log("Jubilación")   

}