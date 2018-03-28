nombre = 'Francisco'


var saludar = function() {
    console.log('hola, mi nombre es ' + this.nombre)
}

var miObjeto = {nombre: 'Carla'}

var miEnlace = saludar.bind(miObjeto)
miEnlace()

saludar.bind({nombre:'Matias'})()