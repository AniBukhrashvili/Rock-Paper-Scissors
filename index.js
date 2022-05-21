let playerScore = 0;
let computerScore = 0;

const playerNumber = document.getElementById('player-score');
const computerNumber = document.getElementById('computer-score');
const outcome = document.getElementById('outcome');

function computerPlay() {
    let randomComputerChoice = ['rock', 'paper', 'scissors'];
    let getChoice = Math.floor(Math.random() * randomComputerChoice.length)
    return randomComputerChoice[getChoice];
}

function play(id) {
    playRound(id, computerPlay())
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        playerNumber.textContent = playerScore += 1;
        playerNumber.style.color = 'white';
        outcome.textContent = "Player won! Rock beats scissors";
        outcome.style.color = 'gray';
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        playerNumber.textContent = playerScore += 1;
        playerNumber.style.color = 'white';
        outcome.textContent = "Player won! Paper beats rock";
        outcome.style.color = 'gray';
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        playerNumber.textContent = playerScore += 1;
        playerNumber.style.color = 'white';
        outcome.textContent = "Player won! Scissors beats paper";
        outcome.style.color = 'gray';
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        computerNumber.textContent = computerScore += 1;
        computerNumber.style.color = 'white';
        outcome.textContent = "Computer won! Scissors beats paper";
        outcome.style.color = 'gray';
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        computerNumber.textContent = computerScore += 1;
        computerNumber.style.color = 'white';
        outcome.textContent = "Computer won! Rock beats scissors";
        outcome.style.color = 'gray';
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        computerNumber.textContent = computerScore += 1;
        computerNumber.style.color = 'white';
        outcome.textContent = "Computer won! Paper beats rock";
        outcome.style.color = 'gray';
    } else {
        outcome.textContent = "It's tie";
        outcome.style.color = 'gray';
    }

    discloseResult();
}

function discloseResult() {
    if (playerScore === 5) {
        outcome.textContent = "Congratulations! You won!"
        outcome.style.color = "red";
    } else if (computerScore === 5) {
        outcome.textContent = "The computer won the game! Press RESET button and try again."
        outcome.style.color = "red";
    }
}