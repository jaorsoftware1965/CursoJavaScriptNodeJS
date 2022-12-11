// ------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 52_herencia.js
// Implementación de la herencia
// ------------------------------------------------------------

// Mensaje
console.log("52 Herencia")
console.log()


// Definimos una clase para personas
class Persona
{    
    // Variable para contar las personas
    static contadorPersonas = 0;

    // Método onstructor
    constructor(nombre,genero,edad,peso,estatura)
    {
        // Defines propiedades para la Clase
        this.nombre   = nombre;
        this.genero   = genero;
        this.edad     = edad;
        this.peso     = peso;
        this.estatura = estatura;
        Persona.contadorPersonas++;
    }

    // Métodos
    despliegaInformacion()
    {
        // Despliega la información del Libro
        console.log("Desplegando información de la Persona")
        console.log("Nombre    :",this.nombre)
        console.log("Genero    :",this.genero)
        console.log("Edad      :",this.edad)
        console.log("Peso      :",this.peso)
        console.log("Estatura  :",this.estatura)
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
    static despliegaContador()
    {
        // Despliega
        console.log("Contador de Personas:",Persona.contadorPersonas)
    }
}

// Defino una clase que Herencia
class Empleado extends Persona
{
    // Variables estaticas para contar por area
    static contadorContabilidad = 0;
    static contadorSistemas = 0;

    // Método Constructor
    constructor(nombre,genero,edad,peso,estatura,area,salario)
    {
        // ejecuta el super de la clase padre
        super(nombre,genero,edad,peso,estatura)
     
        // Defines propiedades para la Clase
        this.area     = area;
        this.salario  = salario;

        // Actualiza contadores
        if (area=="Contabilidad")
            Empleado.contadorContabilidad++
        else
            Empleado.contadorSistemas++    
    }

    // Métodos
    despliegaInformacionEmpleado()
    {
        console.log("Desplegando información del Empleado")
        console.log("Nombre    :",this.nombre)
        console.log("Genero    :",this.genero)
        console.log("Edad      :",this.edad)
        console.log("Peso      :",this.peso)
        console.log("Estatura  :",this.estatura)
        console.log(" ")

        // Llamamos al metodo padre
        this.despliegaInformacion()

        console.log("Desplegando información del Empleado")
        console.log("Area      :",this.peso)
        console.log("Salario   :",this.salario)        
        console.log("")
    }
    
    // Método 
    static despliegaContadorArea(objeto)
    {
        // Verifica area
        if (objeto.area == "Contabilidad")
            // Despliega
            console.log("Contador de Empleados de Contabilidad:",Empleado.contadorContabilidad)
        else
            // Despliega
            console.log("Contador de Empleados de Sistemas:",Empleado.contadorSistemas)
    }
}


// Creamos un objeto de la Clase Persona
persona1 = new Persona("Juan Perez","Masculino", 33, 70.500, 1.53)

// Creamos un objeto de la Clase Empleado
empleado1 = new Empleado("Benito Bodoque","Masculino", 18, 65, 1.70,"Contabilidad",12500)
empleado2 = new Empleado("Don Gato"      ,"Masculino", 28, 65, 1.75,"Sistemas",12500)
empleado3 = new Empleado("Pedro Picapiedra","Masculino", 38, 85, 1.80,"Contabilidad",12500)

// Desplegando la información de la Persona y del Empleado
persona1.despliegaInformacion()
empleado1.despliegaInformacion()
empleado1.despliegaInformacionEmpleado()

Empleado.despliegaContador()
Empleado.despliegaContadorArea(empleado1)
Empleado.despliegaContadorArea(empleado2)


