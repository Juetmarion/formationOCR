// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

class words {
    constructor(terme, definition){
        this.terme = terme;
        this.definition = definition;
    } 
}


for (let i = 0; i < mots.length ; i++){

        let terme = mots[i].terme;
        let definition = mots[i].definition;

        let termeAdded = document.createElement('dt'); 
        termeAdded.setAttribute("style", "font-weight:bold");
        termeAdded.id = "iDTerme";  
        termeAdded.textContent = terme;

        let definitionAdded = document.createElement('dd');
        definitionAdded.setAttribute("style", "font-weight:initial");
        definitionAdded.id = "iDdefinition";
        definitionAdded.textContent = definition;

        function addWord(terme, definition) {
            document.getElementById('contenu').appendChild(termeAdded);
            document.getElementById('contenu').appendChild(definitionAdded); 
        }
        
        addWord(terme, definition);
        
}
