// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 45_json_recursivo.js
// ----------------------------------------------------------------------

// Mensaje
console.log("45 funcion recursiva json")


// Función recursiva para recorrer la información de un objeto json
function fnDisplayJsonRecursivo(objeto)
{
  // Desplegando lo que esta analizando
  console.log("Analizando:",objeto)
  console.log("Tipo      :",typeof(objeto))

  // Desplegamos las propiedades
  for (propiedad in objeto)
  {
      // Desplegando cada una de las propiedades
      console.log(propiedad,":",objeto[propiedad])       
      
      // Verifica si tiene mas de una para llamar a la recursividad
      //if (Object.keys(objeto[propiedad]).length > 1)
      if (typeof(objeto[propiedad]) != "string")
         // Llamo recursivamente a la función
         fnDisplayJsonRecursivo(objeto[propiedad])
  }
}


// Objeto Json de Ejemplo
datos = 
[
  {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": 
      [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast",
        {x:10,y:20}
      ]
  },
  {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": 
      [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
  }
]

// Llamo a la función con el objeto
fnDisplayJsonRecursivo(datos)




