// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"]; 
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
} 

maisons.forEach(maison => {
    let addEachMaison = document.createElement("option");
    addEachMaison.value = maison.code;
    addEachMaison.textContent = maison.nom;
    addEachMaison.className = "nomMaison";
    document.querySelector("#maison").appendChild(addEachMaison);
});

document.querySelectorAll("select").forEach(oneOption => {
    oneOption.addEventListener('change', function() {
        document.getElementById("persos").innerHTML = ' ';
        let codeMaison = oneOption.value;
        let listePrenom = getPersonnages(codeMaison);

        listePrenom.forEach(prenom => {
            let prenomListe = prenom;
            prenomListe.textContent = prenom;
            document.getElementById("persos").innerHTML += '<li class="prenom">' + prenomListe + '</li>'; 
        })
    })
}) 
