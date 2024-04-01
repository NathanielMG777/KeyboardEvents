const main = document.querySelector("main");
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

randomize();

function randomize() {
    secretLetter = alphabet[Math.floor(Math.random() * 26)]
}

document.body.addEventListener('keypress', function(event) {
        
        const letterIndex = secretLetter.indexOf(event.key);
        
            const correct = document.createElement("h2");
            correct.textContent = "SECRET KEY PRESSED " + secretLetter;

        if(letterIndex === -1) {
            console.log("it is not the letter " + event.key);
      } else {
            main.appendChild(correct);
            randomize();
      }})