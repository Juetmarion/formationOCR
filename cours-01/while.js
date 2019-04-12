console.log("Début du programme");
let nombre = 1;
while (nombre <= 5) {
  console.log(nombre);
  nombre++;
}
console.log("Fin du programme");


for (initialisation; condition; étape) {
    // instructions exécutées tant que la condition est vérifiée
}


let compteur;
for (compteur = 1; compteur <= 5; compteur++) {
  console.log(compteur);
}



// Exercice 01 : 

// for
const nbTours = 10;
console.log("Le manège démarre");

let nbToursBoucle = nbTours; 
for (nbToursBoucle = 1; nbToursBoucle <= 10; nbToursBoucle++){
  console.log("C'est le tour numéro " + nbToursBoucle); 
}

console.log("Le manège s'arrête");

// While
const nbTours = 10;

console.log("Le manège démarre");

let turnNbTours = 1;
while(turnNbTours <= 10){
  console.log("C'est le tour numéro " + turnNbTours);
  turnNbTours++;
}

console.log("Le manège s'arrête");




// Exercice 02 :

    
// Table de multiplication

const nombre = 7; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

// Solution avec un for
for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// Solution alternative avec un while
/* let i = 1;
while (i <= 10) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
  i++;
} */

