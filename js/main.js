var sections = ["home","about","experience","skills","travel","books","resume"];

function showSection(section) {

    // Hide all sections
    for(var i = 0; i <= sections.length - 1; i++){  
        let current = document.getElementById(sections[i])
        current.style.display = "none";
    }

    // reveal after
    for(var i = 0; i<=sections.length - 1; i++){
        if(section === sections[i]){
            let current = document.getElementById(section)
            current.style.display = "block"

            let currentLabel = document.getElementById(section + '-label');
            currentLabel.style.color = 'rgba(0, 0, 0, 1.9)';
        }
    }
}

function greyAllLables(){
    for(var i = 0; i<=sections.length - 1; i++){
        
            let currentLabel = document.getElementById(sections[i] + '-label');
            currentLabel.style.color = 'rgba(0, 0, 0, 0.5)';
    }
}

console.log("hiding!")
//showSection('home');

function setHomeLabel(){
    let currentLabel = document.getElementById('home-label');
    currentLabel.style.color = 'rgba(0, 0, 0, 1.9)';
}

setHomeLabel();