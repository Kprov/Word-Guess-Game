// index of bands
var bandIndex = ["cream", "led zeppelin", "the rolling stones", "heart", "jimi hendrix", "black sabbath", "velvet underground", "iggy pop", "the who", "beatles", "santana", "fleetwood mac", "yardbirds"];

// word generation
var computerGuess = bandIndex[Math.floor(Math.random() * bandIndex.length)];
console.log("this is the computer's word: " + computerGuess);

//creates underscores for each letter of computerGuess and joins them with a span in the html pulling from the underscoreArray
var underscoreArray = []; 
for (var i = 0; i < computerGuess.length; i++) { 
    underscoreArray.push("_"); 
    }                               //how to remove _ from spaces??
    console.log(underscoreArray); 
  document.getElementById("bandGuess").innerHTML = underscoreArray.join(" ");


var splitWord = computerGuess.split("");
  console.log(splitWord)
var guessedLetters = [];
var letterMatch = false;
var correctLetters = 0;
var wordLength = splitWord.length;
var guessesLeft = 10

//runs function when user releases a key
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log("user guess: " + userGuess)
    guessedLetters.push(userGuess);
    console.log(guessedLetters) //verifying userGuess being pushed into guessedLetters array
    document.getElementById("guesses").innerHTML = guessedLetters.join(" ");
    for (k=0; k < splitWord.length; k++) {
        if (splitWord[k] === userGuess){
            underscoreArray[k] = userGuess;
            letterMatch = true;
            correctLetters++;
            console.log("correct letters: " + correctLetters)
        }
    } 
    document.getElementById("bandGuess").innerHTML = underscoreArray.join(" "); 
    console.log("underscoreArray: " + underscoreArray); 
    
    if(letterMatch) {
        if(wordLength === correctLetters) {
            wins++;
            document.getElementById("wins").innerHTML = ("Wins: " + wins);
        }
    }
    else if (!guessesLeft){
        losses++;
    }
    guessesLeft--;
        document.getElementById("guesses").innerHTML = guessesLeft.join(" ");
}

    
    



  //starting wins at 0 and adding if user guesses word correctly  
var wins = 0
newWinElement = document.createElement("span");
newWinText = document.createTextNode(" " + wins);
newWinElement.appendChild(newWinText);
document.getElementById("wins").append(newWinElement);

//starting losses at 0 and adding if user guesses incorrectly

var losses = 0;
newLossesElement = document.createElement("span");
newLossesText = document.createTextNode(" " + losses);
newLossesElement.appendChild(newLossesText);
document.getElementById("losses").append(newLossesElement);

//starting remaining guesses at 10 and dropping by 1 for each letter guessed

guessElement = document.createElement("span");
guessText = document.createTextNode(" " + guessesLeft);
guessElement.appendChild(guessText);
document.getElementById("guesses").append(guessElement);

// var remainingGuesses = 10;
// newRemainingGuesses = document.createElement("span");
// remainingGuessesText = document.createTextNode(" " + remainingGuesses);
// newRemainingGuesses.appendChild(remainingGuessesText);
// document.getElementById("remaining-guesses").appendChild(newRemainingGuesses);

