

function playRound(playerSelection, computerSelection){
   // var getPlayerAnswer = window.prompt("Enter either Rock, Paper or Scissors");
    playerSelectionAnswer = playerSelection.lowercase();
    computerSelectionAnswer = computerSelection.lowercase();

    if (playerSelectionAnswer == computerSelectionAnswer){
        return "Draw!";
    }

    if ((playerSelectionAnswer == "rock") && computerSelectionAnswer == "paper"){
        return "You Lose, Paper beats Rock";

    } else if((playerSelectionAnswer == "rock") && computerSelectionAnswer == "scissors"){
        return "You win! Rock beats Scissors";
    }
    
    if((playerSelectionAnswer == "paper") && computerSelectionAnswer == "scissors"){
        return "You Lose, Scissors beats Paper"
    }else if((playerSelectionAnswer == "paper") && computerSelectionAnswer == "rock"){
        return "You win! Paper beats Rock";
    }
    if((playerSelectionAnswer == "scissors") && computerSelectionAnswer == "rock"){
        return "You Lose, Rock beats Scissors"
    }else if((playerSelectionAnswer == "scissors") && computerSelectionAnswer == "paper"){
        return "You win! Scissors beats ";
    }

    return "Invalid Input"

}



function getRockPaperScissorValue(){
    return Math.floor(Math.random() * 3);
}

function computerPlay(){
   const RockPaperScissorArray = ["Rock", "Paper", "Scissors"];
    answer = getRockPaperScissorValue();
    console.log(answer);
    getAnswer=RockPaperScissorArray[answer];
    console.log(getAnswer);
    return(getAnswer);
  

}

computerPlay();