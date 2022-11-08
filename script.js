class Game {
    possibleChoices = ["Paper", "Scissors", "Rock"];
    choicesEmojis = ["✋", "✌", "✊", "❔"];
    
    computerScoreCount = 0;
    playerScoreCount = 0;

    playerBtn = document.getElementById("play");
    rockBtn = document.getElementById("rock");
    paperBtn = document.getElementById("paper");
    scissorsBtn = document.getElementById("scissors");

    firstText = document.getElementById("firstMsg");
    secondText = document.getElementById("secondMsg");

    playerScore = document.getElementById("playerScore");
    computerScore = document.getElementById("computerScore");

    playerWeapon = document.getElementById("playerWeapon");
    computerWeapon = document.getElementById("computerWeapon");

    playRound(choice){
        /* 
            Launches a round 
        */
       
        let playerSelection = this.possibleChoices[choice];
        this.playerWeapon.innerHTML = this.choicesEmojis[choice];
        let computerSelection = this.possibleChoices[this.getComputerChoice()];
        this.computerWeapon.innerHTML = this.choicesEmojis[this.possibleChoices.indexOf(computerSelection)];

        if(playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Paper"){
            this.secondText.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;
            this.addScorePoint("Computer", 1);
            this.computerScore.innerHTML = "Computer: " + this.computerScoreCount;
            return;
        }else if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"){
            this.secondText.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;
            this.addScorePoint("Player", 1);
            this.playerScore.innerHTML = "Player: " + this.playerScoreCount;
            return;
        }else{
            this.secondText.innerHTML = `It's a tie! You both picked ${computerSelection}.`;
            return;
        }
    }


    getComputerChoice(){
        /* 
            Generates the computer's choice 
        */
    
        return Math.floor(Math.random() * this.possibleChoices.length);
    }

    endGame(){
        return;
    }

    addScorePoint(player, amount){
        switch(player){
            case "Player":
                this.playerScoreCount = this.playerScoreCount + amount;
                break;
            case "Computer":
                this.computerScoreCount = this.computerScoreCount + amount;
                break;
        }
    }

}

let G = new Game();