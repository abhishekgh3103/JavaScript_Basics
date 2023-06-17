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
const playerSelection = prompt('Enter your choice(rock, paper, scissor) ')
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))