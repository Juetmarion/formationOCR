// TODO : écrire la fonction compterElements
function compterElements(Elt){
    let EltCount = document.querySelectorAll(Elt).length;
    return EltCount;
}
console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2