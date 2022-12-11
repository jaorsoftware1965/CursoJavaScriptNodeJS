// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 34_Metodos_getter_setter
// ----------------------------------------------------------------------

// Mensaje
console.log("34 Métodos getter's setter's");

// Método a usar por el objeto
function fnSetTitulo(titulo) 
{
    // Colocamos el valor a la propiedad
    this.titulo = titulo;        
}

// Método a usar por el objeto
function fnSetAutor(autor) 
{
    // Colocamos el valor a la propiedad
    this.autor = autor; 
}

// Método para agregar la editoria
function fnSetEditorial(editorial)
{
    // Colocamos el valor a la propiedad
    this.editorial = editorial;
}

// Método a usar por el objeto
function fnGetTitulo() 
{
    // Retornamos el valor de la propiedad
    return "Titulo:"+this.titulo; 
}

// Método a usar por el objeto
function fnGetAutor() 
{
    // Retornamos el valor de la propiedad
    return "<"+this.autor+">"; 
}

// Método para obtener la Editorial
function fnGetEditorial(editorial)
{
    // Retornamos el valor a la propiedad
    return "*"+this.editorial+"*";
}

// Constructor
function fnLibro(titulo, autor,editorial="jaorsoftware press") 
{
    // Cremos los atributos
    this.titulo         = titulo;
    this.autor          = autor;
    this.editorial      = editorial

    // Cremos los métodos setter's
    this.setTitulo      = fnSetTitulo;
    this.setAutor       = fnSetAutor;
    this.setEditorial   = fnSetEditorial;

    // Creamos los métodos getter's
    this.getTitulo      = fnGetTitulo;
    this.getAutor       = fnGetAutor;
    this.getEditorial   = fnGetEditorial;
}


// Crea un objeto usando el Constructor
var libro = new fnLibro("La Biblia de JavaScript","JAOR");


// desplegamos cada una de sus propiedades
console.log("Desplegamos el Valor de las Propiedaddes directamente")
console.log("Titulo     :",libro.titulo)
console.log("Autor      :",libro.autor)
console.log("Editorial  :",libro.editorial)
console.log(" ")

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log(propiedad,"->",libro[propiedad])
console.log(" ")    


// Obtenemos el titulo, autor y la editorial a a través de los getter's
console.log("Título    :",libro.getTitulo()); // <- Con el getter
console.log("Título    :",libro.titulo);      // Directamente
console.log("Autor     :",libro.getAutor());
console.log("Autor     :",libro.autor);
console.log("Editorial :",libro.getEditorial());
console.log("Editorial :",libro.editorial);
