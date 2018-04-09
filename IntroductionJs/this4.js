nombre = 'Francisco'


var saludar = function() {
    console.log('hola, mi nombre es ' + this.nombre)
}

var miObjeto = {nombre: 'Carla'}
var miOtroObjeto = {nombre: 'Tomasin'}
miObjeto.saludar = saludar
miObjeto.appellidos = "Martinez Guell"
miObjeto.mover = function(){

}
miOtroObjeto.saludar = saludar
miObjeto.saludar();
miOtroObjeto.saludar();
console.log(miObjeto)