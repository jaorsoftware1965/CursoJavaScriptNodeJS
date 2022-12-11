// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 32_funcion_constructor
// Función para crear objetos e inicializarlos
// ----------------------------------------------------------------------

// Mensaje
console.log('32 Función Constructor');

// Crear objeto
//var libro = new Object()

// Le asigno propiedades al objeto
//libro.titulo     = "JavaScript";     
//libro.autor      = "Bill Gates";
//libro.editorial  = "Microsoft Press";

// Definiendo directamente
//var carro = {marca:"Ford", modelo:"2010", color:"blanco"};

// Definimos el Constructor
function fnLibro(titulo, autor) 
{
    // MEnsaje
    console.log ("Creando un libro ....")

    // This hace referencia a la propiedad que está creando en el momento
    if (titulo=="")
       this.titulo ="Las mil y una noches"          
    else
       this.titulo = titulo;

    if (autor!="")   
       this.autor = autor;
    else
       this.autor = "Benito Bodoque"   
}

// Crea un objeto usando el Constructor
var libro = new fnLibro("La Biblia de JS","JAOR");

// usamos la sentencia typeof
console.log("typeof:",typeof(libro));

// desplegamos cada una de sus propiedades
console.log("Titulo     :",libro.titulo)
console.log("Autor      :",libro.autor)

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log(propiedad)

console.log("El Valor del Objeto Libro:",libro);
console.log("");

// Creo otro libro
var libro2 = new fnLibro("La Biblia de JavaScript","Bill Gates")

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro2")
for (propiedad in libro2)
    console.log(propiedad)
console.log("El Valor del Objeto Libro2:",libro2);
console.log("");

// Creo otro libro
var libro3 = new fnLibro("La Biblia de JavaScript","JaorSoftware Press")

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro3")
for (propiedad in libro3)
    console.log(propiedad)
console.log("El Valor del Objeto Libro3:",libro3);
console.log("");

// Creo otro libro
var libro4 = new fnLibro("","")

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro4")
for (propiedad in libro4)
    console.log(propiedad)
console.log("El Valor del Objeto Libro4:",libro4);
console.log("");