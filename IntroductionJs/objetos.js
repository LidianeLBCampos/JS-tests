JSON.parse() //objeto JS <-- JSON
JSON.stringify() //objeto JSON <-- JS


var miObjeto = {
    nombreCompleto: function() {
        return `${this.nombre} - ${this.apellidos}` 
    },
    miFactorial: function factorial(num){
        if(num<0) throw "El numero ha de ser positivo"
        if(num===1 || num===0) return 1;
        return num * factorial(num - 1);
    },
    nombre: "Paco",
    apellidos: "Garcia Lopez",
    casado: false,
    edad: 27,
    multimedia:["dvd", "blue-ray","mp3"],
    coche: {
        marca:"SEAT",
        modelo: "LEON"
    },
    fechaHoy: new Date(),
    unCaracter : "\n",
    3: "casa"
}
console.log(miObjeto.nombreCompleto())