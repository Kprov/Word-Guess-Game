// index of bands
//=================================================================
var bandIndex = ["cream", "led zeppelin", "the rolling stones", "heart", "jimi hendrix", "black sabbath", "velvet underground", "iggy pop", "the who", "beatles", "santana", "fleetwood mac", "yardbirds"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var letterGuessed;

var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;

//Functions
//=======================================================================

function startGame () {
    selectedWord = bandIndex[Math.floor(Math.random() * bandIndex.length)]; //Selecting random word 
    lettersInWord = selectedWord.split(""); //Splitting selected word for individual letters
    numBlanks = lettersInWord.length;  //Returning number of blank spaces per number of letters in the word **AVOID DEALING WITH SPACES**

    //Resets
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Pushing blanks into blanksAndSuccesses array to push to HTML

    for(var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    //Adding to HTML
    document.getElementById("bandGuess").innerHTML = blanksAndSuccesses.join("  "); //Adding blanks to HTML
    document.getElementById("remGuesses").innerHTML = guessesLeft; //Adding guesses remaining to HTML
    document.getElementById("wins").innerHTML = winCount; //Adding winCount to HTML
    document.getElementById("losses").innerHTML = lossCount; //Adding lossCount to HTML

    console.log(selectedWord) // Testing random word selection
    console.log(lettersInWord) // Testing splitting letters in word
    console.log(numBlanks) //Testing return of the number of letters in the word
    console.log(blanksAndSuccesses) //Testing push of blank spaces into array 
}   

function findMatch(letter) { //Checking if user guess letter matches with letter in computer guess word 
    var ifMatch = false;
    for (var i=0; i<numBlanks; i++) {
        if (selectedWord[i] === letter) {
            ifMatch = true;
            console.log("letter found") //Checking if letter match operates correctly
        }
    }

    // Finding location of matched letter and populating HTML
    
    if (ifMatch) {
        for (var i=0; i<numBlanks; i++) {
            if (selectedWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    console.log(blanksAndSuccesses) //Verifying the correct letter being placed into the blanks and successes array
    
}
//User win or loss alert and update to HTML
function roundCompleted(){
    console.log("Win Count: " + winCount + "| Loss Cunt: " + lossCount + "| Guesses Left: " + guessesLeft)
    
    document.getElementById("remGuesses").innerHTML = guessesLeft; //Deducting number of guesses after wrong guess
    document.getElementById("bandGuess").innerHTML = blanksAndSuccesses.join(" "); //joining correct letter guesses to html
    document.getElementById("guesses").innerHTML = wrongLetters.join(" "); //joining wrong letters guessed to html

    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("You Win!");

    document.getElementById("wins").innerHTML = winCount;

    startGame();
    }
    else if (guessesLeft == 0) {
    lossCount++;
    alert("You Lost!")

    document.getElementById("losses").innerHTML = lossCount;

    startGame();
    }
}




 

//Main Proccessing
//========================================================================
startGame ();

//Function for user key press

document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); //Returning a string created from the user guesses (tied to specified UTF) and converting the choices to lower case
    findMatch (letterGuessed);
    roundCompleted();
    console.log(letterGuessed);
}



//OLD CODE
//===========================================================================
// // word generation
// var computerGuess = bandIndex[Math.floor(Math.random() * bandIndex.length)];
// console.log("this is the computer's word: " + computerGuess);

// //creates underscores for each letter of computerGuess and joins them with a span in the html pulling from the underscoreArray
// var underscoreArray = []; 
// for (var i = 0; i < computerGuess.length; i++) { 
//     underscoreArray.push("_"); 
//     }                               //how to remove _ from spaces??
//     console.log(underscoreArray); 
//   document.getElementById("bandGuess").innerHTML = underscoreArray.join(" ");


// var splitWord = computerGuess.split("");
//   console.log(splitWord)
// var guessedLetters = [];
// var letterMatch = false;
// var correctLetters = 0;
// var wordLength = splitWord.length;
// var guessesLeft = 10

// //runs function when user releases a key
// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     console.log("user guess: " + userGuess)
//     guessedLetters.push(userGuess);
//     console.log(guessedLetters) //verifying userGuess being pushed into guessedLetters array
//     document.getElementById("guesses").innerHTML = guessedLetters.join(" ");
//     for (k=0; k < splitWord.length; k++) {
//         if (splitWord[k] === userGuess){
//             underscoreArray[k] = userGuess;
//             letterMatch = true;
//             correctLetters++;
//             console.log("correct letters: " + correctLetters)
//         }
//     } 
//     document.getElementById("bandGuess").innerHTML = underscoreArray.join(" "); 
//     console.log("underscoreArray: " + underscoreArray); 
    
//     if(letterMatch) {
//         if(wordLength === correctLetters) {
//             wins++;
//             document.getElementById("wins").innerHTML = ("Wins: " + wins);
//         }
//     }
//     else if (!guessesLeft){
//         losses++;
//     }
//     guessesLeft--;
//         document.getElementById("guesses").innerHTML = guessesLeft.join(" ");
// }

    // update function below
    
    



//   //starting wins at 0 and adding if user guesses word correctly  
// var wins = 0
// newWinElement = document.createElement("span");
// newWinText = document.createTextNode(" " + wins);
// newWinElement.appendChild(newWinText);
// document.getElementById("wins").append(newWinElement);

// //starting losses at 0 and adding if user guesses incorrectly

// var losses = 0;
// newLossesElement = document.createElement("span");
// newLossesText = document.createTextNode(" " + losses);
// newLossesElement.appendChild(newLossesText);
// document.getElementById("losses").append(newLossesElement);

// //starting remaining guesses at 10 and dropping by 1 for each letter guessed

// guessElement = document.createElement("span");
// guessText = document.createTextNode(" " + guessesLeft);
// guessElement.appendChild(guessText);
// document.getElementById("guesses").append(guessElement);

// var remainingGuesses = 10;
// newRemainingGuesses = document.createElement("span");
// remainingGuessesText = document.createTextNode(" " + remainingGuesses);
// newRemainingGuesses.appendChild(remainingGuessesText);
// document.getElementById("remaining-guesses").appendChild(newRemainingGuesses);

