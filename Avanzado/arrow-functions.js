var add = function suma(a,b) {
    return a + b;
}

let resultado = add(1,1)
console.log(resultado)

var sumador =(a,b) => {
    a++;
    b++;
 return a+b
}

let resultado2 = sumador(2,2)
console.log(resultado2)

var cuadrado = num => num * num
console.log(cuadrado(5))

var show = () => console.log("Hola mundo ES6!")
show()