let a = 5, b = "5";
console.log(a+b);
console.log(a+Number(b));
console.log(a + +b);

function hacerAlgo(parametro){
    let varLocal = parametro || 1;
    console.log(varLocal);
}

hacerAlgo();
hacerAlgo(5);

function hacerOtraCosa(parametro = 1) {
    console.log(parametro)
}
hacerOtraCosa();
hacerOtraCosa(5);