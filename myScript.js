

function playRound(playerSelection, computerSelection){
   // var getPlayerAnswer = window.prompt("Enter either Rock, Paper or Scissors");
    playerSelectionAnswer = playerSelection.lowercase();
    computerSelectionAnswer = computerSelection.lowercase();

    if (playerSelectionAnswer == computerSelectionAnswer){
        return "Draw!";
    }

    

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