class Triangulo {
    constructor(l1, l2, l3) {
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
    }

    perimetro() {
        return this.l1 + this.l2 + this.l3
    }
}

class Equilaterio extends Triangulo {
    constructor(l1, l2, l3) {
        super(l1, l2, l3)  
    }

    //Factory Method Pattern
    static crear (l1, l2, l3){
        if(l1 == l2 && l1 == l3)
            return new Equilaterio(l1, l2, l3)
        else
            throw "No es un equilatero"
    }
}
try {
    let tri = Equilaterio.crear(2,2,2)
    console.log(tri.perimetro())
} catch(e) {
    console.log(e)
}

