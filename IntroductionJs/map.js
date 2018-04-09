let datosEscuela = new Map();
datosEscuela.set('466216', {
                    nombre: 'Paco',
                    soltero : true,
                    edad:45})
datosEscuela.set('123456', {
                    nombre: 'Lucas',
                    soltero:false,
                    edad:47
})


console.log(datosEscuela.has('123456'))
console.log(datosEscuela.get('123456'))