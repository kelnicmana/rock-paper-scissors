let totalGames = 0;
let playerWins = 0;
let computerWins = 0;

document.getElementById("rock").onclick = function() {
    playRound("rock");
    document.getElementById("rock").style.backgroundColor= "#028090";
    document.getElementById("paper").style.backgroundColor= "#00a896";
    document.getElementById("scissors").style.backgroundColor= "#00a896";}

document.getElementById("paper").onclick = function() {
    playRound("paper");
    document.getElementById("rock").style.backgroundColor= "#00a896";
    document.getElementById("paper").style.backgroundColor= "#028090";
    document.getElementById("scissors").style.backgroundColor= "#00a896";}

document.getElementById("scissors").onclick = function() {
    playRound("scissors");
    document.getElementById("rock").style.backgroundColor= "#00a896";
    document.getElementById("paper").style.backgroundColor= "#00a896";
    document.getElementById("scissors").style.backgroundColor= "#028090";}

function computerPlay() {
    const aiOptions = ['rock', 'paper', 'scissors'];
    let aiRand = Math.floor(Math.random() * aiOptions.length);
    return (aiOptions[aiRand]);
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (computerSelection == playerSelection) {
        document.getElementById("jsText").innerHTML = (`You tied.<hr>Wins: ${playerWins}<br>Losses: ${computerWins}`);
    }
    else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        document.getElementById("jsText").innerHTML = (`You lose ${computerSelection} beats ${playerSelection}.<hr>Wins: ${playerWins}<br>Losses: ${++computerWins}`);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        document.getElementById("jsText").innerHTML = (`You win ${playerSelection} beats ${computerSelection}.<hr>Wins: ${++playerWins}<br>Losses: ${computerWins}`);
    }
    computerSelectionHighlight();
    winnerCheck();
}

function winnerCheck() {
    if (playerWins == 5) {
    document.getElementById("jsText").innerHTML = (`You've won! Congratulations!`);
    playerWins = 0;
    computerWins = 0;
    }
    if (computerWins == 5) {
    document.getElementById("jsText").innerHTML = (`You've lost. Please try again.`);
    playerWins = 0;
    computerWins = 0;
    }
}

function computerSelectionHighlight() {
    if (computerSelection == "rock") {
    document.getElementById("rockAI").style.backgroundColor= "#028090";
    document.getElementById("paperAI").style.backgroundColor= "#00a896";
    document.getElementById("scissorsAI").style.backgroundColor= "#00a896";
    }
  
    if (computerSelection == "paper") {
    document.getElementById("rockAI").style.backgroundColor= "#00a896";
    document.getElementById("paperAI").style.backgroundColor= "#028090";
    document.getElementById("scissorsAI").style.backgroundColor= "#00a896";
    }
  
    if (computerSelection == "scissors") {
    document.getElementById("rockAI").style.backgroundColor= "#00a896";
    document.getElementById("paperAI").style.backgroundColor= "#00a896";
    document.getElementById("scissorsAI").style.backgroundColor= "#028090";
    } 
}