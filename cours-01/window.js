var a = 0 // Toutes variables définies globalement sont stocké dans l'objet window
window.a // 0 

window.alert('Ooops') // Affiche une alerte 
var a = window.confirm('Sûr de sûr ?') // Affiche une fenêtre de confirmation et renvoie un booleen
var nom = window.prompt('Entrez votre nom') // Affiche un champs qui permet de rentrer une valeur

window.setInterval(function () {
    // Ce code sera appellé toutes les secondes (1000ms)
}, 1000)

window.setTimeout(function () {
    // Ce code sera éxécuté une fois au bout de 3 secondes (3000ms)
}, 3000)

var i = 0 
var timer = window.setInterval(function () {
    i++
    if (i == 10) {
        window.clearInterval(timer) // On utilise l'ID timer pour stopper le timer   
    }
}, 1000)