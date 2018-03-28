var obj1 ={
    nombre:'paco',
    amigo: {
        nombre:'fran',
        imprimir: function() {
            console.log(this.nombre + " es amigo de " + this.nombre')
            
        }
    } 
}
obj1.amigo.imprimir();