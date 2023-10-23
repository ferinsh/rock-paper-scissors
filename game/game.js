


function getComputerChoice(){
    let choice = ["rock", "paper", "scissor"];
    let x = Math.floor(Math.random() * (3) + 0);
    
    return choice[x].toUpperCase();
}

function getWinner(playerSelection, boxSelectionDisplay){
    var computerSelection = "";
    computerSelection = getComputerChoice().toUpperCase();
    boxSelectionDisplay[0].textContent = "ROCK";
    boxSelectionDisplay[1].textContent = computerSelection;

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

function playRound(playerSelection, scoreArray, scoreDisplay){
    
    
    console.log(scoreArray[0]);
    console.log(scoreArray[1]);
    console.log(scoreArray[2]);

    if(getWinner(playerSelection, boxSelectionDisplay) == "player"){
        scoreArray[0] = scoreArray[0] + 1;
        scoreDisplay[0].textContent = "Player score: " + scoreArray[0];
    }
    if(getWinner(playerSelection, boxSelectionDisplay) == "computer"){
        scoreArray[1] = scoreArray[1] + 1;
        scoreDisplay[1].textContent = "Computer score: " + scoreArray[1];
    }
    if(getWinner(playerSelection, boxSelectionDisplay) == "draw"){
        scoreArray[2] = scoreArray[2] + 1;
        scoreDisplay[2].textContent = "Draw: " + scoreArray[2];
    }
}


function checkRound(roundNumber){
    var roundNumberInt = parseInt(roundNumber.textContent);
    return roundNumberInt;
}

function nextround(){
    playGame(scoreArray, boxSelectionDisplay, scoreDisplay);
}


function playGame(scoreArray, boxSelectionDisplay, scoreDisplay){
/*    var computerChoice = "";

    var playerScore = 0;
    var computerScore = 0;
    var draw = 0;
*/
    
    console.log(scoreArray)

    //const boxPlayerSelectionDisplay = document.querySelector("#player-selection-display");
    //console.log(typeof(boxPlayerSelectionDisplay));
    
    //const boxComputerSelectionDisplay = document.querySelector("#computer-selection-display");
    
    //const playerScoreDisplay = document.querySelector('#player-score');
    //const compScoreDisplay = document.querySelector('#comp-score');    
    //const drawScoreDisplay = document.querySelector('#draw-score');

    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissor = document.querySelector('#scissor');

    
    
    
    
        console.log(checkRound(roundNumber));
        btnRock.addEventListener('click', () => {
            playRound("ROCK", scoreArray, boxSelectionDisplay, scoreDisplay);
            console.log(checkRound(roundNumber));
            
            if(checkRound(roundNumber)<noRounds){
                nextround();
            }
            
        });

        btnPaper.addEventListener('click', () => {
            playRound("PAPER", scoreArray, boxSelectionDisplay, scoreDisplay);

        });

        btnScissor.addEventListener('click', () => {
            playRound("SCISSOR", scoreArray, boxSelectionDisplay, scoreDisplay);

        });

    

    
}




const boxPlayerSelectionDisplay = document.querySelector("#player-selection-display");
const boxComputerSelectionDisplay = document.querySelector("#computer-selection-display");
var boxSelectionDisplay = [boxPlayerSelectionDisplay, boxComputerSelectionDisplay];


const playerScoreDisplay = document.querySelector('#player-score');
const compScoreDisplay = document.querySelector('#comp-score');    
const drawScoreDisplay = document.querySelector('#draw-score');
var scoreDisplay = [playerScoreDisplay, compScoreDisplay, drawScoreDisplay];


var playerScore = 0;
var computerScore = 0;
var draw = 0;
var scoreArray = [ playerScore, computerScore, draw];


var noRounds = 5;
var roundNumber = document.querySelector('#round-number');




playGame(scoreArray, boxSelectionDisplay, scoreDisplay);
    














