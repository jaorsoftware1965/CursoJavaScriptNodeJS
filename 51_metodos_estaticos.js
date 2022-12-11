// -------------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 51_metodos_estaticos.js
// -------------------------------------------------------------------------


// Los métodos estáticos se utiliza directamente desde la Clase

// Mensaje
console.log("50 Métodos Estáticos")
console.log()


// Definimos una clase para libros
class libros
{    
    // Variable static
    static contadorLibros = 0

    // Función constructor
    constructor(titulo,autor,editorial,ISBN)
    {
        // Defines propiedades para la Clase
        this.titulo    = titulo;
        this.autor     = autor;
        this.editorial = editorial;
        this.ISBN      = ISBN
        
        // Incrementa el Contador
        libros.contadorLibros++

        // Mensaje
        console.log("Se ha creado el libro:",libros.contadorLibros)        
    }

    // Métodos
    despliegaInformacion()
    {
        // Despliega la información del Libro
        console.log("Titulo    :",this.titulo)
        console.log("Autor     :",this.autor)
        console.log("Editorial :",this.editorial)
        console.log("ISBN      :",this.ISBN)
        console.log("Contador  :",libros.contadorLibros)
        console.log("")
    }

    // Método estático
    static despliegaPropiedades(objeto)
    {
        // Defino la variable para las propiedades
        var propiedad;

        // Ciclo for in
        console.log("Lista de Propiedades del Objeto:")
        for (propiedad in objeto)
            console.log(propiedad,":", objeto[propiedad])
        console.log("")
    }

    // Método estático
    static despliegaContadorLibros()
    {
        console.log("Libros creados:",libros.contadorLibros)
    }
}

// Creamos un objeto de la Clase
libro1 = new libros("La Biblia de JS"        ,"Gates, Bill"  ,"MicroSoft Press"   ,"IHU898989")
libros.despliegaContadorLibros()
libro2 = new libros("La Biblia de JavaScript","Black, Joe"   ,"Black Press"       ,"IHU777789")
libros.despliegaContadorLibros()
libro3 = new libros("JavaScript desde 0"     ,"Software,Jaor","JaorSoftware Press","IHU894444")
libros.despliegaContadorLibros()


// Desplegando la información del Libro
libro1.despliegaInformacion()
libro2.despliegaInformacion()
libro3.despliegaInformacion()

// Agregando propiedades individuales (mal llamadas estáticas en algunas referencias)
libro1.precio    = 23.50
libros.despliegaPropiedades(libro1)

libro2.estante   = "12-X"
libros.despliegaPropiedades(libro2)

libro3.lenguaje  = "Español"
libros.despliegaPropiedades(libro3)

// Agregando propiedades y métodos a la clase que aplica todos los objetos
libros.prototype.libreria ="Biblioteca Municipal"

// Desplegamos información de la Clase con el método estático
libros.despliegaPropiedades(libro1)
libros.despliegaPropiedades(libro2)
libros.despliegaPropiedades(libro3)