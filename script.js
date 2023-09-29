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
            // convert these strings to numbers draw = 1 lose = 0 win =1
        console.log('It\'s a draw!');
        draw = 1 ;
        drawComputer = 1;
        } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
            console.log('You Win! Congratulations!');
            win = 1;
        } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
            console.log('You Win! Congratulations!');
            win = 1;
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            console.log('You Win! Congratulations!');
            win = 1;
        } else {
            console.log('You Lose! Better luck next time!');
            lose = 0; 
            winComputer = 1;
            }
            playerWinLoss = playerWinLoss + win + lose + draw;
            computerWinLoss = computerWinLoss + winComputer + drawComputer;
            console.log(playerWinLoss);
            console.log(computerWinLoss);

    }
}

// create function called game that runs 5 of oneRound using a for loop
let i;
function game() {
    for (i=0; i <= 5; i++ ) {
        oneRound();
    }

    
}
oneRound();

//want to add a final winner or loser of total game after game()
// first create win lose draw vars that will store the win lose draw strings
let win = 0, lose = 0, draw = 0;
// need seperate var for computer win and draw
let winComputer = 0, drawComputer = 0;

// create var playerWinLoss computerWinLoss
let playerWinLoss = 0, computerWinLoss = 0;
// each win loss will be added to both vars respectively
// if...else for playerWinLoss > computerWinLoss player < computer and player === computer titling overall winner


