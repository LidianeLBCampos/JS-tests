let instrumentos = [
    'guitarra', 'flauta', 'bateria', 'maracas', 'violin'
]
let inst = 'bateria'
let elemento = instrumentos.find(e => e == inst)
console.log(elemento)

let posicion = instrumentos.findIndex(e => e == inst)
console.log("Posicion:", posicion)
