// -------------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 50_propiedades_static.js
// -------------------------------------------------------------------------

// Las propiedades que se definen dentro del constructor son propiedades que
// todos los objetos que se crean, los tendrán en forma individual; cada
// uno tendrá esta propiedad

// Las propiedades static que se definen fuera del constructor; son propiedades
// unicas de la clase; y todos los objetos usarán la misma propiedad

// Mensaje
console.log("49 Propiedades static")
console.log()


// Definimos una clase para libros
class libros
{
    // Propiedades únicas de la clase
    // Contador de objetos construidos
    static contador = 0;

    // Función constructor
    constructor(tit,aut,edi,ISB)
    {
        
        // Defines propiedades para la Clase
        this.titulo    = tit;
        this.autor     = aut;
        this.editorial = edi;
        this.ISBN      = ISB;

        // Incrementa el contador
        libros.contador++;
    
        // Mensaje
        console.log("Se ha creado el libro:",libros.contador)
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
        console.log("Contador  :",libros.contador)
        console.log()
        console.log("Contador  :",this.contador)
    }

    // Contador de Libros
    despliegaContador()
    {
        // Despliega el Contador
        console.log("Desplegando contador:",libros.contador," desde el Libro:",this.titulo)
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

// Despliega el contador
libro1.despliegaContador();
libro2.despliegaContador();
libro3.despliegaContador();

// Ciclo for in
console.log("Lista de Propiedades de la clase libros:")
for (propiedad in libros)
    console.log(propiedad,":", libros[propiedad])
console.log("")

console.log(libro1.contador)
console.log(libro1.autor)