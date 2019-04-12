// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

class contructJournaux {
    constructor(journaux){
        this.journaux = journaux;
    }
}

for (let i = 0; i < journaux.length ; i++){
    
    function ajouter(journaux){
     let journauxElt = document.createElement("a");
     journauxElt.textContent = journaux[i];
     journauxElt.href = journaux[i];
     journauxElt.id = "journaux";
     document.getElementById("contenu").appendChild(journauxElt);
     document.getElementById("contenu").appendChild(document.createElement("br"));

    } ajouter(journaux);
}