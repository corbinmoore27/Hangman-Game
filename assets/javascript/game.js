var wordBank = ["sunroof", "steering", "windows", "gearbox", "acceleration", "burnout", "blinkers", "engine", "pistons", "mileage", "speedometer"];

var randomWord;
var randomWordArray = [];
var unders = [];
var guessLetters = [];
var wins = 0;
// var guessesLeft = randomWordArray.length + 6;
var userinput;


function getWord() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    for (var i = 0; i < randomWord.length; i++) {
        unders.push("_");
        randomWordArray.push(randomWord.charAt(i));
        document.querySelector("#dashedWord").innerHTML = unders; 
    }
}
function checkWord () {
    for(i = 0; i< randomWord.length; i++) {
        if (randomWord.indexof(userinput[i]) > -1) {
        console.log(userinput);
        }
    }
}
function game() {
    getWord();
    document.onkeyup = function (event) {
        var userinput = event.key;
        guessLetters.push(userinput);
        document.querySelector("#guessesType").innerHTML = guessLetters;  
    }
    
}
    // if (userinput = indexof.randomWord();
        // splice

document.onkeyup = function () {
    game();
    checkWord();
}


    
console.log(randomWordArray);
// console.log(wins);
