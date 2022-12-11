// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 37_arrays_for_of.js
// Arreglos
// Son espacios de memoria a los que se accede a través de un nombre y
// un indice
// ----------------------------------------------------------------------

// Mensaje
console.log("37 Arreglos y uso de for of")

// Definiendo un arreglo
var lenguajes = ["C++", "Java", "Python"];

// Type
console.log("Type of lenguajes:",typeof(lenguajes))

// Verificamos su type of
console.log("typeof de lenguajes   :",typeof(lenguajes))
console.log("contenido de lenguajes:",lenguajes)
console.log("")

// Otra forma de crear arreglos
var sistemas = new Array("Windows", "Linux", "Macintosh");

// Type de Sistemas
console.log("typeof de sistemas:",typeof(sistemas))
console.log("contenido de sistemas:",sistemas)
console.log("")

// Función mensaje
function msgHolaMundo(persona)
{
    // Tabla de Multiplicar
    console.log("Hola",persona)
}

// Item's de diferentes datos
var datos = ["Juan Perez",true,35,75.50,sistemas,msgHolaMundo];
console.log("typeof de datos:",typeof(datos))
console.log("contenido de datos:",datos)
console.log("")


// Accediendo a los datos
console.log("Nombre    :",datos[0])
console.log("Casado    :",datos[1])
console.log("Edad      :",datos[2])
console.log("Peso      :",datos[3])
console.log("Peso      :",datos[4])
console.log("Sistema 01:",datos[4][0])
console.log("Sistema 02:",datos[4][1])
console.log("Sistema 03:",datos[4][2])
console.log("Función   :",datos[5])
console.log("")

// Modificando los datos de un arreglo
datos[0]    = "Benito Canales"
datos[1]    = "Si"
datos[2]    = "43"
datos[3]    = 98.525
datos[4][0] = "Macintosh"
datos[4][1] = "Linux"
datos[4][2] = "Windows"


// Desplegamos la información
console.log("Nombre    :",datos[0])
console.log("Casado    :",datos[1])
console.log("Edad      :",datos[2])
console.log("Peso      :",datos[3])
console.log("Sistema 01:",datos[4][0])
console.log("Sistema 02:",datos[4][1])
console.log("Sistema 03:",datos[4][2])
console.log("Función   :",datos[5])
console.log("")

// Ejecutando la función
datos[5]("José");

// La propiedad longitud
console.log("Longitud de Lenguajes :",lenguajes.length)
console.log("Longitud de Sistemas  :",sistemas.length)
console.log("Longitud de Datos     :",datos.length)
console.log("")

// Ciclo por indice
console.log("Desplegando por indice")
for (indice = 0 ; indice < sistemas.length; indice++)
{
    console.log(sistemas[indice])
}
console.log()

// Ciclo para recorrer los datos de un array
console.log("Desplegando el arreglo de datos con ciclo for of")
for (xDato of datos)
{
    // Desplegando el dato
    console.log("Dato:",xDato)
    console.log("Tipo:",typeof(xDato))
    console.log()
}
console.log("")


// Desplegando usando for in
console.log("Desplegando el arreglo de datos con ciclo for in")

// Ciclo para recorrer las letras de un mensaje
for (dato in datos)
{
    // Desplegando cada una de las letras
    console.log(dato,":",datos[dato])
}