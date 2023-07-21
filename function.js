let wins = 0;
let losses = 0;

const result = document.getElementById("result");

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
  const userChoiceText = document.createElement("i");
  userChoiceText.className = `far fa-hand-${winner.split(" ")[0]}`;
  result.innerHTML = userChoiceText.outerHTML;

  setTimeout(() => {
    if (winner === "It's a tie!") {
      result.innerHTML += "It's a tie!";
    } else {
      result.innerHTML += ` Computer chose <i class="far fa-hand-${computerSelection}"></i>.`;
    }

    if (winner.startsWith("You")) {
      userChoiceText.style.color = "green";
    } else if (winner.startsWith("Computer")) {
      userChoiceText.style.color = "red";
    } else {
      userChoiceText.style.color = "";
    }

    result.innerHTML += `<br>Wins: ${wins}, Losses: ${losses}`;
  }, 500); // A short delay to show the computer's choice after user choice
}
