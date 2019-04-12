document.addEventListener("keypress", function (e) { 
    var code = String.fromCharCode(e.charCode);
    console.log(code);
    var paragraphe = document.getElementsByTagName('div');
    
    for (let i = 0; i < paragraphe.length; i++){
        switch (code) {
        case "r": 
        console.log("red")
            paragraphe[i].style.backgroundColor = "red";
            break;
        case "j": 
            paragraphe[i].style.backgroundColor = "yellow";
            break;
        case "v": 
            paragraphe[i].style.backgroundColor = "green";
            break;
        case "b": 
            paragraphe[i].style.backgroundColor = "blue";
            break;
        }
        
    }
})