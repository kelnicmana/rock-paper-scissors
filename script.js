let totalGames = 0;
let playerWins = 0;
let computerWins = 0;
const options = ["rock", "paper", "scissors"];

const selections = document.querySelectorAll(".selections");

selections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    playRound(e.target.classList[0]);
  });
});

function computerPlay(options) {
  let aiRand = Math.floor(Math.random() * options.length);
  return options[aiRand];
}

function playRound(playerSelection) {
  computerSelection = computerPlay(options);
  if (computerSelection == playerSelection) {
    document.getElementById(
      "jsText"
    ).innerHTML = `You tied.<hr>Wins: ${playerWins}<br>Losses: ${computerWins}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    document.getElementById(
      "jsText"
    ).innerHTML = `You lose, ${computerSelection} beats ${playerSelection}.<hr>Wins: ${playerWins}<br>Losses: ${++computerWins}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    document.getElementById(
      "jsText"
    ).innerHTML = `You win, ${playerSelection} beats ${computerSelection}.<hr>Wins: ${++playerWins}<br>Losses: ${computerWins}`;
  }

  // sets all selection elements to reset their background color to default

  selections.forEach((selection) => {
    selection.style.backgroundColor = "#00a896";
  });

  // document.getElementById("rock").style.backgroundColor = "#00a896";
  // document.getElementById("paper").style.backgroundColor = "#00a896";
  // document.getElementById("scissors").style.backgroundColor = "#00a896";

  document.querySelector(`.${playerSelection}`).style.backgroundColor =
    "#028090";
  document.getElementById(`${computerSelection}AI`).style.backgroundColor =
    "#028090";
  winnerCheck();
}

function winnerCheck() {
  if (playerWins == 5) {
    document.getElementById(
      "jsText"
    ).innerText = `You've won! Congratulations!`;
    playerWins = 0;
    computerWins = 0;
  }
  if (computerWins == 5) {
    document.getElementById(
      "jsText"
    ).innerText = `You've lost. Please try again.`;
    playerWins = 0;
    computerWins = 0;
  }
}
