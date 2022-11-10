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
        let computerSelection = this.possibleChoices[this.#getComputerChoice()];
        this.computerWeapon.innerHTML = this.choicesEmojis[this.possibleChoices.indexOf(computerSelection)];

        if(playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Paper"){
            if(this.computerScoreCount + 1 !== 5){
                this.secondText.style = "color:red;"
                this.secondText.innerHTML = `💥 Ouch! ${computerSelection} beats ${playerSelection}.`;
                this.#updateScoreDisplay("Computer", true);
                this.#updateScoreDisplay("Player", false);
            }else{
                this.#updateScoreDisplay("Computer", true);
                this.secondText.style = "color:red;"
                this.secondText.innerHTML = "❌ Computer won the game by having 5 points ! ❌";
                this.#resetScorePoints();
            }
            
            return;
        }else if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"){
            if(this.playerScoreCount + 1 !== 5){
                this.secondText.style = "color:lime;"
                this.secondText.innerHTML = `🥊 You got this! ${playerSelection} beats ${computerSelection}.`;
                this.#updateScoreDisplay("Player", true);
                this.#updateScoreDisplay("Computer", false);
                return;
            }else{
                this.#updateScoreDisplay("Player", true);
                this.secondText.style = "color:lime;"
                this.secondText.innerHTML = "🏆 You won the game by having 5 points 🏆";
                this.#resetScorePoints();
            }   
        }else{
            this.#updateScoreDisplay("Player", false);
            this.#updateScoreDisplay("Computer", false);
            this.secondText.style = "color:#f7fcff;"
            this.secondText.innerHTML = `It's a tie! You both picked ${computerSelection}.`;
            return;
        }
    }


    #getComputerChoice(){
        /* 
            Generates the computer's choice 
        */
    
        return Math.floor(Math.random() * this.possibleChoices.length);
    }

    #resetScorePoints(){
        this.computerScoreCount = 0;
        this.playerScoreCount = 0;
        return;
    }

    #updateScoreDisplay(player, addPoint = false){
        switch(player){
            case "Player":
                addPoint ? this.#addScorePoint("Player", 1) : null;
                this.playerScore.innerHTML = "Player: " + this.playerScoreCount;
                break;
            case "Computer":
                addPoint ? this.#addScorePoint("Computer", 1) : null;
                this.computerScore.innerHTML = "Computer: " + this.computerScoreCount;
                break;
            default:
                break;
        }
    }

    #addScorePoint(player, amount){
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