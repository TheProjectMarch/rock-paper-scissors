const rpsChoices = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll(".user-throw");
const resultsPara = document.querySelector("#results_text");
const winText = document.getElementById('win_tally_text');
const lossText = document.getElementById('loss_tally_text');
const tieText = document.getElementById('tie_tally_text');
let playerSelection;
let computerSelection;
let wins = 0;
let losses = 0;
let ties = 0;
let winMessage;
let lossMessage;
let tieMessage;
let displayMessage;
let endResult;


btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    playerSelection = e.target.getAttribute("id");
    game(playerSelection);
  })
);

//INITIALIZATION OF GAME
function game(selection) {
  //CGP makes its throw
  computerSelection = computerPlay();
  //generate messages with newly made player choices
  winMessage = `Congrats! ${selection} beats ${computerSelection}!`;
  lossMessage = `Oooof! The computer chose ${computerSelection} and unfortunately ${computerSelection} beats ${selection}.`;

  //check who won & generate message
  displayMessage = playRound(playerSelection, computerSelection);
  showRoundResult(displayMessage);
  console.log(wins, losses, ties);
}

//COMPUTER PICKS A CHOICE
function computerPlay() {
  let randomChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return randomChoice;
}
//ROUND 'PLAY' AND RESULT GENERATION
function playRound(player, computer) {
  if (player === computer) {
    return roundResult("tie");
  }

  if (player === "paper") {
    switch (computer) {
      case "rock":
        return roundResult("win");
      case "scissors":
        return roundResult("loss");
    }
  }
  if (player === "rock") {
    switch (computer) {
      case "scissors":
        return roundResult("win");
      case "paper":
        return roundResult("loss");
    }
  }
  if (player === "scissors") {
    switch (computer) {
      case "paper":
        return roundResult("win");
      case "rock":
        return roundResult("loss");
    }
  }
}
//END OF ROUND RESULT PRINTING
function roundResult(result) {
  let recordMessage;
  let message;
  if (result === "win") {
    wins++;
    message = winMessage;
  }
  if (result === "loss") {
    losses++;
    message = lossMessage;
  }
  if (result === "tie") {
    ties++;
    tieMessage = `Hey will you look at that. You both chose ${playerSelection}. It's a draw!`;
    message = tieMessage;
  }
  return `${message}`;
}
//GENERATE DOM DISPLAY OF ROUND RESULT
function showRoundResult(printMessage) {
  resultsPara.textContent = printMessage;
  updateTrackRecord();
}

function updateTrackRecord(){
  winText.textContent = wins;
  lossText.textContent = losses;
  tieText.textContent = ties;
}
