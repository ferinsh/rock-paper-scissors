var playerScore = 0
var computerScore = 0
var roundNum = 1
const buttons = document.querySelectorAll('#btn')

const btnReset = document.querySelector('#reset')

function computerPlay(){
    var choices = ['rock', 'paper', 'scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons(){
    buttons.forEach((button) => {
        button.disabled = true
    });
}

function enableButtons(){
    buttons.forEach((button) => {
        button.disabled = false
    })
}

function playRound(playerSelection){
    var computerSelection = computerPlay()
    var result = ""

    if((playerSelection == "rock" && computerSelection == "scissor") || 
       (playerSelection == "scissor" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")){

        playerScore += 1
        
        
        if (playerScore == 5){
            
            document.getElementById("play-again").textContent = "Player Wins. reload to play again."
            roundNum += 1
            document.getElementById('round-num').textContent = "ROUND: " + roundNum
            disableButtons() 
        }
    }
    else if(playerSelection == computerSelection) {
        
    }
    else{
        computerScore += 1
        
    
        if (computerScore == 5) {
           
            document.getElementById("play-again").textContent = "Computer wins, reload to play again."
            roundNum += 1
            document.getElementById('round-num').textContent = "ROUND: " + roundNum
            disableButtons()
        }
    }

    
    document.getElementById('player-selection').textContent = playerSelection.toUpperCase()
    document.getElementById('comp-selection').textContent = computerSelection.toUpperCase()
    document.getElementById('score-player').textContent = "PLAYER SCORE: " + playerScore
    document.getElementById('score-comp').textContent = "COMPUTER SCORE: " + computerScore
    return

}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value.toLowerCase())

    })
})

btnReset.addEventListener('click', () => {
    //location.reload()
    playerScore = 0;
    computerScore = 0;
    enableButtons()
    document.getElementById('player-selection').textContent = ""
    document.getElementById('comp-selection').textContent = ""
    document.getElementById('score-player').textContent = "PLAYER SCORE: " + playerScore
    document.getElementById('score-comp').textContent = "COMPUTER SCORE: " + computerScore
    document.getElementById("play-again").textContent = "PLAY"
    
    
    
})
