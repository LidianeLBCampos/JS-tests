"use strict";
var textDiv = document.querySelector("input");

var boton = document.querySelector("#addDiv");
var borrar = document.getElementById("borrar");

borrar.onclick = function() {
    if(parrafo){
        parrafo.parentElement.removeChild(parrafo);
        borrar.style.display="none";
    }
}

boton.onclick = crear;
textDiv.onkeypress = function(event) {
    if(event.keyCode==13)
    crear();
}

function crear() {
    var newDiv = document.createElement("div");
    var newTextDiv = document.createTextNode(textDiv.value);
    newDiv.appendChild(newTextDiv);
    document.body.appendChild(newDiv);
}

var parrafos = document.getElementsByTagName("p");
//var parrafo = document.getElementById("medio");
var parrafo = document.querySelector("#medio");


for(var i=0; i<parrafos.length; i++){
    parrafos[i].onmouseover = aclararColorTexto;
}
    function aclararColorTexto(){
    this.style.letterSpacing= "-1px";

    if (this == parrafo)
        this.style.backgroundColor ="#888";
  

}