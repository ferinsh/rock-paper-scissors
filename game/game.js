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
        result = ('You win!' + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        
        if (playerScore == 5){
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons() 
        }
    }
    else if(playerSelection == computerSelection) {
        result = ("It's a tie. You both choose " + playerSelection
                + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else{
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    
        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    document.getElementById('player-selection').textContent = playerSelection
    return

}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value)

    })
})