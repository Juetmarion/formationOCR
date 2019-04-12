// Affiche des informations sur les liens
function infosLiens() {
    let liensElts = document.getElementsByTagName("a");
    let nombreLiens = liensElts.length;
    console.log(nombreLiens);

    if (nombreLiens > 0) {
        console.log(liensElts[0].getAttribute("href"));
        console.log(liensElts[nombreLiens - 1].getAttribute("href"));
    }
}

// Affiche si un élément possède une classe
function possede(id, classe) {
    let instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + id);
    }
}

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher false