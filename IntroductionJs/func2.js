var saludar = function(persona, saludo) {
    var texto = `${saludo}, ${persona}`
        return function() {
        console.log(texto);
    }
}

var saludandoEzequiel = saludar('ezequiel', 'buendia')

saludandoEzequiel();