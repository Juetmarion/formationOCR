document.addEventListener('change', function () {

    let toCompare = document.querySelectorAll("[id^='mdp']");
    for (i=0; i <toCompare.length; i++){

/*         let motDePasse01 = document.getElementById("mdp1");
            motDePasse01.classList.add('mdpToCompare');
            motDePasse01.textContent = motDePasse01.value;
            motDePasse01.className = 'mdp';
        let valeurMdp01 = motDePasse01.value;

        let motDePasse02 = document.getElementById("mdp2");
            motDePasse02.classList.add('mdpToCompare');
            motDePasse02.textContent = motDePasse02.value;
            motDePasse02.className = 'mdp';
        let valeurMdp02 = motDePasse02.value; */
        let valuue = toCompare[i].value;
        console.log(valuue);
 /*        if ((toCompare.textContent).length < 6 ){
            console.log('Erreur : un minimum de 6 caractères est requis');
        }  */
        //console.log(toCompare[i]);
        console.log(toCompare);
        //console.log(valeurMdp01);
        //console.log(valeurMdp02);
    
    }
    
    /* 
    toCompare.forEach(mdp =>{
        let valueMdp = mdp.value;
        switch(mdp){
            case (valueMdp.length < 6 ):
            console.log('trop petit');
        }
    })
 */    //console.log(toCompare);

})