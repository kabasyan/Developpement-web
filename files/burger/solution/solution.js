
//1 Modiﬁer le texte du titre h1 avec "Le meilleur burger »
//2 Modiﬁer le HTML du deuxième h2, pour mettre "Il est <strong>délicieux</strong>, essayez-le! »
//3 Récupérer l'objet "Pain du haut", et modiﬁer sa largeur (en %)
//4 Récupérer la deuxième boulette, et lui rajouter la classe css "pickle »
//5 Récupérer la troisième boulette et augmenter sa largeur à 90px;
//6 Récupérer la tomate, et modiﬁer sa couleur de fond en orange
//7 Pour chaque tranche de fromage, augmenter l'arrondi de la bordure
  //1ere methode :
  //2eme methode :
//8 Rajouter une nouvelle tranche de fromage entre les deux steaks
//9 Rajouter un attribut id ayant pour valeur 'bottom' au pain du bas
//10. Prendre le lien 'documentation officielle' et:
      //modifier l'adresse du lien pour mettre "https://www.google.fr"
      //et faire en sorte qu'il s'ouvre dans un nouvel onglet
//11. DUPLIQUER l'assiette avec une fonction faite pour ça,
// et mettre la nouvelle assiette tout en bas
// (en dessous de la 1ere)





//1 : Modifier le texte du titre h1 avec "Le meilleur burger"
    var titre = document.getElementsByTagName('h1');
    var texteTitre = titre[0]; //utilisation d'une variable intermediaire

    texteTitre.innerHTML = "Le meilleur burger";

    // également en une seule ligne, avec un autre getter d'éléments
    //document.querySelector('h1').innerHTML = "Le meilleur burger";



// 2. Modifier le HTML du deuxième h2, pour mettre "Il est <strong>délicieux</strong>, essayez-le!"
    var titre = document.getElementsByTagName('h2')[1];
    titre.innerHTML = "Il est <strong>délicieux</strong>, essayez-le";



//3 Récupérer l'objet "Pain du haut", et modifier sa largeur (en %)
    // 1ere methode
     document.getElementById('top').style.width="90%";

//    2eme methode
//    document.getElementById('top').setAttribute('style', 'width:40%;');



//4 Récupérer la deuxième boulette, et lui rajouter la classe css "pickle";
    var meatball = document.getElementsByClassName('meatball')[1];
    meatball.classList.add('pickle');



//5 Récupérer la troisième boulette et augmenter sa largeur à 90px;
    document.getElementsByClassName('meatball')[2].style.width="90px";



//6 Récupérer la tomate, et modifier sa couleur de fond en orange
    document.querySelector('.tomato').style.backgroundColor="orange";



//7  Pour chaque tranche de fromage, augmenter l'arrondi de la bordure
    //1ere methode
    var cheeses = document.getElementsByClassName('cheese');
    for (i=0; i<cheeses.length; i++) {
    cheeses[i].style.borderRadius="50px";
}

//    2eme methode
//    var i=0;
//    while(i<cheeses.length){
//        cheeses[i].style.borderRadius = '50px'; i++;
//    }



//8 Rajouter une nouvelle tranche de fromage entre les deux steaks
    var cheese = document.querySelector('.cheese');

    //clonage
    var newCheese = cheese.cloneNode(true);

    //insertion
    var secondPatty = document.querySelectorAll('.patty')[1];
    secondPatty.before(newCheese);



//9 Rajouter un attribut id ayant pour valeur 'bottom' au pain du bas
    document.querySelector('.bun-bottom').setAttribute('id', 'bottom');

//  2eme methode
//  document.querySelector('.bun-bottom').id = 'bottom';



// 10. Prendre le lien 'documentation officielle' et:
    // modifier l'adresse du lien pour mettre https://www.google.fr
    // faire en sorte qu'il s'ouvre dans un nouvel onglet
    

    var a = document.querySelector('a');
a.href =  'https://www.google.fr';
a.setAttribute('target', '_blank');



// 11. DUPLIQUER l'assiette avec une fonction faite pour ça,
// et mettre la nouvelle assiette tout en bas
// (en dessous de la 1ere)
var burger = document.querySelector('.burger');
var plate = burger.children[burger.children.length - 1];
var newPlate = plate.cloneNode(true);

burger.appendChild(newPlate);
