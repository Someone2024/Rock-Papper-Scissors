let playerScore = 0;
let computerScore = 0;
let winner;

function getComputerChoice() {
  const CHOICES = ["rock", "papper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return CHOICES[randomNumber];
}

function getPlayerChoice() {
  const userChoice = prompt("Pick between Rock, Papper or Scissors");
  userChoice.toLocaleLowerCase();

  return userChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors")
    return `You win ${playerSelection} Beats ${computerSelection}`;
  else if (playerSelection === "papper" && computerSelection === "rock")
    return `You win ${playerSelection} Beats ${computerSelection}`;
  else if (playerSelection === "scissors" && computerSelection === "papper")
    return `You win ${playerSelection} Beats ${computerSelection}`;
  else if (playerSelection === computerSelection) return `It is a Tie!`;
  else return `You lose ${computerSelection} Beats ${playerSelection}`;
}

function game(playerSelection) {
  const winPattern = /win/i;
  const losePattern = /lose/i;
  const tiePattern = /Tie/;
  let winResult;
  let loseResult;
  let tieResult;

  const raundResult = playRound(playerSelection, getComputerChoice());
  winResult = winPattern.test(raundResult);
  loseResult = losePattern.test(raundResult);
  tieResult = tiePattern.test(raundResult);

  if (winResult === true) {
    playerScore++;
    console.log({ playerScore });
  } else if (loseResult === true) {
    computerScore++;
    console.log({ computerScore });
  } else {
    playerScore;
    computerScore;
  }

  console.log(raundResult);

  if (playerScore === 5 ) {
    winner = `The Player Wins! with a score of ${playerScore}`;
    playerScore = 0;
    computerScore = 0;
    return winner
  } else if(computerScore === 5){
    winner = `The Computer Wins! with a score of ${computerScore}`;
    computerScore = 0;
    playerScore = 0;
    return winner
  }
}