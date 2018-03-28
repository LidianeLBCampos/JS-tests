var aplication = {
    cliente: {
        nombre: "juan",
        facturar: function() {
            console.log("Facturado a cliente " + this.nombre)
        }
    }
}

var cli = aplication.cliente
cli.facturar