const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!"
    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("text-green-300", "text-red-300", "text-blue-300");
    if (result === "YOU WIN!") {
        resultDisplay.classList.add("text-green-300")
        playerScore += 1;
        playerScoreDisplay.textContent = playerScore
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("text-red-300")
        computerScore += 1;
        computerScoreDisplay.textContent = computerScore;
    } else {
        resultDisplay.classList.add("text-blue-300")
    }


}