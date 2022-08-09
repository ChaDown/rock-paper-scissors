"use strict";

const getComputerChoice = function () {
  const num = Math.trunc(Math.random() * 3) + 1;
  console.log(num);
  let choice;
  if (num === 1) {
    choice = "rock";
  } else if (num === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  console.log(choice);
  return choice;
};

const computerSelection = getComputerChoice();

const game = function (playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();

  if (playerSelectionLowerCase === computerSelection) {
    return `It's a draw, you both chose ${playerSelectionLowerCase}. Go again!`;
  } else if (
    (playerSelectionLowerCase === "paper" && computerSelection === "rock") ||
    (playerSelectionLowerCase === "scissors" &&
      computerSelection === "paper") ||
    (playerSelectionLowerCase === "rock" && computerSelection === "scissors")
  ) {
    return `You win. ${playerSelectionLowerCase} beats ${computerSelection}`;
  } else if (
    (playerSelectionLowerCase === "scissors" && computerSelection === "rock") ||
    (playerSelectionLowerCase === "paper" &&
      computerSelection === "scissors") ||
    (playerSelectionLowerCase === "rock" && computerSelection === "paper")
  ) {
    return `You lose! ${playerSelectionLowerCase} loses to ${computerSelection}`;
  }
};

console.log(game("Rock", computerSelection));
