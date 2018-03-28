function venta(cantidad, precio, cliente='varios') {
    const total = `${cantidad * precio}€ facturados al cliente ${cliente}`
    console.log(total)

}

venta(40, 4.5, 'El corte Inglés')
venta(5, 4.5)

function catalogo(...productos) {
    console.log(productos)
}

catalogo();
catalogo("articulo 1")
catalogo("articulo1", "articulo2")

function tienda(producto, cantidad, precio) {
    console.log(producto, cantidad, precio)
}

tienda(...['portatil Lenovo', 1, 1200])