
var zoneT = document.getElementById("zoneTexte")

zoneT.addEventListener("keyup", function(){
var compteur = document.getElementById("compteur")
compteur.innerHTML = zoneT.value.length
})
