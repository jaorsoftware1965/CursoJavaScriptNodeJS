// ----------------------------------------------------------------------
// Aprende JavaScript desde 0 con NodeJS
// 46_date_getters_setters.js
// Métodos para establecer y obtener valores
// ----------------------------------------------------------------------

// Mensaje
console.log("46 Setter's y Getter's de Fechas")

// getFullYear()	    Get the year as a four digit number (yyyy)
// getMonth()	        Get the month as a number (0-11)
// getDate()	        Get the day as a number (1-31)
// getHours()	        Get the hour (0-23)
// getMinutes()	        Get the minute (0-59)
// getSeconds()	        Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	        Get the time (milliseconds since January 1, 1970)
// getDay()	            Get the weekday as a number (0-6)

// Creamos una fecha
var fecha = new Date("2019-11-16 12:40:23");

// Probando
console.log(fecha.getFullYear())
console.log(fecha.getMonth())
console.log(fecha.getDate())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
console.log(fecha.getTime())
console.log(fecha.getDay())
console.log()

// Setter's
// setDate()	        Set the day as a number (1-31)
// setFullYear()	    Set the year (optionally month and day)
// setHours()	        Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)

// Usando los setter's
fecha.setFullYear(2000)
fecha.setMonth(4)
fecha.setDate(18)
fecha.setHours(20)
fecha.setMinutes(18)
fecha.setSeconds(19)
fecha.setMilliseconds(10)
console.log(fecha.toLocaleString())

console.log(fecha.getFullYear())
console.log(fecha.getMonth())
console.log(fecha.getDate())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
console.log(fecha.getTime())
console.log(fecha.getDay())
console.log()

// Colocar la fecha con milisegundos
fecha.setTime(1573929623000)

// Usando los getter's
console.log(fecha.getFullYear())
console.log(fecha.getMonth())
console.log(fecha.getDate())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
console.log(fecha.getTime())
console.log(fecha.getDay())

