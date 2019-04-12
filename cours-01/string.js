


// LENGTH
const mot = "Kangourou";
const longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // 9

// MAJUSCULE MINUSCULE
const motInitial = "Bora-Bora";
console.log(motInitial.toLowerCase());  // "bora-bora"
console.log(motInitial.toUpperCase());  // "BORA-BORA"
console.log(motInitial);  // "Bora-Bora"

// COMPARER DEUX CHAINES 
const chaine = "azerty";
console.log(chaine === "azerty"); // true
console.log(chaine === "qwerty"); // false
console.log("Azerty" === "azerty"); // false (à cause du A majuscule)
// La conversion en minuscules ou en majuscules est souvent utilisée pour comparer une valeur saisie par l'utilisateur 
// (donc comportant potentiellement des minuscules et/ou des majuscules) à une valeur prédéfinie.
const valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter");  // false (à cause du Q majuscule)
console.log(valeurSaisie.toLowerCase() === "quitter");  // true

// Pour accéder à un caractère d'une chaîne, on ajoute[] à la chaîne, 
// en indiquant entre les crochets l'indice du caractère : maChaine[monIndice].
const sport = "Tennis-ballon"; // 13 caractères
console.log(sport[0]); // "T"
console.log(sport[6]); // "-"
console.log(sport[13]); // undefined (longueur dépassée)

// Le code ci-dessous parcourt la variableprenom pour afficher chacun de ses caractères.
const prenom = "Marion";
for (let i = 0; i < prenom.length; i++) {
  console.log(prenom[i]);
}

for (const lettre of prenom) { //Cette syntaxe est conseillée si l'indice des caractères n'est pas nécessaire dans le corps de la boucle.
  console.log(lettre);
}


//Transformer une chaîne en tableau
const prenom = "Odile";
const tabPrenom = Array.from(prenom);
tabPrenom.forEach(lettre => {
  console.log(lettre);
});


// Rechercher dans une chaine 
const chansoon = "Honky Tonk Women";
console.log(chansoon.indexOf("Honk")); // 1
console.log(chansoon.indexOf("tonk")); // -1 (car erreur : -1)


// rechercher une valeur en début ou fin de phrase 
const chanson = "Honky Tonk Women";

console.log(chanson.startsWith("Honk")); // true
console.log(chanson.startsWith("honk")); // false
console.log(chanson.startsWith("Tonk")); // false

console.log(chanson.endsWith("men")); // true
console.log(chanson.endsWith("Men")); // false
console.log(chanson.endsWith("Tonk")); // false

// decomposer une chaine en sous parties 
const listeMois = "Jan,Fev,Mar,Avr,Mai,Jun,Jul,Aou,Sep,Oct,Nov,Dec";
const mois = listeMois.split(",");
console.log(mois[0]); // "Jan"
console.log(mois[11]); // "Dec".


// Compter les voyelles
// Nombre de voyelles
function compterVoyelles(mot) {
    let nbVoyelles = 0;
    for (const lettre of mot) {
      const lettreMin = lettre.toLowerCase();
      if (
        lettreMin === "a" ||
        lettreMin === "e" ||
        lettreMin === "i" ||
        lettreMin === "o" ||
        lettreMin === "u" ||
        lettreMin === "y"
      ) {
        nbVoyelles++;
      }
    }
    return nbVoyelles;
  }
  
  console.log(compterVoyelles("RadAr")); // 2
  console.log(compterVoyelles("Tic et Tac")); // 3
  console.log(compterVoyelles("Oasis Oasis Oh")); // 7
  
