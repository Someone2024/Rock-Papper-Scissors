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

function game() {
  const winPattern = /win/i;
  const losePattern = /lose/i;
  const tiePattern = /Tie/;
  let winResult;
  let loseResult;
  let tieResult;
  let playerScore = 0;
  let computerScore = 0;
  let winner;

  for (let i = 0; i < 5; i++) {
    const raundResult = playRound("rock", getComputerChoice());
    winResult = winPattern.test(raundResult);
    loseResult = losePattern.test(raundResult);
    tieResult = tiePattern.test(raundResult);

    if (winResult) {
      playerScore++;
      console.log("playerSCore: ", playerScore)
    } else if(loseResult) {
      computerScore++;
      console.log("computerScore: ", computerScore)
    }else if(tieResult){
        playerScore
        computerScore
    }

    console.log(raundResult)
  }

  if (playerScore > computerScore)
    return (winner = `The Player Wins! with a score of ${playerScore}`);
  else {
    return (winner = `The Computer Wins! with a score of ${computerScore}`);
  }
}

console.log(game());