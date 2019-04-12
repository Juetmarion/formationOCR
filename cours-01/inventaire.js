
// L'inventaire d'un personnage se compose d'un nombre de pièces d'or et d'un nombre de clés.
// Tous les personnages possèdent initialement 10 pièces d'or et une clé.
// L'inventaire doit être affiché dans la description d'un joueur.
// Lorsqu'un personnage tue un adversaire, 
// il récupère dans son propre inventaire le nombre de pièces d'or et de clés de cet adversaire.

class Personnage {
    constructor(nom, vie, force, xp, or, cle){
        this.nom = nom;
        this.vie = vie;
        this.force = force;
        this.xp = 0;
        this.or = 10;
        this.cle = 1;
    } 

    decrire(){
        return `${this.nom} a ${this.vie} points de vie, ${this.force} en force et ${this.xp} point(s) d'expérience, ${this.or} pièces d'or et ${this.cle} clé(s)`;
    }

    attaquer(looser){
        
        console.log(`${this.nom} attaque ${looser.nom} !`)
        looser.vie -= this.force;
        console.log(`${looser.nom} perd ${this.force} points de vie`);
        this.xp += 5; // ajoute 5 en xp pour l'attaquant
        console.log(`La vie de ${looser.nom} est de ${looser.vie}`);

        if (looser.vie > 0){    
                looser.xp += 5;
            } else {
            console.log(`${looser.nom} a été battu et donne ${looser.or} or et ${looser.cle} clé(s) à ${this.nom} ! `);
            this.cle += looser.cle;
            this.or += looser.or;
            }
        } 
}



// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
const aurora = new Personnage("Aurora", 150, 25);
console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 20, 10);
//console.log(monstre.decrire());
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire()); 

