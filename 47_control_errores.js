// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 47_control_errores.js
// Uso de try catch throw y finally
// ----------------------------------------------------------------------

// Mensaje
console.log("47 Control de Errores")
console.log(" ")

// Variable para dividir
var divisor    = 1
var dividendo  = 7

// Controlas error en determinado código
try 
{
    // División por 0
    var cociente = dividendo / divisor;
    
    // Verifica x
    if (cociente==Infinity)
    {
        // Generamos un objeto error
        var Error = {message:"División entre 0 no está definida", log:"Este error se genera al realizar una división entre 0", name:"errX6"};
        throw Error;
    }
    else
    {
        console.log("El valor del cociente es:",cociente)
        console.log()
    }
} 
catch (error) 
{
    console.log("-->",error,"<---")
    console.log("Error log :",error.log)
    console.log("Message   :",error.message)
    console.log("Name      :",error.name)
    console.log()
}
finally
{
    console.log("Continua el programa ...")
}

// Declaramos un numero en cadena
var numero="54"

try 
{
    // Tratando de sumar
    var suma = 10 + parseInt(numero2);

    // Verifica x
    if (isNaN(suma))
    {
        // Generamos un objeto error
        var Error = {message:"cadena numero no se pudo convertir a Integer", log:"Este error se da al convertir la cadena numero a Integer", name:"errX7"};
        throw Error;
    }
    else
    {
        // Despliega la suma
        console.log("Suma:",suma);
        console.log(" ")
    }    
} 
catch (error) 
{
    //console.log("-->",error,"<---")
    console.log("Error log :",error.log)
    console.log("Message   :",error.message)
    console.log("Name      :",error.name)
    console.log()
}
finally
{
    console.log("Fin del Programa")
}
