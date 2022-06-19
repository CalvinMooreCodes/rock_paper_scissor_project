function computerPlay() {
    let randomNumber = Math.random();
    let computerChoice;

    if(randomNumber <= 0.33) {
        computerChoice = 'rock';
    } else if(randomNumber <= 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }
}

function playerPlay() {
    let playerChoice = prompt('choose between rock, paper and scissor');

    //making playerChoice non-case sensitive
    playerChoice = playerChoice.toLowerCase();
    let capitalLetter = playerChoice.charAt(0).toUpperCase();
    let stringRemainder = playerChoice.slice(1);
    playerChoice = capitalLetter.concat(stringRemainder); 

    if(playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissor") {
        alert("You didnt choose between rock, paper and scissor, try again.");
        playerChoice = "";
        return
    } console.log(playerChoice);
}

playerPlay();