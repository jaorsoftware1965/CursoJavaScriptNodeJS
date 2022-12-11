// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 36_prototype_agregando_propiedades_metodos
// ----------------------------------------------------------------------

// Método a usar por el objeto
function fnSetTitulo(titulo) 
{
    this.titulo = titulo; 
}

// Constructor
function fnLibro(titulo, autor) 
{
    this.titulo         = titulo;
    this.autor          = autor;
    this.setTitulo      = fnSetTitulo;
}


// Crea un objeto usando el Constructor
var libro = new fnLibro("La Biblia de JavaScript","JAOR");


// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log("Propiedad:",propiedad,"Valor:",libro[propiedad])
console.log("")    

// Tratamos de desplegar la editorial da error
//console.log("Editorial->",libro.getEditorial())
console.log("")    

// Agregamos una propiedad a la función Constructora
fnLibro.prototype.editorial="Microsoft Press"

// Agregamos una función
fnLibro.prototype.getEditorial = function() 
{
    // Retornamos la editorial
    return this.editorial
};

// Agregamos si prototype
libro.sinPrototype="Algo"

// Creamos un nuevo libro
var libro2 = new fnLibro("La Biblia de C++","JAOR");
console.log("Editorial->",libro2.getEditorial())

console.log("Lista de Propiedades del Objeto Libro2")
for (propiedad in libro2)
    console.log("Propiedad:",propiedad,"Valor:",libro2[propiedad])
console.log("")    

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro")
for (propiedad in libro)
    console.log("Propiedad:",propiedad,"Valor:",libro[propiedad])
console.log("") 
console.log("Editorial->",libro.getEditorial())