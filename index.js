let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomComputerChoice = ['rock', 'paper', 'scissors'];
    let getChoice = Math.floor(Math.random() * randomComputerChoice.length)
    return randomComputerChoice[getChoice];
}

// function capitalize(choice) {
//     return choice.charAt(0).toUpperCase() + choice.slice(1);
// }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's tie";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        playerScore += 1;
        return "Player won! Rock beats scissors";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        playerScore += 1;
        return "Player won! Paper beats rock";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        playerScore += 1;
        return "Player won! Scissors beats paper";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        computerScore += 1;
        return "Computer won! Scissors beats paper";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        computerScore += 1;
        return "Computer won! Rock beats scissors";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        computerScore += 1;
        return "Computer won! Paper beats rock";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter which one you choose: rock/scissors/paper");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log("The winner is Player");
    } else if (computerScore > playerScore) {
        console.log("The winner is computer")
    } else {
        console.log("Draw")
    }
    console.log('Player Score is:', playerScore);
    console.log('Computer Score is:', computerScore);
}

game();