function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  return parseInt(prompt("Enter 1:rock 2:paper 3:scissors"));
}

function playRound(humanchoice, compchoice, x) {
  if (
    (humanchoice == 1 && compchoice == 3) ||
    (humanchoice == 2 && compchoice == 1) ||
    (humanchoice == 3 && compchoice == 2)
  ) {
    console.log("Human wins round:" + x);
    return 1;
  } else if (humanchoice == compchoice) {
    console.log("Draw!! round:" + x);
    return 0;
  } else {
    console.log("Computer wins round:" + x);
    return -1;
  }
}
function playGame() {
  let human = (comp = 0);
  for (let i = 1; i <= 5; i++) {
    const humanselection = getHumanChoice();
    const compselection = getComputerChoice();

    const round = playRound(humanselection, compselection, i);
    if (round == 1) {
      human++;
    } else if (round == -1) {
      comp++;
    }
  }
  console.log(`Final Scores - Human: ${human}, Computer: ${comp}`);

  if (human > comp) {
    console.log("Human wins the game");
  } else if (human < comp) {
    console.log("Computer wins the game");
  } else {
    console.log("DRAW!!!");
  }
}

playGame();
