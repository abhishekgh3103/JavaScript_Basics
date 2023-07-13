function grid(){
    let board = document.querySelector('.board');
    let box = board.querySelectorAll('div');
    box.forEach((div) => div.remove());
    board.style = 'grid-template-columns = repeat(40px 1fr)';
    board.style = 'grid-template-rows = repeat(40px 1fr)';
    
    console.log("Yes its called")
    let amount = 40 * 40;
    for(let i =0; i < amount; i++){
        let square = document.createElement('div');
        square.addEventListener("mouseover", () => {});
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
    

}

grid()