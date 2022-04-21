function playRound(playerSelection, computerSelection) {
  // var getPlayerAnswer = window.prompt("Enter either Rock, Paper or Scissors");
  playerSelectionAnswer = playerSelection.toLowerCase();
  computerSelectionAnswer = computerSelection.toLowerCase();

  if (playerSelectionAnswer == computerSelectionAnswer) {
    return "Draw!";
  }

  if (playerSelectionAnswer == "rock" && computerSelectionAnswer == "paper") {
    return "You Lose, Paper beats Rock";
  } else if (
    playerSelectionAnswer == "rock" &&
    computerSelectionAnswer == "scissors"
  ) {
    return "You win! Rock beats Scissors";
  }

  if (
    playerSelectionAnswer == "paper" &&
    computerSelectionAnswer == "scissors"
  ) {
    return "You Lose, Scissors beats Paper";
  } else if (
    playerSelectionAnswer == "paper" &&
    computerSelectionAnswer == "rock"
  ) {
    return "You win! Paper beats Rock";
  }
  if (
    playerSelectionAnswer == "scissors" &&
    computerSelectionAnswer == "rock"
  ) {
    return "You Lose, Rock beats Scissors";
  } else if (
    playerSelectionAnswer == "scissors" &&
    computerSelectionAnswer == "paper"
  ) {
    return "You win! Scissors beats Paper";
  }

  return "Invalid Input";
}

function getRockPaperScissorValue() {
  return Math.floor(Math.random() * 3);
}

function computerPlay() {
  const RockPaperScissorArray = ["Rock", "Paper", "Scissors"];
  answer = getRockPaperScissorValue();

  getAnswer = RockPaperScissorArray[answer];

  return getAnswer;
}


//finish off the keep score, with win or loss string if inside the consolelog

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = "Rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
