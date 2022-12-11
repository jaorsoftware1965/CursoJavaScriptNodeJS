// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 22_ambito de las funciones y variables uso de let
// ----------------------------------------------------------------------


// let se utiliza igual que var, pero impide que vuelva a ser redeclarada

// Declaramos x
let x = 10

// No se puede redeclarar
//let x = 30

// Si se puede redeclarar con var
var y = 20
var y = 30

// Mensaje 
console.log ("22 funciones y variables locales y globales")

// Variable global que puede ser accedida desde cualquier ámbito
var global ="Variable global"

// Función sumar Cuadrados
function sumarCuadrados(numero1, numero2) 
{
    // Acá si se puede redeclarar x
    let x = 20

    // Declaramos una variable local a la función
    //var local="Variable local de Sumar Cuadrados"

    // Se declara glbal
    local = "Variable local de Sumar Cuadrados"

    // Desplegando la variable global
    console.log("a)",global)
    console.log("b)",local)

    // Declaro una función dentro de una función    
    function cuadrado(numero) 
    {
        // uso mi propia variable global
        global = "A ver que pasa"

        // Declaramos una variable local a la función
        local_otra  = "Variable local de cuadrado"
        

        // Desplegando la variable local
        console.log("c)",global)
        console.log("d)",local_otra)

        // Retorna el Cuadrado
        return numero * numero;
    }

    // Retorna la suma de los 2 cuadrados
    return cuadrado(numero1) + cuadrado(numero2);
}

// Ejecuta la Función
console.log("La Suma de los Cuadrados de 2 y 3 es:",sumarCuadrados(2, 3));

// No puedo llamar a la función Cuadrado ni a variables locales
//console.log(cuadrado(3));
console.log("-->",local);

console.log("global->>",global);