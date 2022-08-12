"use strict";

const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const scissors = document.querySelector(".btn-scissors");
const scoreboard = document.querySelector(".scoreboard");

const updateScoreboard = function () {
  scoreboard.textContent = `Man ${userScore} : ${compScore} Machine`;
  if (userScore === 5) {
    scoreboard.textContent = `Man is the CHAMPION!`;
    document.body.style.backgroundColor = "green";
    userScore = 0;
    compScore = 0;
  }
  if (compScore === 5) {
    scoreboard.textContent = `The Machine always WINS!`;
    document.body.style.backgroundColor = "red";
    userScore = 0;
    compScore = 0;
  }
};

const renderCompChoice = function (computerSelection) {
  const compChoiceEl = document.querySelector(".computer-choice");
  compChoiceEl.innerHTML = `<img class="img-comp" src="imgs/rps-${computerSelection}.png" alt="${computerSelection}">`;
};

const getComputerChoice = function () {
  const num = Math.trunc(Math.random() * 3) + 1;
  let choice;
  if (num === 1) {
    choice = "rock";
  } else if (num === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
};

let userScore = 0;
let compScore = 0;

const playRound = function (playerSelection, computerSelection) {
  document.body.style.backgroundColor = "rgb(211, 255, 240)";
  if (playerSelection === computerSelection) {
    renderCompChoice(computerSelection);
    return console.log(
      `It's a draw, you both chose ${playerSelection}. Go again!`
    );
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    userScore++;
    renderCompChoice(computerSelection);
    updateScoreboard();
    return console.log(
      `You win. ${playerSelection} beats ${computerSelection}`
    );
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    compScore++;
    renderCompChoice(computerSelection);
    updateScoreboard();
    return console.log(
      `You lose! ${playerSelection} loses to ${computerSelection}`
    );
  }
};

const getPlayerSelection = function () {
  const rpsArr = [rock, paper, scissors];

  rpsArr.forEach((e) =>
    e.addEventListener("click", () => {
      const selection = e.value;
      playRound(selection, getComputerChoice());
    })
  );
};

getPlayerSelection();

// const game = function () {
//   for (let i = 0; i < 100; i++) {
//     playRound(getPlayerSelection(), getComputerChoice());
//     console.log(`Your score ${userScore} : Computer score ${compScore}`);
//     if (userScore + compScore === 5) {
//       break;
//     }
//   }
//   if (userScore > compScore) {
//     alert("You are the champion!");
//   }
//   if (userScore < compScore) {
//     alert("You are a loser!");
//   }
// };

// game();
