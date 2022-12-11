// -----------------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 53_setters_getters_parametros_default.js
// En JavaScript no hay modificadores de tipo, es decir no se puede establecer
// variables o funciones privadas
// -----------------------------------------------------------------------------

// Mensaje
console.log("53 Setter's Getter's Parámetros por default")
console.log()


// Definimos una clase para personas
class Persona
{    
    // Método onstructor
    constructor(nombre,genero,edad,peso=65,estatura=1.70)
    {
        // Defines propiedades para la Clase
        this.nombre   = nombre;
        this.genero   = genero;
        this.edad     = edad;
        this.peso     = peso;
        this.estatura = estatura;
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

    // Setter's
    setNombre(nombre)
    {
        // Coloca el valor
        this.nombre = nombre
    }
    setGenero(genero)
    {
        // Coloca el valor
        this.genero = genero
    }
    setEdad(edad)
    {
        // Coloca el valor
        this.edad = edad
    }
    setPeso(peso)
    {
        // Coloca el valor
        this.peso = peso
    }
    setEstatura(estatura)
    {
        // Coloca el valor
        this.estatura = estatura
    }

    // Getter's
    getNombre()
    {
        // Obtiene el valor
        return this.nombre
    }
    getGenero()
    {
        // Obtiene el valor
        return this.genero
    }
    getEdad()
    {
        // Obtiene el valor
        return this.edad
    }
    getPeso()
    {
        // Obtiene el valor
        return this.peso
    }
    getEstatura()
    {
        // Obtiene el valor
        return this.estatura
    }
}


// Creamos un objeto de la Clase Persona
persona1 = new Persona("Juan Perez","Masculino", 53,60,1.80)
persona2 = new Persona("Pedro Ramírez","Masculino", 35,75)
persona3 = new Persona("Benito Bodoque","Masculino", 53)
persona4 = new Persona("Pablo Marmol","Masculino")



// Desplegando la información de la Persona y del Empleado
persona1.despliegaInformacion()
persona2.despliegaInformacion()
persona3.despliegaInformacion()
persona4.despliegaInformacion()

// Cambia los datos con los setter's
persona1.setNombre("Juana de Arco")
persona1.nombre =""
persona1.setGenero("Femenino")
persona1.setEdad("35")
persona1.setPeso(75)
persona1.setEstatura(1.80)
persona1.despliegaInformacion()

// Obteniendo los datos individualmente
console.log(persona1.getNombre())
console.log(persona1.nombre)
console.log(persona1.getGenero())
console.log(persona1.getEdad())
console.log(persona1.getPeso())
console.log(persona1.getEstatura())
