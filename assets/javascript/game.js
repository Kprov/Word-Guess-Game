// index of bands
var bandIndex = ["cream", "led zeppelin", "the rolling stones", "heart", "jimi hendrix", "black sabbath", "velvet underground", "iggy pop", "the who", "beatles", "santana", "fleetwood mac", "yardbirds"];

// word generation
var computerGuess = bandIndex[Math.floor(Math.random() * bandIndex.length)];
console.log("this is the computer's word: " + computerGuess);