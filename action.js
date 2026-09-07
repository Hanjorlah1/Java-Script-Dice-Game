let randomNumberForPlayer1 = Math.floor(Math.random() * 6 + 1);
let randomNumberForPlayer2 = Math.floor(Math.random() * 6 + 1);
const player1DiceImage = document.querySelector(".player1");
const player2DiceImage = document.querySelector(".player2");
const winMessage = document.querySelector(".player-1-win");

function playerWin(player) {
  return (winMessage.innerHTML = player);
}

if (randomNumberForPlayer1 === 1) {
  player1DiceImage.src = "./images/dice1.png";
} else if (randomNumberForPlayer1 === 2) {
  player1DiceImage.src = "./images/dice2.png";
} else if (randomNumberForPlayer1 === 3) {
  player1DiceImage.src = "./images/dice3.png";
} else if (randomNumberForPlayer1 === 4) {
  player1DiceImage.src = "./images/dice4.png";
} else if (randomNumberForPlayer1 === 5) {
  player1DiceImage.src = "./images/dice5.png";
} else {
  player1DiceImage.src = "./images/dice6.png";
}
if (randomNumberForPlayer2 === 1) {
  player2DiceImage.src = "./images/dice1.png";
} else if (randomNumberForPlayer2 === 2) {
  player2DiceImage.src = "./images/dice2.png";
} else if (randomNumberForPlayer2 === 3) {
  player2DiceImage.src = "./images/dice3.png";
} else if (randomNumberForPlayer2 === 4) {
  player2DiceImage.src = "./images/dice4.png";
} else if (randomNumberForPlayer2 === 5) {
  player2DiceImage.src = "./images/dice5.png";
} else {
  player2DiceImage.src = "./images/dice6.png";
}

if (randomNumberForPlayer2 > randomNumberForPlayer1) {
  playerWin("Player 2 <span class='red'>WINS</span>");
} else if (randomNumberForPlayer2 === randomNumberForPlayer1) {
  playerWin("It is a <span class='red'>TIE</span>");
} else {
  playerWin("Player 1 <span class='red'>WINS</span>");
}
