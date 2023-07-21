let userScore = 0;
let computerScore = 0;

const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function userChoice(userSelection) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = getComputerChoice();
  
    result.innerHTML = ""; // Clear any previous results
  
    let i = 0;
    const interval = setInterval(() => {
      result.innerText = choices[i] + "...";
      i++;
      if (i >= choices.length) {
        clearInterval(interval);
  
        const winner = determineWinner(userSelection, computerSelection);
  
        setTimeout(() => {
          displayResult(winner, computerSelection);
        }, 500); // A short delay before showing the final result
      }
    }, 500); // 1000ms (1 second) interval between displaying each choice
  }
  

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    userScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function displayResult(winner, computerSelection) {
  result.innerText = `${winner} Computer chose ${computerSelection}.`;
  scoreDisplay.innerText = userScore;
}
