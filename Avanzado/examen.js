var texto = "Esa casa es muy antigua. En ella vive una familia importante originaria de Teruel";
var a=0, e=0, i=0, o=0, u=0;
array=texto.split("")

for(var y =0; y<array.length; y++){
  if(array[y] ==='a' || array[y] ==='A'){
      a++;
  } else if(array[y] ==='e' || array[y] ==='E'){
    e++;
  } else if(array[y] ==='i' || array[y] ==='I'){
      i++;
  } else if(array[y] ==='o' || array[y] ==='O'){
      o++;
  } else if(array[y] ==='u' || array[y] ==='u'){
      u++;
  }

 }
console.log(a + "," + e);





