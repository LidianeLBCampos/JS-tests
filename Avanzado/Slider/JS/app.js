var imagenes = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
var imgAct = 0;
var prefix = 'img/';
const MAX_LEN_IMG = 6;


var img = document.querySelector('img');

var first = document.querySelector('#first');
var previous = document.querySelector('#previous');
var next = document.querySelector('#next');
var last = document.querySelector('#last');

first.addEventListener('click', e => {
    imgAct = 0;
    let newImg = "<img scr '" + prefix + imagenes[imgAct]+ "');
    img.setAttribute('src', '" + prefix + imagenes[imgAct]+ "');
    
});

previous.addEventListener('click', e => {
    imgAct--;
    if(imgAct !== -1) 
    img.setAttribute('src', '" +prefix + imagenes[imgAct]+ "');
});

next.addEventListener('click', e => {
    imgAct++;
    if(imgAct !== MAX_LEN_IMG) 
    img.setAttribute('src', '" +prefix + imagenes[imgAct]+ "');
});

function showImg(){
    let newImg = prefix + imagenes[imgAct];
    img.setAttribute("src", newImg);
}
