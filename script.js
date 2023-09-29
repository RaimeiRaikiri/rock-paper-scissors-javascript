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
        computerSelection = 'PAPPER';
    } else if (computerSelection === 3) {
        computerSelection = 'SCISSORS';
    }
}

// create var playerSelection
// create a prompt that takes rock , paper , scissors case insensitive by setting to uppercase 
// add prompt answer to playerSelection
// write if...else that decides winner and loser
// console should log the players selection and computers before logging a winner
// create function called oneRound that runs a round of the game 
// create function called game that runs 5 of oneRound using a for loop

