
/* Avec JavaScript, on peut stocker dans un tableau des éléments de différents types, comme dans l'exemple ci-dessous. */
const tableau = ["Bonjour", 7, { message: "Coucou maman" }, true];
/*
console.log(tableau);
console.log(tableau.length); // on obtient la taille : ici 4 elements
console.log(tableau[0]); // "Bonjour"
console.log(tableau[1]); // 7
console.log(tableau[2]); // Object {message: "Coucou maman"}
console.log(tableau[3]); // true
console.log(tableau[4]); // undefined vu qu'il n'y a que 3 elements ! 
*/

// Parcourir un tableau :
// avec For 
for (let i = 0; i < tableau.length; i++) {
    // console.log("avec for : "+tableau[i]); 
    // Tous les elements ressortent grace a la boucle for 
} 
// avec Foreach 
tableau.forEach(element => {
    // console.log("avec foreach : "+element);
})

// avec for of 
for (const element of tableau){
    // console.log("avec for of : "+element);
}

// ajouter un element a un tableau 
tableau.push("element n° 5 !"); // ajoute l'element en fin de tableau 
// console.log("element ajouté avec push : "+tableau[4]);

tableau.unshift("element n° 6 !"); // ajoute l'element au debut du tableau
// console.log("element ajouté avec unshift : "+tableau[0]); 

tableau.pop(); // supprime le dernier element 
tableau.splice(0, 1); // Son premier paramètre est l'indice à partir duquel supprimer, et le second est le nombre d'éléments à supprimer.

for (const element of tableau){
    console.log("avec for of : "+element);
}






// exercice 
// Somme des valeurs

const nombres = [11, 3, 7, 2, 9, 10];

let somme = 0;

// Solution avec la méthode forEach()
nombres.forEach(nombre => {
  somme += nombre;
});

// Solution alternative avec une boucle for-of
/* for (const nombre of nombres) {
  somme += nombre;
} */

console.log(somme);








// Maximum d'un tableau

const valeurs = [3, 11, 7, 2, 9, 10];

// On initialise la maximum avec le 1er élément du tableau
let max = valeurs[0];

// On commence la recherche au second élément (indice 1)
for (let i = 1; i < valeurs.length; i++) {
  // Si la valeur courante est supérieure au maximum actuel...
  if (valeurs[i] > max) {
    // ... Elle devient le nouveau maximum
    max = valeurs[i];
  }
}

console.log(max);



// résumé : 
for (let i = 0; i < monTableau.length; i++) {
    // monTableau[i] permet d'accéder à l'élément courant du tableau
    }
     
    monTableau.forEach(monElement => {
    // monElement permet d'accéder à l'élément courant du tableau
    });
     
    for (const monElement of monTableau) {
    // monElement permet d'accéder à l'élément courant du tableau
    }