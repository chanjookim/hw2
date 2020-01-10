
var userScore = 0;
var compScore = 0;

// Store (cache) the DOM nodes that will be modified for later.
var elUserScore = document.getElementById('userScore');
var elCompScore = document.getElementById('compScore');
var elUserPick = document.getElementById('userPick');
var elCompPick = document.getElementById('compPick');
var elOverallResult = document.getElementById('overallResult');
var result =["Mario wins", "Peach wins", "Bowser wins"];
// Set up the function to compare the user choice and computer choice.
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        console.log("5a. Tie.");
        return result = ["The result is a tie!", "tie"];
    } else if (choice1 === "Mario") {
        if (choice2 === "Bowser") {
            console.log("5b. rock > scissors");
            return result = ["Mario wins", "user"];
        } else if (choice2 === "Peach") {
            console.log("5c. paper > rock");
            return result = ["Peach wins", "comp"];
        }
    } else if (choice1 === "Peach") {
        if (choice2 === "Mario") {
            console.log("5d. paper > rock");
            return result = ["Peach wins", "user"];
        } else if (choice2 === "Bowser") {
            console.log("5e. scissors > paper");
            return result = ["Bowser win", "comp"];
        }
    } else if (choice1 === "Bowser") {
        if (choice2 === "Mario") {
            console.log("5f. rock > scissors");
            return result = ["Mario wins", "comp"];
        } else if (choice2 === "Peach") {
            console.log("5g. scissors > paper");
            return result = ["Bowser win", "user"];
        }
    }
}

// Set up the function that will allow the computer to make a 'choice'.
var computerRoll = function() {
    console.log("2. Computer is rolling.");
    var computerChoice = Math.random();
    // Above will select a random number between 0 and 1 and store that number in the computerChoice variable.
    // Below if statement will assign Rock, Paper, or Scissors to the number.
    if (computerChoice < 0.34) {
        var computerChoice = "Mario";
        console.log("3a. Math is " + computerChoice);
    } else if(computerChoice <= 0.67) {
        var computerChoice = "Peach";
        console.log("3b. Math is " + computerChoice);
    } else {
        var computerChoice = "Bowser";
        console.log("3c. Math is " + computerChoice);
    }
    console.log("3sub. Computer Choice is " + computerChoice);
    // Return the string as the variable computerChoice.
    return computerChoice;
};

// Below is the main function that executes whenever a button is clicked. Called whenever an event listener (below) is activated.
var userChoice = function(choice) {
    //set the function input to be the variable userChoice.
    var userChoice = choice;
    console.log("1. User Choice is " + choice);
    // assign the returned value of the computerRoll function to the variable computerChoice.
    var computerChoice = computerRoll();
    // Compare the two scores with the compare function.
    console.log(compare(userChoice, computerChoice));
    console.log("6. " + result[0]);
    // Immediatly call the getResult function, which will add to the user score, computer score, or neither.
    var getResult = (function() {
        if (result[1] === "user") {
            userScore++;
            console.log("7a. Add one to user! userScore is now " + userScore);
            return userScore;
        } else if (result[1] === "comp") {
            compScore++;
            console.log("7b. Add one to computer! compScore is now " + compScore);
            return compScore;
        } else if (result[1] === "tie") {
            console.log("7c. It was a tie!")
        }
    } () );
    console.log("User Score is now " + userScore + ", while Computer Score is now " + compScore + ".");
    // Modify the cached elements (at top) to the new values.
    elUserScore.textContent = userScore;
    elCompScore.textContent = compScore;
    elUserPick.textContent = userChoice;
    elCompPick.textContent = computerChoice;
    elOverallResult.textContent = result[0];
}

var rockBox = document.getElementById('rock');
rockBox.addEventListener('click', function() {
    userChoice("Mario");
}, false);

var paperBox = document.getElementById('paper');
paperBox.addEventListener('click', function() {
    userChoice("Peach");
}, false);
var scissorBox = document.getElementById('scissors');
scissorBox.addEventListener('click', function() {
    userChoice("Bowser");
}, false);