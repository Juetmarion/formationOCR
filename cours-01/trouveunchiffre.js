var chiffreDevine = Math.floor(Math.random() * 11);  
console.log(`Chiffre à deviner : ${chiffreDevine}`);

function trouveUnChiffre(){
    var chiffre = window.prompt("Donne un chiffre");
    console.log(`Chiffre donné : ${chiffre}`);
    switch (chiffre){
        case (chiffre < chiffreDevine):
        window.alert("Le chiffre à deviner est plus grand");
        break;
       case (chiffre > chiffreDevine):
        window.alert("Le chiffre à deviner est plus grand");
        break;
        case (chiffre === chiffreDevine):
        window.alert("Bravo!");
    }    



} 

trouveUnChiffre();