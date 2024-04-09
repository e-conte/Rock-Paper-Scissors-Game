/* variables*/
let playerName = "";
let gameCounter;
let computerTry;
let playerTry;

function welcomePlayer() {

    while (playerName === "") {
        playerName = prompt("What is your name?")
    }
    console.log("Ok, " + playerName + ". Lets Play!")
    gameCounter = 5;
    return (playerName, gameCounter)
}


function computerSelection() {
    let randomNumber = Number((Math.random() * 10).toFixed(3));
    switch (true) {
        case randomNumber <= 3.33:
            {
                computerTry = "ROCK";
                break;
            }
        case randomNumber <= 6.66:
            {
                computerTry = "PAPER";
                break;
            }
        case randomNumber <= 10:
            {
                computerTry = "SCISSORS";
                break;
            }
    }
    return computerTry;
}



function playerSelection() {
    playerTry = prompt("Choose!: Rock, Paper or Scissors");
    playerTry = playerTry.toUpperCase();
}


let playerWins = 0;
function gameMatch() {
    switch (true) {
        case (playerTry === "ROCK" && computerTry === "SCISSORS" || playerTry === "PAPER" && computerTry === "ROCK" || playerTry === "SCISSORS" && computerTry === "PAPER"): {
            playerWins++;
            alert(playerName + " You won!");
            break;
        }
        case (playerTry === computerTry): {
            alert(playerName + " Tied Game!");
            break;
        }
        default:
            alert(playerName + " You Lost")
    }
    return playerWins
}


welcomePlayer();
computerSelection();
playerSelection();
gameMatch();