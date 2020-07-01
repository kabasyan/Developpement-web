

    // DEBUT DECLARATION DES VARIABLES /////////////////////////////////////

    // debut partie Ajouter  ///////////////
    var txtInput = document.querySelector('input[type="text"]');
    var list = document.querySelector('ul');
    var addBtn = document.querySelector('button#ajouter');
    // fin partie Ajouter //////////////
    
    
    // debut partie supprimer ///////////////
    var delBtn = document.querySelector('#supprimer'); //lié au bouton d'action de la supression
    // fin partie supprimer ///////////////
    
    // FIN DECLARATION DES VARIABLES /////////////////////////////////////
    
    
    
    
    
    
    
    // // DEBUT DECLARATION DES FUNCTIONS /////////////////////////////////////
    
    // // debut partie Ajouter  ///////////////
    var ajouter = function(){
      var valeur = txtInput.value;
    
      if (valeur.trim() == ""){
        alert("Le champ est vide");
      } else {
    
        //ajouter une ligne
        list.insertAdjacentHTML('beforeend', '<li><input type="checkbox">'+ valeur + '</li>');
      }
    }
    addBtn.addEventListener('click', ajouter);
    // fin partie Ajouter //////////////
    
    
    
    
    // // debut partie Supprimer ///////////////
    var supprimer = function(){
    
      var items = list.querySelectorAll('li'); //renvoi un tableau composé des li qui se trouvent dans list donc dans les ul
    
      for (i=0; i<items.length; i++){
        var li = items[i]; // > "items[i]" c'est la valeur d'un element du tableau item à l'instant T, ici la valeur d'un 'li'
    
        var checkbox = li.querySelector('input'); //on selectione le input contenu de l'element "li" et on lui attribue la variable "checkbox"
        var isChecked = checkbox.checked; // "element.checked" > signifie 'si lelement est en position "cheké'
    
        if(isChecked){ //les parametres de removeChild n'ont pas de guillemets
          list.removeChild(li); //donc si l'element est en position chéké appliquer la methode "remove child" a l'enfant de "list" donc "li"
        }
      }
      if(items.length == 0){
        alert("List vide !");
      }
    }
    delBtn.addEventListener('click', supprimer) //ici on active le bouton d'action au click
    // // fin partie Supprimer ///////////////
    
    
    
    
    
    // // FIN DECLARATION DES FUNCTIONS /////////////////////////////////////
