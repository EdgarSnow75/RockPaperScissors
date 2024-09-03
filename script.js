// Set an array variable containing three strings: rock, paper and scissor
// Create a function with one parameter to accept a number
// return a random number
// Create a function that will have one parameter to accept a string array
// return a random string using the array length and the random function
// Initialize the returned string as a variable named computerChoice
// Prompt user to choice between Rock, Paper or Scissor and initialize it as a variable and transform it into lower case
// If variable is not equal to a valid choice, warn the user and prompt again
// Create a function to accept two string parameters
// Compare the string with the computerChoice variable and check who wins
// If they have the exact same string, tell the user it is a draw
// If the user's choice is paper and the computer's scissor, log "Lost"
// If the user's choice is paper and the computer's rock, log "Win"
// Do the same for the two other choices as well
// Set a variable named count using Prompt to ask the user how many rounds will be played.
// Create a function that accepts one number parameter
// Loop and call the playRound function until the iteration count is equal to the count variable
// Log out the result of the match by comparing scores

const choices = ["rock", "paper", "scissors"];

function randomNum(number) {
  return Math.floor(Math.random() * number);
}

function getComputerChoice(choices) {
  return choices[randomNum(choices.length)];
}

function getHumanChoice() {
  let choice = prompt("Rock Paper Scissors! What's your choice?").toLowerCase();

  while (!choices.includes(choice)) {
    choice = prompt(
      "Not a valid choice. Try one of the following: Rock, Paper and Scissor"
    ).toLowerCase();
  }

  return choice;
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return console.log("Draw!");
  }

  switch (userChoice) {
    case "rock":
      if (computerChoice === "paper") {
        console.log("Lost");
        computerScore += 1;
        break;
      } else if (computerChoice === "scissors") {
        console.log("Win");
        userScore += 1;
        break;
      }
    case "paper":
      if (computerChoice === "rock") {
        console.log("Win");
        userScore += 1;
        break;
      } else if (computerChoice === "scissors") {
        console.log("Lost");
        computerScore += 1;
        break;
      }
    case "scissors":
      if (computerChoice === "rock") {
        console.log("Lost");
        computerScore += 1;
        break;
      } else if (computerChoice === "paper") {
        console.log("Win");
        userScore += 1;
        break;
      }
  }
}
const count = parseInt(prompt("How many rounds will you play?"));

let userScore = 0;
let computerScore = 0;

function playGame(count) {
  for (let i = 0; i < count; i++) {
    let computerChoice = getComputerChoice(choices);
    console.log("CPU:", computerChoice);
    let userChoice = getHumanChoice();
    playRound(userChoice, computerChoice);
  }
}

function checkWinner(userScore, computerScore) {
  if (userScore > computerScore) {
    return console.log("Con Con Con!!! You win the match! Nice!");
  } else if (userScore < computerScore) {
    return console.log("Oh no! Your lost on this match. You will get it next!");
  } else {
    return console.log("Seems like a draw on the match! Try again!");
  }
}

playGame(count);
checkWinner(userScore, computerScore);
