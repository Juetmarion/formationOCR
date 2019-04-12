/* 
function convertLetterToLeet(word) {
    let wordMin = word.toLowerCase(); ; 
    //const tabWordMin = Array.from(wordMin);
    //return tabWordMin;
    //return wordMin;
   /*  for (let i = 0; i < wordMin.length; i++) {
        //console.log(wordMin[i]); 
        let letter = wordMin[i];
        // console.log(letter);
        if (letter === "a"){
            letter = 4;
        } else if (letter === "b"){
            letter = 8;
        } else if (letter === "e"){
            letter = 3;
        } else if (letter === "l"){
            letter = 1;
        } else if (letter === "o"){
            letter = 0;
        } else if (letter === "s"){
            letter = 5;
        };  */

        
        //letter = letter[i];
        //console.log(letter);
        
    /* } console.log(wordMin);
    console.log(letter);
 } */
 // console.log(convertLetterToLeet("Hello World!")); // "H3110 W0r1d!"
 // console.log(convertirLettreLeet("Noob")); // "N008"
 // console.log(convertirLettreLeet("Hacker")); // "H4ck3r"
 //console.log(motMin);
 //console.log(convertLetterToLeet("Hello World!"));
 //console.log(convertLetterToLeet("Noob"));
 //console.log(convertLetterToLeet("Hacker")); */

 // CORRECTION 
 // Leet Speak

// Renvoie l'équivalent "leet speak" d'une lettre
function convertirLettreLeet(lettre) {
    // Par défaut, la lettre ne change pas
    let lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
      case "a":
        lettreLeet = "4";
        break;
      case "b":
        lettreLeet = "8";
        break;
      case "e":
        lettreLeet = "3";
        break;
      case "l":
        lettreLeet = "1";
        break;
      case "o":
        lettreLeet = "0";
        break;
      case "s":
        lettreLeet = "5";
        break;
      case "t":
        lettreLeet = "7";
        break;
    }
    return lettreLeet;
  }
  
  // Renvoie un mot converti en "leet speak"
  function convertirMotLeet(mot) {
    let motLeet = "";
    for (const lettre of mot) {
      motLeet += convertirLettreLeet(lettre);
    }
    return motLeet;
  }
  
  console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
  console.log(convertirMotLeet("Noob")); // "N008"
  console.log(convertirMotLeet("Hacker")); // "H4ck3r"