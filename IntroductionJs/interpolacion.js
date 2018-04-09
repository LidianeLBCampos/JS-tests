const autor = "Julio Perez", 
    asunto = "Recibos pendientes",
    cuerpo = "Estimado Don Julio...";
let msg = `El autor es ${autor}, el asunto es ${asunto} y el mensaje es ${cuerpo}`;

((c) => {
    c(msg);
})(console.log);