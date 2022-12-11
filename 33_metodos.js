// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 32_Metodos
// Como crear métodos en los objetos
// ----------------------------------------------------------------------

// Clase. Es como un manual para construir un auto
// Objeto. Es lo que se genera usando la Clase

// Mensaje
console.log('32 Métodos en los objetos');

// Método a usar por el objeto
function fnSetTitulo(titulo) 
{
    // Asigna a la propiedad
    this.titulo = titulo; 
}

// Método para agregar la editoria
function fnSetEditorial(editorial)
{
    // Craando la propiedad
    this.editorial = editorial;
}

// Constructor
function fnLibro(titulo, autor) 
{
    // Crea las propiedades del objeto
    this.titulo         = titulo;          // Atributo
    this.autor          = autor;           // Atributo
    this.setTitulo      = fnSetTitulo;     // Método
    this.setEditorial   = fnSetEditorial;  // Método
}

// Crea un objeto usando el Constructor
var libro = new fnLibro("La Biblia de JavaScript","JAOR");

// desplegamos cada una de sus propiedades
console.log("Desplegamos el Valor de las Propiedaddes")
console.log("Titulo     :",libro.titulo)
console.log("Autor      :",libro.autor)
console.log("Editorial  :",libro.editorial)
console.log()

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log(propiedad, libro[propiedad])
console.log("")    

// Agregamos la Editorial
libro.setEditorial("Microsoft Press");

// Cambiamos el Titulo
libro.setTitulo("La Guia definitiva de JavaScript")

// Esto no hace nada
fnSetTitulo("A ver que pasa ...")

console.log("El titulo de la ejcución:",this.titulo)

console.log("Titulo     :",libro.titulo)
console.log("Autor      :",libro.autor)
console.log("Editorial  :",libro.editorial)
console.log()


// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log(propiedad, libro[propiedad])
console.log("")    

// Agregamos un atributo sin una función definida en el constructor
libro.atributoAdicional ="Este"

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log(propiedad, libro[propiedad])
console.log("")    


