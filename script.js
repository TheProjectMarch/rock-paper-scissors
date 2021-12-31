const rpsChoices = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll(".user-throw");
const resultsPara = document.querySelector('#results_message');
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
let quitMessage = `Well, it's been fun. I'm sorry to see you go but life is full of such sweet sorrows, aint it? Toodle-ooo!`;

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    playerSelection = e.target.getAttribute("id");
    game(playerSelection);
  })
);

//COMPUTER PICKS A CHOICE
function computerPlay() {
  let randomChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

//QUIT MESSAGE IF PLAYER CHOOSES TO EXIT/CANCEL
function playerQuits(message) {
  alert(message);
}

//GENERATE DOM DISPLAY OF ROUND RESULT
function showRoundResult(printMessage) {
  resultsPara.textContent = printMessage;
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

  if (!ties) {
    recordMessage = `So far, you've won ${wins} ${
      wins === 1 ? "match" : "matches"
    } and lost ${losses}.`;
  } else {
    recordMessage = `So far, you've won ${wins} ${
      wins === 1 ? "match" : "matches"
    } and lost ${losses} while you've tied ${ties}`;
  }
  return `${message}.\n${recordMessage}`;
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

//INITIALIZATION OF GAME
function game(selection) {
  if (selection === "quits") return;

  //CGP makes its throw
  computerSelection = computerPlay();
  //generate messages with newly made player choices
  winMessage = `Congrats! ${selection} beats ${computerSelection} so you've won!`;
  lossMessage = `Oooof! The computer chose ${computerSelection} and unfortunately ${computerSelection} beats ${selection}... aaaand you've lost.`;

  //check who won & generate message
  displayMessage = playRound(playerSelection, computerSelection);
  showRoundResult(displayMessage);
  console.log(playRound(playerSelection, computerSelection));
}

//   let ranNumber;

//   for (let i = 0; i < 200; i++){
//   ranNumber = Math.floor(Math.random() * 3);
//   console.log(ranNumber);

// }
