let target = {}
let datosPersonales = {
    nombre : 'Joaquim',
    edad: 27
}

let datosBancarios = {
    cuenta:'123456789',
    pais: 'es'
}

Object.assign(target, datosPersonales, datosBancarios)
console.log(target)