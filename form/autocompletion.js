// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

let inputPays = document.querySelector("#pays");
let spaceSuggestion = document.querySelector("#suggestions");

inputPays.addEventListener("change", function(){
    console.log(inputPays.value);
    spaceSuggestion.textContent = "";
    listePays.forEach(function(pays){
            console.log(pays);
    })

})