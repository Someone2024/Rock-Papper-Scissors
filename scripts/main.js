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

    const playerScore = 0;
    const computerScore = 0;
  if (playerSelection === "rock" && computerSelection === "scissors")
    return `You win ${playerSelection} Beats ${computerSelection}`;
  else if (playerSelection === "papper" && computerSelection === "rock")
    return `You win ${playerSelection} Beats ${computerSelection}`;
  else if (playerSelection === "scissors" && computerSelection === "papper")
    return `You win ${playerSelection} Beats ${computerSelection}`;
    else if (playerSelection === computerSelection )
    return `It is a Tie!`;
  else return `You lose ${computerSelection} Beats ${playerSelection}`;
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound("rock", getComputerChoice()));
    }
}

game()