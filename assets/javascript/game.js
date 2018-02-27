
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesSoFar = [];

alert("To begin the game, press any letter for your first guess. Good luck!");


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    
        guessesSoFar.push(userGuess);

        if ((guessesLeft === 1) && (userGuess !== computerGuess)) {
            guessesLeft = 10;
            // IDK why this guessesLeft has to be 10 here but it only works this way...HELP
            losses++;
            guessesSoFar = [];
        }
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessesSoFar = [];
        }
        else if (userGuess !== computerGuess) {
            guessesLeft--;
            
        }
        

        var html = 
            "<h1>The Psychic Game</h1>" +
            "<p>Guess what letter I'm thinking<p>" +
            "<p>Wins: " + wins + "<p>" +
            "<p>Losses: " + losses + "<p>" +
            "<p>Guesses Left: " + guessesLeft + "<p>" +
            "<p>Your Guesses so far: " + guessesSoFar + "<p>" ;

        document.querySelector("#game").innerHTML = html;           

}