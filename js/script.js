let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * 3);
    return choices.at(randomChoice);
}

function getHumanChoice() {
    const promptMessage = "Rock, paper or scissors?";
    const choice = prompt(promptMessage)
    return choice;
}


// Testing
console.log(getComputerChoice());
console.log(getHumanChoice());