let h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

let b = document.body; // La variable b contient l'objet body du DOM
console.log(b);
console.log(document);

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);

// Accès au deuxième enfant du noeud body
console.log(document.body.childNodes[1]);

// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent

