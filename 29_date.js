// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 29_date.js
// El Manejo de Fechas en JavaScript
// ----------------------------------------------------------------------

// Mensaje
console.log("29 Fechas")


// Creamos una fecha
var fecha = new Date();
console.log("Fecha actual:",fecha)
console.log(" ")

// Creamos una fecha con datos
fecha = new Date(2019, 8, 14, 6, 10, 20, 30)
console.log("Fecha con Datos:",fecha)

fecha = new Date(2019,9)
console.log("Fecha con Datos 2:",fecha)
console.log(" ")

// Creamos una fecha con milisegundos
fecha = new Date(100000000000)
console.log("Fecha con milisegundos:",fecha)
fecha = new Date(-100000000000)
console.log("Fecha con milisegundos:",fecha)
console.log(" ")

// Creamos una fecha con una cadena
fecha = new Date("2019-09-14 19:10:20:30")
console.log("Fecha con cadena:",fecha)
console.log(" ")

fecha = new Date("Apr 10 2019 12:23:23");
console.log("Fecha con cadena 2:",fecha,fecha.toString())
console.log(" ")


// Convertimos
console.log("Fecha toString          :",fecha.toString())
console.log("Fecha toLocaleDateString:",fecha.toLocaleDateString())
console.log("Fecha toTimeString      :",fecha.toTimeString())
console.log(" ")

// Obtenemos información de la fecha
console.log("Año          :",fecha.getFullYear(fecha))
console.log("Mes          :",fecha.getMonth(fecha))
console.log("Dia          :",fecha.getDay(fecha))
console.log("Hora         :",fecha.getHours(fecha))
console.log("Minuto       :",fecha.getMinutes(fecha))
console.log("Segundo      :",fecha.getSeconds(fecha))
console.log("MiliSegundo  :",fecha.getMilliseconds(fecha))
console.log(" ")

// Creamos una fecha
var fecha = new Date("2019-03-10 12:23:23");
console.log("Fecha ISO DATE:",fecha,fecha.toString())
console.log(" ")

fecha = new Date("03/10/2019 12:23:23");
console.log("Fecha :",fecha,fecha.toString())
console.log(" ")


// Obtener los milisegundos
var milisegundos = Date.parse(fecha)
console.log("mimlisegundos:",milisegundos)
console.log("La Fecha anterior en Milisegundos:",Date.parse(fecha))
console.log(" ")

// Obtener la fecha a partir de milisegundos
fecha = new Date(milisegundos);
console.log("Fecha desde Milesegundos:",fecha.toString())
console.log(" ")

// Suma 1 dia
fecha.setDate(fecha.getDate()+1)

// MEnsaje
console.log("Fecha despues de sumar 1 dia:",fecha.toString())

// Suma 30 dia
fecha.setDate(fecha.getDate()+30)

// MEnsaje
console.log("Fecha despues de sumar 30 dias:",fecha.toString())

// Suma 365 dia
fecha.setDate(fecha.getDate()+365)

// MEnsaje
console.log("Fecha despues de sumar 365 dias:",fecha.toString())

// Restar 5 dias
fecha.setDate(fecha.getDate()-5)

// Mensaje
console.log("Fecha despues de restar 5 dias:",fecha.toString())

