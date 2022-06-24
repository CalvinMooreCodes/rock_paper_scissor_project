
// computer chooses one of following string values randomly : Rock, Paper, Scissor. 
function computerPlay() {
    let computerSelection;
 
       let randomNumber = Math.random();

       if(randomNumber <= 0.34) {
           computerSelection = "Rock";
       } else if(randomNumber <= 0.67) {
           computerSelection = "Paper";
       } else {
           computerSelection = "Scissor";
       } 
       console.log(computerSelection);
       return computerSelection;
}

// player inputs his chosen choice through using the prompt box.
function playerPlay() {
    let playerSelection;

    let userInput = prompt('Rock, Paper or Scissor?');
    // user input is case insensitive
    userInput = userInput.toLowerCase();
    let str1 = userInput.charAt(0).toUpperCase(); 
    let str2 = userInput.slice(1);
    playerSelection = str1.concat(str2);
    console.log(playerSelection);
    return playerSelection;
}

//compares both player and computer choice and returns a winner
function compareSelections() {

    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    let winnerRound;


    // all tie scenarios
    if(playerSelection === computerSelection) {
        winnerRound = "It's a tie! nobody won"; 
        console.log(winnerRound);
       return winnerRound; 
    } 
    // all player wins scenarios
    else if(playerSelection == "Rock" && computerSelection == "Scissor") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
        console.log(winnerRound);
       return winnerRound; 
    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
        console.log(winnerRound);
        return winnerRound;
    } else if(playerSelection == "Scissor" && computerSelection == "Paper") {
        winnerRound = `Player won! ${playerSelection} beats ${computerSelection}.`;
        console.log(winnerRound);
        return winnerRound;
    } 
    // all computer wins scenarios
    else if(playerSelection == "Scissor" && computerSelection == "Rock") {
        winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
        console.log(winnerRound);
       return winnerRound; 
    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
        console.log(winnerRound);
        return winnerRound;
    } else if(playerSelection == "Paper" && computerSelection == "Scissor") {
       winnerRound = `Computer won! ${computerSelection} beats ${playerSelection}.`;
       console.log(winnerRound);
       return winnerRound;
    }
    
}

//plays one single round 
function playRound() {
    compareSelections();
}

//plays 5 rounds
function game() {
    for(i = 0; i< 5; i++) {
        playRound();
    }
}

game();