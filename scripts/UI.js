const buttonsContainer = document.getElementById("buttons-container")

const PLAYERCHOICES = ["rock", "papper", "scissors"];

const rockBtn = document.createElement("button");
const papperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const rockImg = document.createElement("img");
const papperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

rockImg.src = "./assets/rock.PNG"
papperImg.src = "./assets/papper.PNG"
scissorsImg.src = "./assets/scissors.PNG"

const GameResult = document.createElement("div");
GameResult.classList.add("game-result");

const playerScoreP = document.createElement("p");
const computerScoreP = document.createElement("p");
const ScoreDiv = document.createElement("div");
ScoreDiv.classList.add("score-div");
playerScoreP.classList.add("score");
computerScoreP.classList.add("score");

rockBtn.classList.add("button");
papperBtn.classList.add("button");
scissorsBtn.classList.add("button");

rockImg.classList.add("image");
papperImg.classList.add("image");
scissorsImg.classList.add("image");

rockBtn.addEventListener("click", () => {
  GameResult.textContent = game(PLAYERCHOICES[0]);
  playerScoreP.textContent = `Player Score: ${playerScore}`;
  computerScoreP.textContent = `Computer Score: ${computerScore}`;
});

papperBtn.addEventListener("click", () => {
  GameResult.textContent = game(PLAYERCHOICES[1]);
  playerScoreP.textContent = `Player Score: ${playerScore}`;
  computerScoreP.textContent = `Computer Score: ${computerScore}`;
});

scissorsBtn.addEventListener("click", () => {
  GameResult.textContent = game(PLAYERCHOICES[2]);
  playerScoreP.textContent = `Player Score: ${playerScore}`;
  computerScoreP.textContent = `Computer Score: ${computerScore}`;
});

rockBtn.appendChild(rockImg);
papperBtn.appendChild(papperImg);
scissorsBtn.appendChild(scissorsImg);

buttonsContainer.append(rockBtn, papperBtn, scissorsBtn);
document.body.append(buttonsContainer);

ScoreDiv.append(playerScoreP, computerScoreP);

document.body.append(ScoreDiv, GameResult);
