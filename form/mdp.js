
let inputMdp1 = document.getElementById("mdp1");
inputMdp1.classList.add('mdpToCompare');
let inputMdp2 = document.getElementById("mdp2");
inputMdp2.classList.add('mdpToCompare');

document.addEventListener('change', function () {
    
    let textToCompare1 = inputMdp1.value;
    let textToCompare2 = inputMdp2.value;
    let reponse = document.createElement('div');
    let regex = [0-9];
    
        if (textToCompare1.length < 6 && textToCompare2.length < 6) {    
            console.log(textToCompare1.length)
            document.getElementById("infoMdp").textContent = "";
            reponse.textContent = "Erreur : le mot de passe doit avoir minimum 6 caractères";
            document.getElementById('infoMdp').appendChild(reponse);
        } 
            else if (regex.textToCompare1("@")){
            document.getElementById("infoMdp").textContent = "";
            reponse.textContent = "Erreur : un chiffre est requis.";
            document.getElementById('infoMdp').appendChild(reponse);
        } 
            else if (textToCompare1 != textToCompare1){
            document.getElementById("infoMdp").textContent = "";
            reponse.textContent = "Les mots de passe sont différents";
            document.getElementById('infoMdp').appendChild(reponse);
        } 
            else if (textToCompare1 != textToCompare2){
            document.getElementById("infoMdp").textContent = "";
            reponse.textContent = "Erreur   : les mots de passe sont différents";
            document.getElementById('infoMdp').appendChild(reponse);
        } 
            else if (textToCompare1 === textToCompare2){
            document.getElementById("infoMdp").textContent = "";
            reponse.textContent = "Mots de passe identiques, cliquez sur envoyer";
            document.getElementById('infoMdp').appendChild(reponse);
        }
})


