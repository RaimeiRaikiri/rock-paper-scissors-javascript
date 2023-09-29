// create var called computerSelection that takes the random number generated
let computerSelection;
// create functio called getComputerChoice that creates random number 1-3 
function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3) + 1;
    // assign 1,2,3 to rock , paper , scissors 
    // change that to uppercase
    if (computerSelection === 1) {
        computerSelection = 'ROCK';
    } else if (computerSelection === 2) {
        computerSelection = 'PAPER';
    } else if (computerSelection === 3) {
        computerSelection = 'SCISSORS';
    }
}


// create var playerSelection
let playerSelection;

// create function called oneRound that runs a round of the game 
function oneRound() {
    // create a prompt that takes rock , paper , scissors case insensitive by setting to uppercase 
    // add prompt answer to playerSelection
    playerSelection = prompt('Please declare your choice: Rock, Paper, or Scissors', '');
playerSelection = playerSelection.toUpperCase();
// write if...else that decides winner and loser
if (playerSelection === 'ROCK'
    || playerSelection === 'PAPER'
    || playerSelection === 'SCISSORS') {
        getComputerChoice();
        // console should log the players selection and computers before logging a winner
        console.log('Your choice was ' + playerSelection);
        console.log('Computer\'s choice was ' + computerSelection)
        if (playerSelection === computerSelection) {
        console.log('It\'s a draw!')
        } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
            console.log('You Win! Congratulations!')
        } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
            console.log('You Win! Congratulations!')
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            console.log('You Win! Congratulations!')
        } else {
            console.log('You Lose! Better luck next time!')
        }

    }
}

// create function called game that runs 5 of oneRound using a for loop
let i;
function game() {
    for (i=0; i <= 5; i++ ) {
        oneRound();
    }
}
game();

