const rockBtn = document.createElement("button");
const papperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const GameResult = document.createElement("div");

const playerScoreP = document.createElement("p");
const computerScoreP = document.createElement("p");

const rock = (rockBtn.textContent = "rock");
papperBtn.textContent = "papper";
scissorsBtn.textContent = "scissors";

rockBtn.addEventListener("click", () => {
  GameResult.textContent = game(rockBtn.textContent);
  playerScoreP.textContent = `Player Score: ${playerScore}`;
  computerScoreP.textContent = `Computer Score Score: ${computerScore}`;
});

papperBtn.addEventListener("click", () => {
  GameResult.textContent = game(papperBtn.textContent);
  playerScoreP.textContent = `Player Score: ${playerScore}`;
  computerScoreP.textContent = `Computer Score Score: ${computerScore}`;
});

scissorsBtn.addEventListener("click", () => {
  GameResult.textContent = game(scissorsBtn.textContent);
  playerScoreP.textContent = `Player Score: ${playerScore}`;
  computerScoreP.textContent = `Computer Score Score: ${computerScore}`;
});
document.body.append(rockBtn, papperBtn, scissorsBtn);
document.body.append(GameResult, playerScoreP, computerScoreP);
