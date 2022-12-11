// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 26_strings.js
// ----------------------------------------------------------------------

// Caracteres de escape
// \b	Backspace
// \n	New Line                      
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

// Mensaje
console.log("26 Strings")

// Comillas simples dentro de Dobles
var negocio="La 'Super Mini'";

// Despliego la variable
console.log(negocio);

negocio='La "Super Mini"';
console.log(negocio);

// Longitud de una cadena
console.log(negocio.length)

negocio ="La \"Supermini\"";
console.log(negocio);

negocio ="La \\Supermini\\";
console.log(negocio);

negocio ="Tiene icon\'s";
console.log(negocio);

negocio ="Nueva Linea \n";
console.log(negocio);

negocio ="Retorno de Carro \r";
console.log(negocio);
console.log("--->")
                    
negocio ="Reg \t Nombre \t Apellido";
console.log(negocio);
console.log("01 \t Juan \t\t Perez")

// Métodos
var str = "En un canal de Youtube, del cual no puedo olvidarme ...";
var pos = str.indexOf("Youtube");

console.log("indexOf Pos de 'Youtube':",pos)
console.log()

// Asigna otra cadena
str= "ser o no ser"

// Obtiene la ultima ocurrencia de ser
pos = str.lastIndexOf("ser")
console.log("lastIndexOf Pos de el ultimo 'ser':",pos)
console.log()

// Los 2 métodos anteriores, pueden usar un segundo parámetro 
// para indicar a partir de que posición buscar

str = "En un canal de Youtube, del cual no puedo olvidarme ...";
pos = str.indexOf("Youtube",10);
console.log("indexOf Pos de 'Youtube' a partir de 10:",pos)
console.log()



// El método search
str = "Por favor localiza donde esta la palabra 'localiza' en esta cadena";
pos = str.search("localiza");
console.log("search Pos de localiza:",pos)
console.log()

// Diferencia entre indexOf y search
// El método search() no tiene  el segundo parámetro 
// El método indexOf() no puede realizar búsquedas con 
// expresiones regulares

// Método Slice
//         01234567891123456789
var str = "Mango, Pera, Naranja";
var res = str.slice(7, 11);
console.log("slice res:",res)
console.log()

//     09876543211987654321
str = "Mango, Pera, Naranja";
var res = str.slice(-13, -9);
console.log("slice res:",res)
console.log()

// Sin el segundo parámetro
res = str.slice(7);
console.log("slice res:",res)
res = str.slice(-13);
console.log("slice res:",res)
console.log()

// El Método substring es similar, solo que no acepta negativos
str = "Apple, Banana, Kiwi";
res = str.substring(7, 13);
console.log("substring res:",res)
res = str.substring(7);
console.log("substring res:",res)
console.log()

// El Método substr() es similar a slice, solo que el segundo
// parámetro indica el numero de caracteres a obtener

res = str.substr(7, 6);
console.log("substr res:",res)
res = str.substr(7);
console.log("substr res:",res)
console.log()

nuevaCadena = str.replace("Apple","Manzana")
console.log("replace nuevaCadena:",nuevaCadena)
console.log()

nuevaCadena = str.toUpperCase();
console.log("replace nuevaCadena:",nuevaCadena)

nuevaCadena = str.toLowerCase();
console.log("replacenuevaCadena:",nuevaCadena,str)
console.log()

var text1 = "Hola";
var text2 = "Mundo";
var text3 = text1.concat(" ", text2);
console.log("Concat:",text3,text1)
console.log()

str = "       Hola Mundo        ";
console.log("Trim:",str.trim());

// Extrayendo caracteres
str="Hola Mundo"
console.log(str[0]);
str[0]='X' // No funciona
console.log()
console.log(str[0]);
console.log("charAt:",str.charAt(0));
console.log("charCodeAt:",str.charCodeAt(0));
console.log()

var txt = "a|b|;;;|deee|1231";   // String
console.log(txt.split(","));          // Split on commas
console.log(txt.split(" "));          // Split on spaces
console.log(txt.split("|")); 
