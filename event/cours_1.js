/* function clic() {
    console.log("Clic !");
}
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement 
// addEventListener prends deux param : le type et la fonction qui gère l'évenement
boutonElt.addEventListener("click", clic); */

// Meme effet : version plus concise 
// la fonction n'est plus identifiée par un nom et ne peut + etre utilisé ailleurs
// on appelle ca une fonction anonyme
            /* var boutonElt = document.getElementById("bouton"); */
// Ajout d'un gestionnaire pour l'événement click
/* boutonElt.addEventListener("click", function () {
    console.log("clic");
}); */

// Suppression du gestionnaire pour l'événement click
/* boutonElt.removeEventListener("click", clic); */
// Pour pouvoir utiliserremoveEventListener, 
// il faut que la fonction qui gère l'événement n'ait pas été définie de manière anonyme.

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
 document.getElementById("bouton").addEventListener("click", function (e) {
   // console.log("Evènement : " + e.type + ", texte de la cible : " + e.target.textContent);
});

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    //console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

// Affiche des informations sur un événement clavier
function infosClavier(e) {
   // console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
} 

// Gestion de l'appui et du relâchement d'une touche du clavier
/* document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier); */

// Renvoie le nom du bouton souris à partir de son code
/* function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);
// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris); */

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
});

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});