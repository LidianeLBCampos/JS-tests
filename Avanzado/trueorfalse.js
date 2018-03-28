((c) => {
    if('r') c('r es cierto');
    if("Hola") c("hola es cierto");
    if([]) c("Un array vacio es cierto");
    if({}) c("Un objeto vacio es cierto");
    if(54545) c("Cualquier umero es cierto");
    if(!0) c("Pero el 0 no es cierto!");
    if(!"") c("tampoco la cadena vacia es cierto");
    if(!'') c("tampoco comillas simples");
    let x;
    c(x);
    let y = null;

    c(y);
})(console.log);