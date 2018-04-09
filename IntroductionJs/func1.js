var imp = function imprimir(salida, numero) {
        salida(aleatoria(numero))
}

function aleatoria(numero) {
          return(Math.floor(Math.random() * numero )) + 1
    }

    imp(console.log, 1000);