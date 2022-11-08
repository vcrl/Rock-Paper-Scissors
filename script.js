class Game {
    possibleChoices = ["paper", "scissors", "rock"];
    playerBtn = document.getElementById("play");

    playRound(){
        /* 
            Launches a round 
        */

        let playerSelection = this.possibleChoices[this.getPlayerChoice()];
        if(playerSelection){
            let computerSelection = this.possibleChoices[this.getComputerChoice()];
            playerSelection = this.formatString(playerSelection);
            computerSelection = this.formatString(computerSelection);
            console.log(`Computer chose ${computerSelection}.`);
            if(playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Paper"){
                return console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            }else if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"){
                return console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            }else{
                return console.log(`It's a tie! You both picked ${computerSelection}.`);
            }
        }else{
            return;
        }
    }
    getComputerChoice(){
        /* 
            Generates the computer's choice 
        */
    
        return Math.floor(Math.random() * this.possibleChoices.length);
    }
    
    getPlayerChoice(){
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
                this.playRound();
                return;
        }
    }

    formatString(stringElement){
        /* 
            Formats a string to return said-string with the first letter capitalized 
        */

        switch(typeof stringElement){
            case "string":
                let unformattedStringCap = stringElement[0].toUpperCase();
                let string = unformattedStringCap + stringElement.slice(1);
                return string;
            default:
                return;
        }
    }
}