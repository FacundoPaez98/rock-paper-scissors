const gameArray = ['Rock', 'Paper', 'Scissors'];

//select a random choice for the computer
function computerPlay(){
    return gameArray[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    let message;
    
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        message = 'It\'s a tie!';
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'){
        message = 'You win! Rock beats Scissors';
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper'){
        message = 'You lose! Paper beats Rock';
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'){
        message = 'You win! Paper beats Rock';
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors'){
        message = 'You lose! Scissors beats Paper';
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper'){
        message = 'You win! Scissors beats Paper';
    } else {
        message = 'You win! Rock beats Scissors';
    }

    return message;
}

//function that plays 5 rounds of the game
function game(){
    let playerSelection;
    let validString = false;

    for(let i=0; i<5; i++){
        while(!validString){
            playerSelection = prompt('Rock, Paper or Scissors?');
            //if the user close the prompt, change the null to an empty string
            if(playerSelection === null){
                playerSelection = '';
            }

            validString = validatePrompt(playerSelection);
        }
        console.log(`Try number ${i+1}`);
        console.log(playRound(playerSelection, computerPlay()));
        validString = false;
    }
}

//validates that the user only enters rock, paper or scissors
function validatePrompt(validChoice){
    let result = false;

    if(validChoice.toLowerCase() === 'rock' || validChoice.toLowerCase() === 'paper' || validChoice.toLowerCase() === 'scissors'){
        result = true;
    } else{
        console.log('Please type Rock, Paper or Scissors');
    }

    return result;
}

game();