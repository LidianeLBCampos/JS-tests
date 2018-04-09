function calcularPrecioTotal(precio){
    var impuestos = 1.21;
    var gastosEnvio = 10;
    var precioTotal = (precio*impuestos)+gastosEnvio;
   return precioTotal;
}

var pTotal = calcularPrecioTotal(23.34);
console.log(pTotal);