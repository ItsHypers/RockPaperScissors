const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  play("0");
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  play("1");
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  play("2");
});

let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function play(playerPick) {
  computerPick = computer();
  winner(winnerDecider(playerPick, computerPick));
  if (winnerDecider(playerPick, computerPick) == "Computer") {
    computerScore++;
  }
  if (winnerDecider(playerPick, computerPick) == "Player") {
    playerScore++;
  }
  document.getElementById("winner").textContent = winnerDecider(
    playerPick,
    computerPick
  );
  document.getElementById("playerDecision").textContent =
    NumtoString(playerPick);
  document.getElementById("computerDecision").textContent =
    NumtoString(computerPick);
  document.getElementById("playerS").textContent = playerScore;
  document.getElementById("computerS").textContent = computerScore;
  if (playerScore == 5) {
    finalWinner("player");
  }
  if (computerScore == 5) {
    finalWinner("computer");
  }
}

function computer() {
  number = randomInteger(0, 2);
  let rock = document.getElementById("Crock");
  let paper = document.getElementById("Cpaper");
  let scissors = document.getElementById("Cscissors");
  if (number === 0) {
    addEffect(rock, "computerHover");
    removeEffect(paper, "computerHover", scissors);
  } else if (number === 1) {
    addEffect(paper, "computerHover");
    removeEffect(rock, "computerHover", scissors);
  } else if (number === 2) {
    addEffect(scissors, "computerHover");
    removeEffect(rock, "computerHover", paper);
  }
  return number;
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function winnerDecider(playerPick, computerPick) {
  const x = playerPick;
  const y = computerPick;
  if (x == y) {
    return "Draw";
  }
  if (mod(x - y, choices.length) < choices.length / 2) {
    return "Player";
  } else {
    return "Computer";
  }
}
function mod(a, b) {
  const c = a % b;
  return c < 0 ? c + b : c;
}

function winner(winner, player, computer) {
  if (winner == "computer") {
    console.log(winner + " wins! " + computer + " beats " + player);
  }
  if (winner == "player") {
    console.log(winner + " wins! " + player + " beats " + computer);
  }
  if (winner == "draw") {
    console.log("It was a draw! Both picked " + player);
  }
}

function finalWinner(winner) {
  let rock = document.getElementById("Crock");
  let paper = document.getElementById("Cpaper");
  let scissors = document.getElementById("Cscissors");
  if (winner == "computer") {
    document.getElementById("description").textContent =
      "Unfortunately you did not win! Restart and try again!";
    document.getElementById("title").textContent = "You lost!";
    document.getElementById("image").src = "images/sad.png";
    removeEffect(rock, "computerHover", paper, scissors);
  }
  if (winner == "player") {
    document.getElementById("description").textContent =
      "Congrats! You beat the computer! Restart to try your luck again!";
    document.getElementById("title").textContent = "You won!";
    document.getElementById("image").src = "images/happy.png";
    removeEffect(rock, "computerHover", paper, scissors);
  }
  document.getElementById("dismiss-popup-btn").disabled = false;
  document.getElementsByClassName("popup")[0].classList.add("active");
}

function NumtoString(number) {
  if (number == 0) {
    return "Rock";
  }
  if (number == 1) {
    return "Paper";
  }
  if (number == 2) {
    return "Scissors";
  }
}

document.getElementById("dismiss-popup-btn").disabled = true;
document
  .getElementById("dismiss-popup-btn")
  .addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
    playerScore = 0;
    computerScore = 0;
    document.getElementById("winner").textContent = "";
    document.getElementById("playerDecision").textContent = "";
    document.getElementById("computerDecision").textContent = "";
    document.getElementById("playerS").textContent = 0;
    document.getElementById("computerS").textContent = 0;
    document.getElementById("dismiss-popup-btn").disabled = true;
  });
function removeEffect(a, b, c) {
  a.classList.remove(b);
  if (typeof c !== "undefined") {
    c.classList.remove(b);
  }
  if (typeof d !== "undefined") {
    d.classList.remove(b);
  }
}
function addEffect(a, b, c, d) {
  a.classList.add(b);
  if (typeof c !== "undefined") {
    c.classList.add(b);
  }
  if (typeof d !== "undefined") {
    d.classList.add(b);
  }
}
