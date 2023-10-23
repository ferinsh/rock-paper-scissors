var playerScore = 0
var computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay(){
    var choices = ['rock', 'paper', 'scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons(){
    buttons.forEach((button) => {
        button.disabled = true
    });
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
            disableButtons() 
        }
    }
    else if(playerSelection == computerSelection) {
        
    }
    else{
        computerScore += 1
        
    
        if (computerScore == 5) {
           
            document.getElementById("play-again").textContent = "Computer wins, reload to play again."
            disableButtons()
        }
    }

    
    document.getElementById('player-selection').textContent = playerSelection.toUpperCase()
    document.getElementById('comp-selection').textContent = computerSelection.toUpperCase()
    document.getElementById('score-player').textContent = "Player Score: " + playerScore
    document.getElementById('score-comp').textContent = "Computer Score: " + computerScore
    return

}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value.toLowerCase())

    })
})