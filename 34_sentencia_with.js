// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 33_sentencia_with
// Uso de sentencia with para facilitar la escritura de código
// ----------------------------------------------------------------------

// Mensaje
console.log('33 Sentencia with');

// Método a usar por el objeto
function fnSetTituloEditorial(titulo,autor) //(deben ser diferentes a las propiedades)
{
    // Ya deben existir las propiedades para poder usar with
    with (this)
    {
        // Modifica el Titulo 
        titulo = titulo;

        // Crea, Modifica la Editorial 
        autor = autor;

        // Haciendo uso de algo que no existe
        extra = "extra";
    }

    // Agrega una propiedad que no existe
    this.extra2="extra2"
}

// Constructor
function fnLibro(titulo, autor) 
{
    // Hacemos referencia a this, para no escribirlo en cada sentencia
    // Establecemos las propiedades y funciones del Objeto
    this.titulo               = titulo;
    this.autor                = autor;
    this.fnSetTituloEditorial = fnSetTituloEditorial;    
}

// Crea un objeto usando el Constructor
var libro = new fnLibro("La Biblia de JavaScript","JAOR");

// desplegamos cada una de sus propiedades
console.log("Titulo     :",libro["titulo"])
console.log("Autor      :",libro["autor"])
console.log()

// Agregamos la Editorial
libro.fnSetTituloEditorial("La Guia","Yoni");

// Despliega
console.log("Titulo     :",libro["titulo"])
console.log("Autor      :",libro["autor"])
console.log()


// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log(propiedad, ":",libro[propiedad])
