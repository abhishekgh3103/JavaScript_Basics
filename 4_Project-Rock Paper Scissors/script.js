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


function game(){
    const pwin = winner.filter((item)=> item.includes('Won')).length;
    const cwin = winner.filter((item)=> item.includes('Loose')).length;
    let finalResult = undefined;
    if (pwin > cwin){
        finalResult = `You are a Winner ${pwin} - ${cwin}`;
    }else if(pwin == cwin){
        finalResult = `It\s a Draw ${pwin} - ${cwin}`;
    }else{
        finalResult = `You are a Loser ${pwin} - ${cwin}`;
    }
    
        const frdiv = document.querySelector('.final-result');
        frdiv.textContent = finalResult;
        
        document.body.appendChild(rsbtn);
    }


let playerSelection = undefined;
let winner = []
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', event => {
          console.log(event.target.value);
          playerSelection = event.target.value;
            let result = playRound(playerSelection, getComputerChoice());
            console.log(result);
            winner.push(result);
            console.log(winner);
            if(winner.length >= 5){
                console.log('Thats all Abhi 5 done');
                game();
                //reset();
            }
        }
    )

});
const frdiv = document.querySelector('.final-result');
const rsbtn = document.createElement('button');
rsbtn.textContent = 'Reset';
rsbtn.addEventListener('click', () =>{
    winner = [];
    finalResult = undefined;
    frdiv.textContent = finalResult;
    rsbtn.remove();
})