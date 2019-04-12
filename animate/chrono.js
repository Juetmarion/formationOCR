
let button = document.querySelector('#start');
button.textContent = "Start";

document.querySelector('#start').addEventListener("click", function(){
    startChrono();
    console.log("click sur start");
    let button = document.querySelector('#start');
    button.textContent = "Stop";
    
    function startChrono (){
        
        let compteurHtml = 0;
        seeChrono.innerHTML += '<div id="phraseChrno"><span id="compteur">'+compteurHtml+'</span> seconde(s) écoulée(s)</div>';
        document.querySelector('#result').appendChild(seeChrono);
        var compteurElt = document.getElementById("compteur");
        function augmenterCompteur() {
            // Conversion en nombre du texte du compteur
            var compteur = Number(compteurElt.textContent);
            while (compteur < 10) {
                compteur = compteur + 1;
                compteurHtml.textContent = compteur;
                let seeChrono = document.createElement("div"); 
                
                console.log(compteur)
            }
            
        } augmenterCompteur();
    }
})