"use strict";

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
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  //   if (playerSelectionLowerCase !== "rock" || "paper" || "scissors") {
  //     return;
  //   }

  if (playerSelectionLowerCase === computerSelection) {
    return console.log(
      `It's a draw, you both chose ${playerSelectionLowerCase}. Go again!`
    );
  } else if (
    (playerSelectionLowerCase === "paper" && computerSelection === "rock") ||
    (playerSelectionLowerCase === "scissors" &&
      computerSelection === "paper") ||
    (playerSelectionLowerCase === "rock" && computerSelection === "scissors")
  ) {
    userScore++;
    return console.log(
      `You win. ${playerSelectionLowerCase} beats ${computerSelection}`
    );
  } else if (
    (playerSelectionLowerCase === "scissors" && computerSelection === "rock") ||
    (playerSelectionLowerCase === "paper" &&
      computerSelection === "scissors") ||
    (playerSelectionLowerCase === "rock" && computerSelection === "paper")
  ) {
    compScore++;
    return console.log(
      `You lose! ${playerSelectionLowerCase} loses to ${computerSelection}`
    );
  }
};

const game = function () {
  for (let i = 0; i < 100; i++) {
    playRound(prompt("Rock, paper, scissors?"), getComputerChoice());
    console.log(`Your score ${userScore} : Computer score ${compScore}`);
    if (userScore + compScore === 5) {
      break;
    }
  }
  if (userScore > compScore) {
    alert("You are the champion!");
  }
  if (userScore < compScore) {
    alert("You are a loser!");
  }
};

game();
