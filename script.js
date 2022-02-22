// global variables
let playerWins = 0;
let computerWins = 0;
const selections = document.querySelectorAll(".selections");

// adds event listeners to each possible player selection in the UI and returns the first class name assigned to it
selections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    playRound(e.target.classList[0]);
  });
});

// grabs a random selection for the AI
function computerPlay(options) {
  let aiRand = Math.floor(Math.random() * options.length);
  return options[aiRand];
}

// main play function
function playRound(playerSelection) {
  const options = ["rock", "paper", "scissors"];
  let computerSelection = computerPlay(options);
  let playerIndex = options.indexOf(playerSelection);
  let aiIndex = options.indexOf(computerSelection);
  let tally = playerIndex - aiIndex;
  let jsText = document.querySelector("#jsText");

  // checks for the winner and displays the results in the UI
  if (playerIndex == aiIndex) {
    jsText.innerHTML = `You tied.<hr>Wins: ${playerWins}<br>Losses: ${computerWins}`;
  } else if (tally == 1 || tally == -2) {
    jsText.innerHTML = `You win, ${playerSelection} beats ${computerSelection}.<hr>Wins: ${++playerWins}<br>Losses: ${computerWins}`;
  } else {
    jsText.innerHTML = `You lose, ${computerSelection} beats ${playerSelection}.<hr>Wins: ${playerWins}<br>Losses: ${++computerWins}`;
  }

  // sets all selection elements to reset their background color to default
  selections.forEach((selection) => {
    selection.style.backgroundColor = "#00a896";
  });

  document.querySelector(`.${playerSelection}`).style.backgroundColor =
    "#028090";
  document.querySelector(`#${computerSelection}AI`).style.backgroundColor =
    "#028090";
  winnerCheck(jsText);
}

// checks if either the player or AI has reached 5 total wins
function winnerCheck(jsText) {
  if (playerWins == 5) {
    jsText.innerText = `You've won! Congratulations!`;
    playerWins = 0;
    computerWins = 0;
  }
  if (computerWins == 5) {
    jsText.innerText = `You've lost. Please try again.`;
    playerWins = 0;
    computerWins = 0;
  }
}
