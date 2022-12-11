// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 44 formato json.js
// ----------------------------------------------------------------------

// Mensaje
console.log("44 objetos json")

// Los objetos json siguen la lógica de estructura de los objetos javascript
// Los objetos json podemos definirlos como una forma avanzada de usar
// los objetos java script


// Objeto JavaScript
var carro = {
              // Propiedades del Objeto
              marca:"Ford"     , 
              modelo:2016
            };

// Desplegamos las propiedades
for (propiedad in carro)
{
    // Desplegando cada una de las propiedades
    console.log(propiedad,":",carro[propiedad])
}


// Objeto Json
var auto = 
{
    // Propiedades del Objeto
    marca:"Ford", 
    modelo:2016,
    accesorios:
    {
      radio:true,
      wifi:true,
      aire:true
    },
    sucursales:
    [
      "centro",
      "zona norte",
      "zona sur"
    ]
};

// Desplegamos la información
console.log("carro:",auto)
console.log("carro:",auto.accesorios)
console.log("carro:",auto.accesorios.wifi)
console.log("longitud:",Object.keys(auto).length)

// Desplegamos las propiedades
for (propiedad in auto)
{
    // Desplegando cada una de las propiedades
    console.log(propiedad,":",auto[propiedad])

    for (prop in auto[propiedad])
    {
      // Desplegando cada una de las propiedades
      console.log(prop,":",auto[propiedad][prop])
    }
    
}

// Definimos un arreglo con objetos JavaScript
 var carro = 
 [
     {marca:"Ford"     , modelo:2016}, 
     {marca:"Chevrolet", modelo:2001}, 
     {type :"VW"       , modelo:2010}
 ];


// Ordenmos los datos dentro del objeto
carro.sort(function(a, b){return a.modelo - b.modelo});            
console.log(carro);
console.log(" ")