


var img=[
"img/inte.png",
"img/dev2.png",
"img/exo.png"
];

var num = 0;

function next(){
var slider = document.getElementById("slider");
//
num++;
//
if(num >= img.length){
  num=0;
}
//
slider.src=img[num];
}

// -------nouveau
// // lorsqu'on appui sur NEXT, le systeme fait defilé les images du tableau
// // avec num++
// // a chaque image du tableau
// le system verifie que l'indice de l'image affiché est bien < a la longueur du tableau
// si l'indice de l'image affiché est > alors la boucle est reinitialisé et on repart
// avec la premiere image qui corespond à num=0
// //
// et a chaque tour, l'image de slider.src égal à l'image correspondant à l'indice num.




function prev(){
var slider = document.getElementById("slider");
num--;
// debut incrementation negative
if(num < 0){
  num = img.length-1;
}
//ici si l'indice de la photo actuelle est negative alors num = indice total tableau - 1 = retour en arriere
slider.src=img[num];
// indice image actuelle corespond a la valeur de l'indice de num au cours de l'incrementataion negatif
}
