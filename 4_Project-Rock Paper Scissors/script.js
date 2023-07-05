let arr = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    return (arr[(Math.floor(Math.random() * arr.length))]);
}

function playRound(playerSelection,comp_value) {
    let result = undefined;
    switch (playerSelection.toLowerCase())
    {
        case 'rock':
            switch (comp_value)
            {
                case 'paper':
                    result ='You Lose! Paper beats Rock';
                    break;
                case 'scissor':
                    result = 'You Won! Rock beats Scissor';
                    break;
                default:
                    result = 'It\s a Tie!';
                    break;
            }
        case 'paper':
            switch (comp_value)
            {
                case 'rock':
                    result = 'You Won! Paper beats Rock';
                    break;
                case 'scissor':
                    result = 'You Loose! Scissor beats paper';
                    break;
                default:
                    result = 'It\s a Tie!';
                    break;
            }
        case 'scissors':
            switch (comp_value)
            {
                case 'rock':
                    result = 'You Loose! Rock beats Scissor';
                    break;
                case 'paper':
                    result = 'You Won! Scissor beats paper';
                    break;
                default:
                    result = 'It\s a Tie!';
                    break;
            }
    }
    const div = document.querySelector('.result');
    div.textContent = result;
    return result;
}
// let playerSelection = undefined
// let computerSelection= undefined


function game(playerSelection){
    let playerScore = 0;
    let computerScore = 0;
    let finalResult = undefined;
    for(let i=0; i < 5; i++){
        // playerSelection = prompt('Enter your choice(rock, paper, scissor) ')
        // computerSelection = getComputerChoice()
        let result = playRound(playerSelection, getComputerChoice())
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
        finalResult = `You are a Winner ${playerScore} - ${computerScore}`;
    }else if(playerScore == computerScore){
        finalResult = `It\s a Draw ${playerScore} - ${computerScore}`;
    }else{
        finalResult = `You are a Loser ${playerScore} - ${computerScore}`;
    }
    
        const div = document.querySelector('.final-result');
        div.textContent = finalResult;
    }


let playerSelection = undefined;
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        playerSelection = event.target.textContent.toLowerCase();
        game(playerSelection);
    })
});