// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 39_arrays_metodos_2.js
// Arreglos y sus métodos segunda parte
// ----------------------------------------------------------------------

// Mensaje
console.log("39 Arreglos y sus métodos 2")

// Función mensaje
function msgHolaMundo(persona)
{
    // Tabla de Multiplicar
    console.log("Hola",persona)
}

// Definiendo un arreglo
var lenguajes = ["Pascal","Fortran","C++", "Java", "Python"];
var sistemas  = ["Windows", "Linux", "Macintosh","C++"];
var datos     = ["Juan Perez",true,35,75.50,"Agustin Melgar",sistemas,msgHolaMundo];


// Agregando por indice
lenguajes[5]="Ruby"
console.log("lenguajes:",lenguajes)
lenguajes[7]="Ensamblador"
console.log("lenguajes:",lenguajes)
console.log()

// Eliminando por indice
delete lenguajes[0]
console.log("lenguajes:",lenguajes)
console.log()

// Verificando si está vacío
if (lenguajes[0]==null)
   console.log("Vacío la posición 0")
if (lenguajes[6]==null)
   console.log("Vacío la posición 6")
console.log()   

// Inserto sin Eliminar con splice
console.log("Utilizando splice ...")
console.log("lenguajes:",lenguajes)
lenguajes.splice(0, 0, "NsBasic", "Code Warrior");
console.log("lenguajes:",lenguajes)
console.log()
lenguajes = ["Pascal","Fortran","C++", "Java", "Python"];

// Inserto Eliminando
console.log("splice eliminando e insertando")
console.log("lenguajes:",lenguajes)
lenguajes.splice(1, 2, "NsBasic", "Code Warrior");
console.log("lenguajes:",lenguajes)
console.log()

// Eliminando sin insertar
console.log("lenguajes:",lenguajes)
lenguajes.splice(2, 1);
console.log("lenguajes:",lenguajes)
console.log()

// Concatenando Arrays
console.log("Concatando Arrays ...")
sistemasLenguajes = sistemas.concat(lenguajes)
console.log("sistemas y lenguajes:",sistemasLenguajes)
console.log()

sistemasLenguajesDatos = sistemas.concat(lenguajes,datos)
console.log("sistemas, lenguajes y datos:",sistemasLenguajesDatos)
console.log()

sistemas =["algo","otro","tres"]
sistemasAdicionales = sistemas.concat(['Ensamblador','Prolog'])
console.log("sistemas adicionales:",sistemasAdicionales)
console.log()

// Slice para crear un nuevo arreglo partiendo de otro
sistemasNuevo = sistemasAdicionales.slice(1);
console.log("SistemasNuevo:",sistemasNuevo)
sistemasNuevo = sistemasAdicionales.slice(1,3);
console.log("SistemasNuevo:",sistemasNuevo)
sistemasNuevo = sistemasAdicionales.slice(3,3);
console.log("SistemasNuevo:",sistemasNuevo)
sistemasNuevo = sistemasAdicionales.slice(2);
console.log("SistemasNuevo:",sistemasNuevo)


