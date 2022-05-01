const gameArray = ['Rock', 'Paper', 'Scissors'];

//select a random choice for the computer
function computerPlay(){
    return gameArray[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    let result;
    
    if(playerSelection === computerSelection){
        result = 'tie';
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        result = 'win';
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        result = 'lose';
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        result = 'win';
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        result = 'lose';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        result = 'win';
    } else {
        result = 'lose';
    }

    return result;
}

function refreshPage(){
    location.reload();
}

function createResetButton(){
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play again';
    resetButton.addEventListener('click', refreshPage);
    container.appendChild(resetButton);
}

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const container = document.querySelector('.container');
let playerCounter = 0;
let computerCounter = 0;
let result;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        result = playRound(button.textContent, computerPlay());

        if(result === 'win'){
            playerCounter += 1;
            playerScore.textContent = playerCounter;
        } else if(result === 'lose'){
            computerCounter += 1;
            computerScore.textContent = computerCounter;
        }

        if(playerCounter === 5 || computerCounter === 5){
            buttons.forEach(button => button.remove());

            const announceWinner = document.createElement('div');
            announceWinner.style.fontSize = '70px';
            
            if(playerCounter === 5){
                announceWinner.textContent = 'You win!';
                announceWinner.style.color = 'blue';
            } else {
                announceWinner.textContent = 'Computer wins!';
                announceWinner.style.color = 'red';
            }

            container.appendChild(announceWinner);
            createResetButton();
        }
    })
});