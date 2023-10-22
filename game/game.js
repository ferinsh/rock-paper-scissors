
function getComputerChoice(){
    let choice = ["rock", "paper", "scissor"];
    let x = Math.floor(Math.random() * (3) + 0);
    
    return choice[x].toUpperCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "draw";
    }
    if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        return "computer";
    }
    if(playerSelection == "ROCK" && computerSelection == "SCISSOR"){
        return "player";
    }
    if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        return "computer";
    }
    if(playerSelection == "PAPER" && computerSelection == "SCISSOR"){
        return "player";
    }
    if(playerSelection == "SCISSOR" && computerSelection == "ROCK"){
        return "computer";
    }
    if(playerSelection == "SCISSOR" && computerSelection == "PAPER"){
        return "player";
    }   
}

function playGame(computerChoice, playerScore, computerScore, draw){
/*    var computerChoice = "";

    var playerScore = 0;
    var computerScore = 0;
    var draw = 0;
*/
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
        playRound("ROCK", computerChoice);
        boxPlayerSelectionDisplay.textContent = "ROCK";
        boxComputerSelectionDisplay.textContent = computerChoice;

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

        playRound("PAPER", computerChoice);
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

        playRound("SCISSOR", computerChoice);
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



var playerScore = 0;
var compScore = 0;
var draw = 0;
var computerChoice = ""
var noRounds = 5;

var scoreArray = [playerScore,compScore,draw];
console.log(scoreArray[compScore]);




var roundNumber = document.querySelector('#round-number');
console.log(roundNumber.textContent);




  playGame("", 0, 0, 0);





