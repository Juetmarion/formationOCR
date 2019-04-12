/* 
let contenu = document.getElementById("contenu");
let position = contenu.getBoundingClientRect();

console.log(position.height);
console.log(position.width);

let blockToAdd = document.createElement("div");
blockToAdd.textContent = "Informations sur l'élément";
blockToAdd.id = "blockToAdd";
document.body.appendChild(blockToAdd);

let liHeight = document.createElement("li");
liHeight.textContent = "Hauteur : " + position.height + "px";
liHeight.id = "liHeight";
let okHeightRound = Math.round(position.height * 10000);
let okHeight = okHeightRound / 10000;
console.log(okHeight);
document.getElementById("blockToAdd").appendChild(liHeight);

let liWidth = document.createElement("li");
liWidth.textContent = "Taille : " + position.width + "px";
let okWidthRound = Math.round(position.width * 10000);
let okWidth = okWidthRound / 10000;
console.log(okWidth);
document.getElementById("liHeight").appendChild(liWidth); */

/*
Exercice : informations sur un élément
*/

var styleElement = getComputedStyle(document.getElementById("contenu"));
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);