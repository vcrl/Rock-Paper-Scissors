const possibleChoices = ["paper", "scissors", "rock"];
let playBtn = document.getElementById("play");

function getComputerChoice(){
    /* 
        Generates the computer's choice 
    */

    return Math.floor(Math.random() * possibleChoices.length);
}

function getPlayerChoice(){
    /* 
        Gets player input from a prompt and determine his choice 
    */

    let playerSelection = prompt("Please, select Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case "paper":
            console.log("You have choosen Paper.")
            return 0;
        case "scissors":
            console.log("You have choosen Scissors.")
            return 1;
        case "rock":
            console.log("You have choosen Rock.")
            return 2;
        default:
            console.log("You have to choose between Rock, Paper or Scissors.");
            playRound();
            return;
    }
}

function playRound(){
    /* 
        Launches a round 
    */

    // Define playerSelection && checks if not null
    let playerSelection = possibleChoices[getPlayerChoice()];
    // If playerSelection != null
    if(playerSelection){
        let computerSelection = possibleChoices[getComputerChoice()];
        // Format choices
        playerSelection = formatString(playerSelection);
        computerSelection = formatString(computerSelection);
        // Display computer choice
        console.log(`Computer chose ${computerSelection}.`);
        // Verify if Win, Lose or Tie
        if(playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Paper"){
            return console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        }else if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"){
            return console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        }else{
            return console.log(`It's a tie! You both picked ${computerSelection}.`);
        }
    // If playerSelection == null, abort
    }else{
        return;
    }
}

function formatString(stringElement){
        /* 
            Formats a string to return said-string with the first letter capitalized 
        */

    switch(typeof stringElement){
        case "string":
            let unformattedStringCap = stringElement[0].toUpperCase();
            string = unformattedStringCap + stringElement.slice(1);
            return string;
        default:
            return;
    }
}

/*
class Game {
    constructor(){
        this.possibleChoices = ["paper", "scissors", "rock"];
        this.playerBtn = document.getElementById("play");
    }
}
*/