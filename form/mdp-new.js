
document.addEventListener('change', function () {

let motDePasse01 = document.getElementById("mdp1");
    motDePasse01.textContent = motDePasse01.value;
let valeurMdp01 = motDePasse01.value;
let motDePasse02 = document.getElementById("mdp2");
    motDePasse02.textContent = motDePasse02.value;
let valeurMdp02 = motDePasse02.value;

function jugerMdp1(){
    let str = valeurMdp01;
    let nmbrToCheck = /[0-9]/g;
    let matchNum = valeurMdp01.match(nmbrToCheck);
    let reponse = document.createElement('div');

    if (matchNum === null){
      document.getElementById("infoMdp").textContent = "";
      reponse.textContent = "Erreur : le mot de passe doit avoir minimum 1 chiffre";
      document.getElementById('infoMdp').appendChild(reponse);
    } else if (valeurMdp01.length < 6){
      document.getElementById("infoMdp").textContent = "";
      reponse.textContent = "Erreur : le mot de passe est trop petit";
      document.getElementById('infoMdp').appendChild(reponse);  
    } else if (valeurMdp01 != valeurMdp02 || valeurMdp02 === null){
      document.getElementById("infoMdp").textContent = "";
      reponse.textContent = "Erreur : les mots de passe ne correspondent pas";
      document.getElementById('infoMdp').appendChild(reponse); 
    } else if (valeurMdp01 === valeurMdp02){
      document.getElementById("infoMdp").textContent = "";
      reponse.textContent = "Validé : les mots de passe sont identiques";
      document.getElementById('infoMdp').appendChild(reponse); 
    }

}
jugerMdp1();
})