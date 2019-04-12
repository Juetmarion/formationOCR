
var buttonAdd = document.getElementsByTagName("button");
    buttonAdd[0].id = "addDessertButton";

document.getElementById("addDessertButton").addEventListener("click", addDessert);

function addDessert(){
    var dessertName = window.prompt("Nom du dessert : ");
    document.getElementById("desserts").innerHTML += '<li id="dessertAdded">'+ dessertName +'</li>';
    
    document.getElementById("dessertAdded").addEventListener("click", updateDessert);
   
    function updateDessert(){
        var newDessertName = window.prompt("Modification du nom du dessert : ");
        dessertAdded.textContent = newDessertName;
        console.log(dessertAdded);
    }
}

/*
Exercice : modifier une liste CORRECTION
*/

document.querySelector("button").addEventListener("click", function () {
    var nomDessert = prompt("Entrez le nom du nouveau dessert :");

    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    dessertElt.addEventListener("click", function (e) {
        var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
        e.target.textContent = nouveauNom;
    });

    document.getElementById("desserts").appendChild(dessertElt);
});