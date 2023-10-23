//FUNCTIONS
//function definitions
function playRound(roundChoice, roundScore, tempChoicePlayer){    //roundChoice == choice, roundScore == score
    
    roundChoice[0] = tempChoicePlayer;                     //player choice  
    roundChoice[1] = getComputerChoice();        //computer choice
    
    
    if(roundChoice[0] == "rock" && roundChoice[1] == "rock"){
        roundScore[1] += 1;
        console.log("draw");
    }
    if(roundChoice[0] == "paper" && roundChoice[1] == "paper"){
        roundScore[1] += 1;
        console.log("draw");
    }
    if(roundChoice[0] == "scissor" && roundChoice[1] == "scissor"){
        roundScore[1] += 1;
        console.log("draw");
    }
    if(roundChoice[0] == "rock" && roundChoice[1] == "scissor"){
        roundScore[0] += 1;
        console.log("player wins");
    }
    if(roundChoice[0] == "paper" && roundChoice[1] == "rock"){
        roundScore[0] += 1;
        console.log("player wins");
    }
    if(roundChoice[0] == "scissor" && roundChoice[1] == "paper"){
        roundScore[0] += 1;
        console.log("player wins");
    }
    if(roundChoice[0] == "rock" && roundChoice[1] == "paper"){
        roundScore[2] += 1;
        console.log("computer wins");
    }
    if(roundChoice[0] == "paper" && roundChoice[1] == "scissor"){
        roundScore[2] += 1;
        console.log("computer wins");
    }
    if(roundChoice[0] == "scissor" && roundChoice[1] == "rock"){
        roundScore[2] += 1;
        console.log("computer wins");
    }
    
    if(round[0]<round[1]){
        console.log("Over");
        console.log('OVER');
        console.log(score);
        console.log("score reset");
        console.log(score);
    }

    round[0]++;
    console.log(roundScore);

}

function getComputerChoice(){
    const TEMP = ["rock", "paper", "scissor"];
    const TEMP_RANDOM = Math.floor(Math.random() * 3);
    return TEMP[TEMP_RANDOM];
}

function getWinner(){
    if(score[0] == score[2]){
        return "game is a draw"
    }
    if(score[0] > score[2]){
        return "player wins the game";
    }
    if(score[0] < score[2]){
        return "computer wins the game";
    }
}

function btnCallRock(){
    btnRock.addEventListener('click', console.log("rock"));
}


function playGame(roundNum){
    
}




//GAME MEMORY
//Defintions

//variables



var round = [0,4];            //[Current round number, Total round number]
var score = [0, 0, 0];        //[player, draw, computer]
var choice = ["", ""];        //[player, computer]
var winner = "DRAW";


//constants

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissor = document.querySelector('#scissor');





//GAME LOGIC




//function calls



playGame(round);




//memory value tests
