// index of bands
var bandIndex = ["cream", "led zeppelin", "the rolling stones", "heart", "jimi hendrix", "black sabbath", "velvet underground", "iggy pop", "the who", "beatles", "santana", "fleetwood mac", "yardbirds"];

// word generation
var computerGuess = bandIndex[Math.floor(Math.random() * bandIndex.length)];
console.log("this is the computer's word: " + computerGuess);

 //Leetters displaying as underscores when unguessed or incorrect

var blanksArray = []
for (var i=0; i < computerGuess.length; i++) {
    blanksArray.push("_");
    console.log(blanksArray)
}

//starting wins at 0 and adding if user guesses word correctly  
var wins = 0
newWinElement = document.createElement("span");
newWinText = document.createTextNode(" " + wins);
newWinElement.appendChild(newWinText);
document.getElementById("wins").append(newWinElement);

var losses = 0;
newLossesElement = document.createElement("span");
newLossesText = document.createTextNode(" " + losses);
newLossesElement.appendChild(newLossesText);
document.getElementById("losses").append(newLossesElement);

var remainingGuesses = 10;
newRemainingGuesses = document.createElement("span");
remainingGuessesText = document.createTextNode(" " + guessesLeft);
newRemainingGuesses.appendChild(newGuessesText);
document.getElementById("remaining-guesses").appendChild(newGuessesLeft);

