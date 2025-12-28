let computerChoice = "";
let userChoice = "";

function pickComputerMove(userChoice) {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = "scissors";
  }

  let result = "";
  if (computerChoice === userChoice) {
    result = "tie";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "you win";
  } else {
    result = "you lose";
  }
  alert(
    `You picked ${userChoice}. Computer picked ${computerChoice}. ${result}`
  );
}


document.querySelector("#rock").addEventListener("click", () => {
  pickComputerMove("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
  pickComputerMove("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
  pickComputerMove("scissors");
});