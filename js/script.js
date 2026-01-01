function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    randomChoice = Math.floor(Math.random() * 3);
    return choices.at(randomChoice);
}

// Testing
console.log(getComputerChoice());