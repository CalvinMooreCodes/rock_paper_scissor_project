let playerScore = 0;
let computerScore = 0;

const staticText = document.createElement('div');
staticText.setAttribute('style', 'white-space: pre;');
staticText.textContent = 'Welcome to this Rock Paper Scissor game! First to 5 wins the game!\r\n';
staticText.textContent += 'What are you waiting for ? Make a choice !';

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
const divPlayerChoice = document.createElement('div');
const divComputerChoice = document.createElement('div');
const divResult = document.createElement('div');
const divScore = document.createElement('div');

divPlayerChoice.classList.add('textPlayerMove');
divComputerChoice.classList.add('textComputerMove');
divResult.classList.add('textWinnerAnnounce');
divScore.classList.add('scoreboard');

const welcomeText = document.querySelector('.welcomeText');
const buttonsBox = document.querySelector('.buttonsBox');
const textContainer = document.querySelector('.textContainer');


welcomeText.appendChild(staticText);
buttonsBox.appendChild(rockBtn);
buttonsBox.appendChild(paperBtn);
buttonsBox.appendChild(scissorBtn);
textContainer.appendChild(divPlayerChoice);
textContainer.appendChild(divComputerChoice);
textContainer.appendChild(divResult);
textContainer.appendChild(divScore);

rockBtn.addEventListener('click', () => {
    playerSelection = 'Rock';
    computerPlay();
    divPlayerChoice.textContent = `Player chose ${playerSelection}`;
    divComputerChoice.textContent = `Computer chose ${computerSelection}`;
    divResult.textContent = compareSelections();
    divScore.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    checkForWinner();
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerPlay();
    divPlayerChoice.textContent = `Player chose ${playerSelection}`;
    divComputerChoice.textContent = `Computer chose ${computerSelection}`;
    divResult.textContent = compareSelections();
    divScore.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    checkForWinner();
});

scissorBtn.addEventListener('click', () => {
    playerSelection = 'Scissor';
    computerPlay();
    divPlayerChoice.textContent = `Player chose ${playerSelection}`;
    divComputerChoice.textContent = `Computer chose ${computerSelection}`;
    divResult.textContent = compareSelections();
    divScore.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    checkForWinner();
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
        playerScore++;
       return winnerRound; 
    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
        return winnerRound;
    } else if(playerSelection == "Scissor" && computerSelection == "Paper") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
        return winnerRound;
    } 
    // all computer wins scenarios
    else if(playerSelection == "Scissor" && computerSelection == "Rock") {
        winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
       return winnerRound; 
    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        return winnerRound;
    } else if(playerSelection == "Paper" && computerSelection == "Scissor") {
       winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
       computerScore++;
       return winnerRound;
    }
}

function checkForWinner() {
    if(playerScore === 5) {
        alert('Player was first to reach 5 round wins so he won the game!');
    } else if(computerScore === 5) {
        alert('Computer was first to reach 5 round wins so he won the game!');
    }
}
