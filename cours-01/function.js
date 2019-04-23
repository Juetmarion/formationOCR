

// L'opération de création d'une fonction s'appelle la déclaration. Voici sa syntaxe. 
// Déclaration d'une fonction nommée maFonction
function maFonction() {
    console.log("Function");  // Instructions de la fonction
  }
console.log("Début du programme");
maFonction();  //Appel d'une fonction
console.log("Fin du programme");   
 

// Déclaration d'une fonction nommée maFonction
 function myFunction() {
    // Calcul de la valeur de retour
    // return myFunction;  *
     /* Si on essaie de récupérer la valeur de retour 
    d'une fonction qui n'inclut pas d'instruction return, on obtient undefined */
    // return "Function : myFunction !";
    const message = "Function : myFunction !";
    return message;
  }
   
  // Récupération de la valeur de retour de maFonction
  /* let value = myFunction();
  console.log(value); */
   console.log(myFunction()); // "Function myFunction !Bonjour !"
  //console.log(message); // Erreur : la variable message n'existe pas ici





                                                    // Passage de paramètres 



// Déclaration de la fonction maFonction
function maFonction(param1, param2, ...) {
    // Instructions pouvant utiliser param1, param2, ...
  }
  
  // Appel de la fonction maFonction
  // param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
  maFonction(arg1, arg2, ...); 


  function direBonjour(prenom) {
    // Ici, prenom est le paramètre de la fonction
    const message = `Bonjour, ${prenom} !`;
    return message;
  }
  
  // Ici, prenom est une variable utilisée comme argument
  let prenom = "Prenom 1";
  console.log(direBonjour(prenom)); // "Bonjour, Baptiste !"
  prenom = "Prenom 2";
  console.log(direBonjour(prenom)); // "Bonjour, Thomas!"



/*                 // Affectation d'une fonction anonyme à la variable maVariable
const maVariable = function(param1, param2, ...) {
    // Instructions pouvant utiliser param1, param2, ...
    }
    
    // Appel de la fonction anonyme
    // param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
    maVariable(arg1, arg2, ...);
    
// Affectation d'une fonction anonyme à la variable maVariable
constmaVariable=(param1,param2,...)=>{
    // Instructions pouvant utiliser param1, param2, ...
    }
    // Appel de la fonction anonyme
    // param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
    maVariable(arg1,arg2,...);     */
                          



// Ajoutez votre code ici
const chien = {
    nom: "Crockdur", 
    race: "mâtin de Naples", 
    taille: 100,
    
    aboyer() {
      return `Grrrr! Grrr!`
    }
  }

  // "Crockdur est un mâtin de Naples mesurant 75 cm"
  console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);
  
  // "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
  console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);
  



                                           // Modélisation d'un compte bancaire
const compte = {
    titulaire: "Alex",
    solde: 0,
  
    // Ajoute un montant au solde
    crediter(montant) {
      this.solde += montant;
    },
  
    // Renvoie la description du compte
    decrire() {
      return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
    }
  };
  
  // "titulaire: Alex, solde: 0"
  console.log(compte.decrire());
  
  compte.crediter(250);
  compte.crediter(-80);
  
  // "titulaire: Alex, solde: 170"
  console.log(compte.decrire());
  