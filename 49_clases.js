// -------------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 49_clases.js
// Nota Hoisting.
// Las CLases no usan hoisting.
// Esto significa que debe declararse una clase antes de usarla
// En el ES6, conocido como ECMAScript2015, se introdujeron las clases
// -------------------------------------------------------------------------

// Una Clase es un conjunto de información que define como se puede crear
// un objeto

// Un objeto es aquello que se crea a partir de una Clase

// Ejemplo. 
// El plano de construcción de una Casa es una CLASE
// La casa ya construida es el OBJETO que se creo a partir de la CLASE


// Mensaje
console.log("48 Clases")
console.log()

// Funciones para agregar a los objetos
function fnSetPrecio(precio) 
{
    this.precio = precio; 
}
function fnSetLibreria(libreria) 
{
    this.libreria = libreria; 
}

// Definimos una clase para libros
class libros
{
    // Función constructor
    constructor(tit,aut,edi,ISB)
    {
        
        // Defines propiedades para la Clase
        this.titulo    = tit;
        this.autor     = aut;
        this.editorial = edi;
        this.ISBN      = ISB
    
        // Mensaje
        console.log("Se ha creado un libro...")
        console.log()
    }

    // Métodos
    despliegaInformacion()
    {
        // Despliega la información del Libro
        console.log("Titulo    :",this.titulo)
        console.log("Autor     :",this.autor)
        console.log("Editorial :",this.editorial)
        console.log("ISBN      :",this.ISBN)
        console.log("")
    }
}

// Creamos un objeto de la Clase
libro1 = new libros("La Biblia de JS"        ,"Gates, Bill"  ,"MicroSoft Press"   ,"IHU898989")
libro2 = new libros("La Biblia de JavaScript","Black, Joe"   ,"Black Press"       ,"IHU777789")
libro3 = new libros("JavaScript desde 0"     ,"Software,Jaor","JaorSoftware Press","IHU894444")


// Desplegando la información del Libro
libro1.despliegaInformacion()
libro2.despliegaInformacion()
libro3.despliegaInformacion()

// Agregando propiedades individuales (mal llamadas estáticas en algunas referencias)
libro1.precio    = 23.50
libro2.estante   = "12-X"
libro3.lenguaje  = "Español"

// Agregando Métodos Individuales
libro1.setPrecio = fnSetPrecio;

// Agregando propiedades y métodos a la clase que aplica todos los objetos
libros.prototype.libreria ="Biblioteca Municipal"
libros.prototype.setLibreria = fnSetLibreria

// Modifico la libreria del Libro 1
libro1.setLibreria("Libreria Nueva")

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro1:")
for (propiedad in libro1)
    console.log(propiedad,":", libro1[propiedad])
console.log("")

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro2:")
for (propiedad in libro2)
    console.log(propiedad,":", libro2[propiedad])
console.log("")

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro3:")
for (propiedad in libro3)
    console.log(propiedad,":", libro3[propiedad])
console.log("")

// Probando las funciones agregadas
libro1.setPrecio(22.59)

// Ciclo for in
console.log("Lista de Propiedades del Objeto Libro1:")
for (propiedad in libro1)
    console.log(propiedad,":", libro1[propiedad])
console.log("")

// Desplegando la Clase
console.log("Clase Libro:",libros)

// Ciclo for in
console.log("Lista de Propiedades de la clase libros:")
for (propiedad in libros)
    console.log(propiedad,":", libros[propiedad])
console.log("")

// Ejecuta
fnSetPrecio(50)