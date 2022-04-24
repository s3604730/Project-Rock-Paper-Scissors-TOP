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
    let playerSelection = window.prompt("Enter either Rock, Paper or Scissors");
    const computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    if(result.includes("Lose")){
      console.log(result);
      computerScore +=1;
    }else if(result.includes("win")){
      console.log(result);
      playerScore +=1;
    }else{
      console.log(result);
    }
  }


  if(computerScore == playerScore){
    console.log("Game is a draw!");

  }else if (computerScore > playerScore){
    console.log("Computer wins!");

  }else{
    console.log("Player Wins!");
  }

}


game();
