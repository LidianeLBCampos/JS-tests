nombre = 'Francisco'
var otroObjeto = {
    nombre: 'Carla'
}
var miObjeto = {
    nombre: 'Juan',
    saludar: function() {
        console.log('hola, mi nombre es ' + this.nombre)
    }
}
miObjeto.saludar();
miObjeto.saludar.call(otroObjeto)
miObjeto.saludar.call()