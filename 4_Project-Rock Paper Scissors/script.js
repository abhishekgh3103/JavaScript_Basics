let arr = ['rock', 'paper', 'scissor']
function getComputerChoice() {
    return (arr[(Math.floor(Math.random() * arr.length))]);
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase())
    {
        case 'rock':
            switch (computerSelection)
            {
                case 'paper':
                    return 'You Lose! Paper beats Rock';
                case 'scissor':
                    return 'You Won! Rock beats Scissor';
                default:
                    return 'It\s a Tie!'
            }
        case 'paper':
            switch (computerSelection)
            {
                case 'rock':
                    return 'You Won! Paper beats Rock';
                case 'scissor':
                    return 'You Loose! Scissor beats paper';
                default:
                    return 'It\s a Tie!'
            }
        case 'scissor':
            switch (computerSelection)
            {
                case 'rock':
                    return 'You Loose! Rock beats Scissor';
                case 'paper':
                    return'You Won! Scissor beats paper';
                default:
                    return 'It\s a Tie!'
            }
    }
}
let playerSelection = undefined
let computerSelection= undefined

function game(){
    let playerScore = 0
    let computerScore = 0
    for(let i=0; i < 5; i++){
        playerSelection = prompt('Enter your choice(rock, paper, scissor) ')
        computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        console.log(result)
        if (result.includes('Won')){
            playerScore++
        }else if(result.includes('Tie')) {
            computerScore += 0.5
            playerScore += 0.5
        }else{
            computerScore++
        }
    }
    if (playerScore > computerScore){
        console.log(`You are a Winner ${playerScore} - ${computerScore}`)
    }else if(playerScore == computerScore){
        console.log(`It\s a Draw ${playerScore} - ${computerScore}`)
    }else{
        console.log(`You are a Loser ${playerScore} - ${computerScore}`)
    }
}

game()

