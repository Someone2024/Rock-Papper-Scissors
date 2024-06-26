const buttonsContainer = document.getElementById("buttons-container")

const PLAYERCHOICES = ["rock", "papper", "scissors"];

const rockBtn = document.createElement("button");
const papperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const rockImg = document.createElement("img");
const papperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

rockImg.src = "https://parkercon.github.io/rock-paper-scissors/images/rock.png"
papperImg.src = "https://parkercon.github.io/rock-paper-scissors/images/paper.png"
scissorsImg.src = "https://parkercon.github.io/rock-paper-scissors/images/scissors.png"

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

function awaitComputerChoice(SelectionNumber) {
  GameResult.textContent = "Loading computer choice"
  setTimeout(() => {
    GameResult.textContent = game(PLAYERCHOICES[SelectionNumber]);
    playerScoreP.textContent = `Player Score: ${playerScore}`;
    computerScoreP.textContent = `Computer Score: ${computerScore}`;
  }, 1000);
}
rockBtn.addEventListener("click", () => {
  awaitComputerChoice(0)
});

papperBtn.addEventListener("click", () => {
  awaitComputerChoice(1)
});

scissorsBtn.addEventListener("click", () => {
  awaitComputerChoice(2)
});

rockBtn.appendChild(rockImg);
papperBtn.appendChild(papperImg);
scissorsBtn.appendChild(scissorsImg);

buttonsContainer.append(rockBtn, papperBtn, scissorsBtn);
document.body.append(buttonsContainer);

ScoreDiv.append(playerScoreP, computerScoreP);

document.body.append(ScoreDiv, GameResult);
