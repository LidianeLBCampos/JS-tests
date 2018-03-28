var {nombre, peso, sum} = {
    nombre: 'pera',
    peso: 0.78,
    sum: function suma(a,b){
        return a+b
    }
}
var miObjeto = {
    nombre: 'pera',
    peso: 0.78,
    sum: function suma(a,b){
        return a+b
    }
}
var [id, desc, precio] = [45567, 'Monitor HD', 146.5]

let datos = [45567, 'Monitor HD', 146.5]

for(let dato of miObjeto){
    console.log(dato)
}