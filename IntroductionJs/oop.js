class Figura {
    constructor(nombre, radio) {
        this.nombre = nombre
        this.radio = radio
    }
    area(){
        return Math.pow(this.radio, 2) * Math.PI
    }
}

let fig = new Figura("Circunferencia", 2.5)
console.log(fig)
console.log(fig.area())