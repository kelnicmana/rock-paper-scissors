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
  let playerIndex = options.indexOf(playerSelection);
  let aiIndex = options.indexOf(computerSelection);
  let tally = playerIndex - aiIndex;

  if (playerIndex == aiIndex) {
    document.getElementById(
      "jsText"
    ).innerHTML = `You tied.<hr>Wins: ${playerWins}<br>Losses: ${computerWins}`;
  } else if (tally == 1 || tally == -2) {
    document.getElementById(
      "jsText"
    ).innerHTML = `You win, ${playerSelection} beats ${computerSelection}.<hr>Wins: ${++playerWins}<br>Losses: ${computerWins}`;
  } else {
    document.getElementById(
      "jsText"
    ).innerHTML = `You lose, ${computerSelection} beats ${playerSelection}.<hr>Wins: ${playerWins}<br>Losses: ${++computerWins}`;
  }

  // sets all selection elements to reset their background color to default

  selections.forEach((selection) => {
    selection.style.backgroundColor = "#00a896";
  });

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
