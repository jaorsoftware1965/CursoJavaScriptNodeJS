// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 25_objetos_sentencia_new.js
// Creación de objetos con sentencia new y sin sentencia
// ----------------------------------------------------------------------

// Un objeto es "algo" que puede tener propiedades y funciones

// Ejemplo en C
// int x = 3;
// Integer y = 6;

// Mensaje
console.log('25 Objetos y uso de la Sentencia new');

// Declaramos
var cadena  = "Mensaje del Sistema"
var numero  = 3.1416;
var bandera = true;

// Verificando propiedades
console.log("Longitud de una Cadena:",cadena.length);
console.log("Ajusta un valor a Decimales:",numero.toFixed(3))
console.log("El valor de la Bandera",bandera.valueOf())
console.log("")

// Crea un objeto llamado libro
var libro = new Object();

// Le asigno propiedades al objeto
libro.titulo          = "JavaScript";     
libro.autor           = "Bill Gates";
libro.editorial       = "Microsoft Press";
libro.desplegarAutor  = function(){console.log("autor:",this.autor)}

// usamos la sentencia typeof para verificar que es
console.log("typeof de libro :",typeof(libro));

// Desplegamos el objeto como tal
console.log("Libro:",libro);

// Usamos la función desplegar del objeto
console.log("Desplegamos el autor desde el objeto")
libro.desplegarAutor()


// desplegamos cada una de sus propiedades
console.log("Desplegando las propiedades del objeto")
console.log("Titulo     :",libro.titulo)
console.log("Autor      :",libro.autor)
console.log("Editorial  :",libro.editorial)
console.log("Titulo     :",libro["titulo"])
console.log("Autor      :",libro["autor"])
console.log("Editorial  :",libro["editorial"])
console.log("Funcion    :",libro["desplegarAutor"])
console.log("")

// Definiendo directamente
var carro = {marca:"Ford", 
             modelo:"2010", 
             color:"blanco",
             desplegarMarca:function(){console.log("marca",this.marca)}};

// Agregamos una mas
carro.asientos=5;

// Desplegamos el Tipo
console.log("Typeof de carro:",typeof(carro))

// desplegamos cada una de sus propiedades
console.log("Marca    :",carro.marca)
console.log("Modelo   :",carro.modelo)
console.log("Color    :",carro.color)
console.log("Asientos :",carro["asientos"])
console.log("Funcion  :",carro["desplegarMarca"])
carro.desplegarMarca()
