function getRockPaperScissorValue(){
    return Math.floor(Math.random() * 3);
}

function computerPlay(){
   const RockPaperScissorArray = ["Rock", "Paper", "Scissors"];
    answer = getRockPaperScissorValue();
    console.log(answer);
    console.log(RockPaperScissorArray[answer])

}

computerPlay();