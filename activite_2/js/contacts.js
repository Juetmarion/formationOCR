/* 
Activité : gestion des contacts
Ecrire un petit gestionnaire de contacts dans le fichier contacts.js.
*/

class Contacts {
        constructor(prenom, nom) {
          this.prenom = prenom;
          this.nom = nom;
    }

    // on ressort les clients deja .push 
    decrire() {
        return ` Prénom: ${this.prenom} \n Nom: ${this.nom}`;
    } 
} 

    function faireUnChoix(listeContact) {
        // prompt pour récupéré l'option
        const option = Number(prompt("Entrez une option : \n 1: Afficher liste \n 2: Ajouter nouveau client \n 3: Fin"));
        
        switch (option) {
            case 1:            
                for (let i=0; i < listeContact.length; i++ ){
                    console.log(`Prénom: ${listeContact[i].prenom}, Nom: ${listeContact[i].nom}`);
                }
            break;
            
            case 2:
            const nouveauPrenom = prompt("Entrez un prénom : ");
            const nouveauNom = prompt("Entrez un nom : ");
            const nouveauClient = new Contacts(nouveauPrenom, nouveauNom);
            listeContact.push(nouveauClient);
                // réafficher la liste complète des contacts
                console.log("Le nouveau client a été ajouté ! Voici la liste complète des clients : ")
                for (let i=0; i < listeContact.length; i++ ){
                    let j = i + 1; // On incrémente afin d'obtenir le numéro correspondant au client
                    console.log(`Contact n°${[j]} => Prénom: ${listeContact[i].prenom}, Nom: ${listeContact[i].nom}.`);
                }
            break;

            case 3:
            console.log("Touche 3 : Arrêt du programme");
            break;
        }
        
    } 
    
    const listeContact = [];

    const carole = new Contacts("Carole", "Lévisse");
    listeContact.push(carole);
    const melodie = new Contacts("Mélodie", "Nelson");
    listeContact.push(melodie);

    faireUnChoix(listeContact); 
