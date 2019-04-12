const stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
  };
  
  // Modification de la propriété "couleur"
  stylo.couleur = "rouge";
  
  // "J'écris avec un stylo bille rouge de marque Bic"
  console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);

// Ajout de la propriété "prix"
stylo.prix = "2.5";

// "Mon stylo coûte 2.5 euros"
console.log(`Mon stylo coûte ${stylo.prix} euros`);


// Methode 1
const aurora = {
    nom: "Aurora",
    sante: 150,
    force: 25
  };
  
  // Renvoie la description du personnage
  function decrire(personnage) {
    return `${personnage.nom} a ${personnage.sante} points de vie et ${personnage.force} en force`;
  }
  
  // "Aurora a 150 points de vie et 25 en force"
  console.log(decrire(aurora));

  
// Methode 2
const louise = {
    nom: "Louise",
    sante: 150,
    force: 25,
  
    // Renvoie la description du personnage
    decrire() {
      return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
    }
  };
  
  // "Aurora a 150 points de vie et 25 en force"
  console.log(louise.decrire());

/*   Pour obtenir la description d'un personnage, on utilise maintenant l'expression  aurora.decrire()
  plutôt que  decrire(aurora).  Cette différence est essentielle :

decrire(aurora)  appelle la fonction  decrire()  en lui passant l'objet  perso  en paramètre. 
Dans ce cas, la fonction est externe à l'objet.

aurora.decrire()  appelle la fonction  decrire()  sur l'objet  aurora  . 
Dans ce cas, la fonction fait partie de la définition de l'objet : il s'agit d'une méthode.

Pour appeler une méthode nommée maMethode  sur un objet  monObjet , 
on utilise la syntaxe  monObjet.maMethode().

Attention à ne pas oublier les parenthèses : elles sont obligatoires pour appeler une méthode sur un objet !
*/
const roger = {
    nom: "Roger",
    sante: 100,
    force: 75,
  
    // Renvoie la description du personnage
    decrire() {
      return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
    }
  };
console.log(roger.decrire());



// exercice
const robert = {
    nom: "Robert",
    force: 25,
    vie: 150,
    xp: 0,
    
   decrire(){
      return `${this.nom} a ${this.vie} points de vie, ${this.force} en force et ${this.xp} d'expérience`
    }
  }
  // "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
  console.log(robert.decrire());
  
  console.log("Robert apprend une nouvelle compétence");
  robert.xp += 15;
  
  // "Aurora a 150 points de vie, 25 en force et 15 points d'expérience"
  console.log(robert.decrire());

