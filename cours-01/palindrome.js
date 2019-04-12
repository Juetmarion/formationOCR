

// définir la fonction estPalindrome() qui renvoie vrai ou faux 
function estPalindrome (word){
    let wordMin = word.toLowerCase();
    // console.log(word.toLowerCase());
    // return wordMin;
    let wordReturn = wordMin.split('').reverse().join(''); 
    // return wordMin.split('').reverse().join('');
    if (wordMin != wordReturn){
        return false;
    } else {
        return true;
    }
}

console.log(estPalindrome("RadAr")); // true
console.log(estPalindrome("KAYAk")); // true
console.log(estPalindrome("Bora-Bora")); // false
