
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
const div = document.createElement('div');

const body = document.querySelector('body');


body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);
body.appendChild(div);

rockBtn.addEventListener('click', () => {
    playerSelection = 'Rock';
    computerPlay();
    playRound();
    div.textContent = compareSelections();
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerPlay();
    playRound();
    div.textContent = compareSelections();
});

scissorBtn.addEventListener('click', () => {
    playerSelection = 'Scissor';
    computerPlay();
    playRound();
    div.textContent = compareSelections();
});




// computer chooses one of following string values randomly : Rock, Paper, Scissor. 
function computerPlay() {
    
    let randomNumber = Math.random();

    if(randomNumber <= 0.34) {
        computerSelection = "Rock";
    } else if(randomNumber <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissor";
    } 
    return computerSelection;
}

//compares both player and computer choice and returns a winner
function compareSelections() {

    let winnerRound;


    // all tie scenarios
    if(playerSelection === computerSelection) {
        winnerRound = "It's a tie! nobody won"; 
       return winnerRound; 
    } 
    // all player wins scenarios
    else if(playerSelection == "Rock" && computerSelection == "Scissor") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
       return winnerRound; 
    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
        return winnerRound;
    } else if(playerSelection == "Scissor" && computerSelection == "Paper") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
        return winnerRound;
    } 
    // all computer wins scenarios
    else if(playerSelection == "Scissor" && computerSelection == "Rock") {
        winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
       return winnerRound; 
    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
        return winnerRound;
    } else if(playerSelection == "Paper" && computerSelection == "Scissor") {
       winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
       return winnerRound;
    }
}

//plays one single round 
function playRound() {
    compareSelections();
}

// //plays 5 rounds
// function game() {
//     for(i = 0; i< 5; i++) {
//         playRound();
//     }
// }

