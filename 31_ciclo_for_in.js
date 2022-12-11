// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 31_ciclo_for_in.js
// Ciclo para objetos
// ----------------------------------------------------------------------

// Mensaje
console.log('31 Ciclo for in');

// Crea un objeto llamado libro
var libro = new Object();

// Le asigno propiedades al objeto
libro.titulo     = "JavaScript";     // Assign properties to the object
libro.autor      = "Bill Gates";
libro.editorial  = "Microsoft Press";
libro.año        = 2019
libro.ISBN       = "JS123HJFF"
libro.desplegarAutor  = function(){console.log("autor:",this.autor)}

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
{
    // Desplegando cada una de las propiedades
    console.log(propiedad,":",libro[propiedad])
}

// Dejamos un espacio en blanco
console.log("")

// Ciclo para desplegar las propiedades de console
console.log("Lista de Propiedades del Objeto console")
for (propiedad in console)
{
    // Desplegando cada una de las propiedades
    console.log(propiedad,":",console[propiedad])
}
// Dejamos un espacio en blanco
console.log("")

// Declaro un mensaje
var mensaje="Hola Mundo"

// Ciclo para recorrer las letras de un mensaje
for (letra in mensaje)
{
    // Desplegando cada una de las letras
    console.log(letra,":",mensaje[letra])
}