
/*
function getComputerChoice(){
    let choice = ["rock", "paper", "scissor"];
    let x = Math.floor(Math.random() * (3) + 0);
    
    return choice[x];
    
}



function playRound(playerSelection,computerSelection){
    playerSelection = prompt("Enter your choice: ");
    playerSelection = playerSelection.toString().toUpperCase();
    computerSelection = computerSelection.toString().toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection)

    if(playerSelection == computerSelection){
        console.log("Draw");
        return "draw";
    }
    if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("Computer wins");
        return "computer";
    }
    if(playerSelection == "ROCK" && computerSelection == "SCISSOR"){
        console.log("Player wins");
        return "player";
    }
    if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("Computer wins");
        return "computer";
    }
    if(playerSelection == "PAPER" && computerSelection == "SCISSOR"){
        console.log("Player wins");
        return "player";
    }
    if(playerSelection == "SCISSOR" && computerSelection == "ROCK"){
        console.log("Computer wins");
        return "computer";
    }
    if(playerSelection == "SCISSOR" && computerSelection == "PAPER"){
        console.log("Player wins");
        return "player";
    }
}

           
function game(noRounds){
    let comp_score = 0.0;
    let player_score = 0.0;
    let draw = 0.0;

    

    

    console.log(comp_score);
    console.log(player_score);

    if(comp_score > player_score){
        console.log("Computer wins the game");
    }
    else if(player_score > comp_score){
        console.log("Player wins the game");
    }
    else if(player_score == comp_score){
        console.log("Game is a draw");
    }
}

const roundCount = prompt("Number of rounds: ");
game(roundCount);

*/




function getComputerChoice(){
    let choice = ["rock", "paper", "scissor"];
    let x = Math.floor(Math.random() * (3) + 0);
    
    return choice[x].toUpperCase();
    
}



function playRound(playerSelection, computerSelection){

    //console.log(playerSelection);

    if(playerSelection == computerSelection){
        //console.log("Draw");
        return "draw";
    }
    if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        //console.log("Computer wins");
        return "computer";
    }
    if(playerSelection == "ROCK" && computerSelection == "SCISSOR"){
        //console.log("Player wins");
        return "player";
    }
    if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        //console.log("Computer wins");
        return "computer";
    }
    if(playerSelection == "PAPER" && computerSelection == "SCISSOR"){
        //console.log("Player wins");
        return "player";
    }
    if(playerSelection == "SCISSOR" && computerSelection == "ROCK"){
        //console.log("Computer wins");
        return "computer";
    }
    if(playerSelection == "SCISSOR" && computerSelection == "PAPER"){
        //console.log("Player wins");
        return "player";
    }
    
}









function playGame(){
    
    var computerChoice = "";

    var playerScore = 0;
    var computerScore = 0;
    var draw = 0;

    const boxPlayerSelectionDisplay = document.querySelector("#player-selection-display");
    const boxComputerSelectionDisplay = document.querySelector("#computer-selection-display");
    
    
    const playerScoreDisplay = document.querySelector('#player-score');
    const compScoreDisplay = document.querySelector('#comp-score');    
    const drawScoreDisplay = document.querySelector('#draw-score');


    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissor = document.querySelector('#scissor');

    btnRock.addEventListener('click', () => {
        computerChoice = getComputerChoice();
        //console.log(computerChoice);
        playRound("ROCK", computerChoice);
        boxPlayerSelectionDisplay.textContent = "ROCK";
        boxComputerSelectionDisplay.textContent = computerChoice;
        //console.log(playRound("ROCK", computerChoice));

        if(playRound("ROCK", computerChoice) == "player"){
            playerScore = playerScore + 1;
            playerScoreDisplay.textContent = "Player score: " + playerScore;
        }else if(playRound("ROCK", computerChoice) == "computer"){
            computerScore = computerScore + 1;
            compScoreDisplay.textContent = "Computer score: " + computerScore;
            
        }else{
            draw = draw + 1;
            drawScoreDisplay.textContent = "Draw: " + draw;
            
        }

    });

    btnPaper.addEventListener('click', () => {
        computerChoice = getComputerChoice();

        playRound("PAPER", "PAPER");
        boxPlayerSelectionDisplay.textContent = "PAPER";
        boxComputerSelectionDisplay.textContent = getComputerChoice();

        if(playRound("PAPER", computerChoice) == "player"){
            playerScore = playerScore + 1;
            playerScoreDisplay.textContent = "Player score: " + playerScore;
        }else if(playRound("ROCK", computerChoice) == "computer"){
            computerScore = computerScore + 1;
            compScoreDisplay.textContent = "Computer score: " + computerScore;
            
        }else{
            draw = draw + 1;
            drawScoreDisplay.textContent = "Draw: " + draw;
            
        }
    })

    btnScissor.addEventListener('click', () => {
        computerChoice = getComputerChoice();

        playRound("SCISSOR", "SCISSOR");
        boxPlayerSelectionDisplay.textContent = "SCISSOR";
        boxComputerSelectionDisplay.textContent = getComputerChoice();

        if(playRound("ROCK", computerChoice) == "player"){
            playerScore = playerScore + 1;
            playerScoreDisplay.textContent = "Player score: " + playerScore;
        }else if(playRound("ROCK", computerChoice) == "computer"){
            computerScore = computerScore + 1;
            compScoreDisplay.textContent = "Computer score: " + computerScore;
            
        }else{
            draw = draw + 1;
            drawScoreDisplay.textContent = "Draw: " + draw;
            
        }
    })


    


}



playGame();
