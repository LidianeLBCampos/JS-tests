let aleatorio =() => Math.floor(Math.random()*2);

while(aleatorio()) {
    console.log('hola');
 }

 do {
     console.log('El do-while se ejecuta una vez como miimo');
 } while(aleatorio());