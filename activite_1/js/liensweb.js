let listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

for (let i=0; i < listeLiens.length; i++){

    let links = document.createElement("a"); 

    let titleLink = listeLiens[i].titre; // on recupere le titre
    links.textContent = titleLink; // on l'ajoute dans le contenu 
    links.id = "titleWithHref"; // 
    links.href = listeLiens[i].url;
    links.style.color = "#428bca";
    console.log(links);
    
    let hrefLink = document.createElement("a");
    hrefLink.textContent = " " + listeLiens[i].url ;
    console.log(hrefLink);

    let addBy = document.createElement('div');
    addBy.textContent = "Ajouté par " + listeLiens[i].auteur;
    console.log(addBy)
    document.getElementById('contenu').appendChild(links);
    document.getElementById('contenu').appendChild(hrefLink);
    document.getElementById('contenu').appendChild(addBy);
    document.getElementById('contenu').appendChild(document.createElement("br"));
}

