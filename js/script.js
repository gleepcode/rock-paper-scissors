let playerScore = 0;
let computerScore = 0;

function playRound() {

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"]
        const randomChoice = Math.floor(Math.random() * 3);
        return choices.at(randomChoice);
    }

    function getPlayerChoice() {
        const promptMessage = "Rock, paper or scissors?";
        const choice = prompt(promptMessage).toLowerCase();
        return choice;
    }

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    function win() {
        console.log(`${playerChoice} beats ${computerChoice}, you won the round!`);
        playerScore += 1;
    }
    function lose() {
        console.log(`${computerChoice} beats ${playerChoice}, you lost the round...`);
        playerScore += 1;
    }
    function tie() {
        console.log(`${playerChoice} ties with ${computerChoice}, it's a draw.`);
    }
    
    if (playerChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                tie();
                break;
            case "paper":
                lose();
                break;
            case "scissors":
                win();
                break;
        }
    } else if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                win();
                break;
            case "paper":
                tie();
                break;
            case "scissors":
                lose();
                break;
        }
    } else if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                lose();
                break;
            case "paper":
                win();
                break;
            case "scissors":
                tie();
                break;
        }
    }

    function printScores() {
        console.log(`Current score:`);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    printScores();
}

// Gameplay
playRound();