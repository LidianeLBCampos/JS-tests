let cero = 0, uno =1, unoCad ='1', dos = 2;

((c) => {
    c(cero == uno);
    c(cero != uno);
    c(uno == unoCad);
    c(uno === unoCad);
    c(uno !== unoCad);
    c(uno === parseInt(unoCad));
})(console.log);