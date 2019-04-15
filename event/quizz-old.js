// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

    questions.forEach((question, index) => {
        index += 1; 
        document.getElementById("contenu").innerHTML += '<li id="question" style="font-weight:bold;color:green"> Question '+ index +' : </li>';
        document.getElementById("contenu").innerHTML += '<div id="question" style="font-style:italic">'+ question.enonce +'</div>';
        document.getElementById("contenu").innerHTML += '<button id="buttonToSee'+index+'" style="margin:0.5% 0% 1% 0%" value="'+question.reponse+'"> Voir la réponse </button>';
        document.getElementById("contenu").innerHTML += '<br><br>';
        
            let j = index -1;
            let buttonToSee = document.getElementsByTagName("button");
            console.log(buttonToSee[j].value);
            buttonToSee.value = this.question.reponse; 
            //console.log(getElementByID('button'));
            document.querySelectorAll("button").forEach(el => {
                el.addEventListener("click", showAnswer);
            }) 
    })
    function showAnswer(){
        console.log("coucou de showanswer");
        //console.log(buttonToSee.value);
    } 
        //buttonToSee.addEventListener("click", showAnswer);
        /* document.getElementById("buttonToSee").addEventListener("click", () => {
            console.log("coucou de callback");
        });

        console.log(document.getElementById("buttonToSee")); */
        /* 
        let buttonSeeAnswer = document.getElementById('buttonToSee');
        console.log(buttonSeeAnswer) */

