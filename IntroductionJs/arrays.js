let vector = [];
vector.push(1);
vector = vector.concat(2, 4, 5);

let pares = vector.filter(e => e%2 ==0);
console.log(pares);

let cuadrados = vector.map(e => e % 2 == 0);


//let total = vector.reduce((total, e) => total + e); manera moderna

let suma = function(total, e){ //manera clásica
    return total + e;
};
let total = vector.reduce(suma);


console.log("la suma es: " + total);

