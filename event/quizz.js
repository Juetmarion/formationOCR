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

    questions.forEach((qRep, i) => {
        
        let index = i + 1;
        let numQuestion = document.createElement("div");
        numQuestion.textContent = "Question " + index;
    
        let question = document.createElement('div');
        question.textContent = qRep.enonce;
        question.className = "questions"

        let buttonAnswer = document.createElement('button');
        buttonAnswer.value = qRep.reponse;
        buttonAnswer.textContent = "Voir la réponse";
        buttonAnswer.className = "buttonAnswer";
        
        console.log(question)
        document.querySelector('#contenu').appendChild(numQuestion);
        document.querySelector('#contenu').appendChild(question);
        document.querySelector('#contenu').appendChild(buttonAnswer);
    })

        document.querySelector("button").addEventListener('click', function() {
        let reponse = document.querySelector(".buttonAnswer").value;
        document.querySelector('.questions').innerHTML += " La réponse est : "+ reponse;
    })