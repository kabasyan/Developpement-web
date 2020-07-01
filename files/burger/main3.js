
//1 Modiﬁer le texte du titre h1 avec "Le meilleur burger »
document.querySelector('h1').innerHTML='Le meilleur burger ';


//2 Modiﬁer le HTML du deuxième h2, pour mettre "Il est <strong>délicieux</strong>, essayez-le! »
document.querySelector('h2').innerHTML="Il est <strong>délicieux</strong>, essayez-le!";


//3 Récupérer l'objet "Pain du haut", et modiﬁer sa largeur (en %)
document.getElementById('top').style.width="10%";


//4 Récupérer la deuxième boulette, et lui rajouter la classe css "pickle »
var mit = document.getElementsByClassName('meatball')[1];
mit.classList.add('pickle');


//5 Récupérer la troisième boulette et augmenter sa largeur à 90px;
document.getElementsByClassName('meatball')[2].style.width="90";


//6 Récupérer la tomate, et modiﬁer sa couleur de fond en orange
document.querySelector('.tomato').style.backgroundColor="blue";


//7 Pour chaque tranche de fromage, augmenter l'arrondi de la bordure
var chiz = document.getElementsByClassName("cheese");
for (i=0; i<chiz.length; i++){
  chiz[i].style.borderRadius="90%"
}


//8 Rajouter une nouvelle tranche de fromage entre les deux steaks
var chize = document.querySelector('.cheese');

//clonage 
var newChize = chize.cloneNode(true);

//insertion
var secondPatty = document.querySelectorAll('.patty')[1];
secondPatty.before(newChize);


//9 Rajouter un attribut id ayant pour valeur 'bottom' au pain du bas
document.querySelector('.bun-bottom').setAttribute('id', "bottom");


//10. Prendre le lien 'documentation officielle':
var lien = document.querySelector('a');
      // et modifier l'adresse du lien pour mettre "https://www.google.fr"
lien.href="https://www.google.fr"
      //et faire en sorte qu'il s'ouvre dans un nouvel onglet
lien.setAttribute("target", "_blank")


//11. DUPLIQUER l'assiette avec une fonction faite pour ça,
// et mettre la nouvelle assiette tout en bas
// (en dessous de la 1ere)
