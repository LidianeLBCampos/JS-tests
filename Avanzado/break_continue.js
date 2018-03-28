let aleatorio =() => Math.floor(Math.random()*10)+1;


let par =(num1, num2) =>  num1 % 2 == 0 && num2 == 0; 
  

for(let i=1; i<=10; i++){
    let num_aleatorio = aleatorio();
    console.log(`i vale ${i} y aleatorio vale ${num_aleatorio}`);
    if(par(i, num_aleatorio)) break;
}