let wins = 0;
let losses = 0;

const result = document.getElementById("result");

document.addEventListener("DOMContentLoaded", function () {
  const choices = document.querySelectorAll(".choice");

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      userChoice(choice.dataset.selection);
    });
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function userChoice(userSelection) {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = getComputerChoice();

  result.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    result.innerHTML = `<i class="far fa-hand-${choices[i]}"></i>...`;
    i++;
    if (i >= choices.length) {
      clearInterval(interval);

      const winner = determineWinner(userSelection, computerSelection);

      setTimeout(() => {
        displayResult(winner, computerSelection);
      }, 500); // A short delay before showing the final result
    }
  }, 500); // 500ms (0.5 seconds) interval between displaying each choice
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    wins++;
    return "You win!";
  } else {
    losses++;
    return "Computer wins!";
  }
}

function displayResult(winner, computerSelection) {
  const resultText = document.createElement("span");
  resultText.innerText = winner;

  if (winner.startsWith("You")) {
    resultText.style.backgroundColor = "green";
    applyBackgroundColor("green");
  } else if (winner.startsWith("Computer")) {
    resultText.style.backgroundColor = "red";
    applyBackgroundColor("red");
  } else {
    resultText.style.backgroundColor = "";
    applyBackgroundColor("");
  }

  result.innerHTML = "";
  result.appendChild(resultText);
  setTimeout(() => {
    if (winner !== "It's a tie!") {
      result.innerHTML += ` Computer chose <i class="far fa-hand-${computerSelection}"></i>.`;
    }
    result.innerHTML += `<br>Wins: ${wins}, Losses: ${losses}`;
  }, 500); // A short delay to show the computer's choice after user choice
}

function applyBackgroundColor(color) {
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach(button => {
    button.style.backgroundColor = color;
  });
}
