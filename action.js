let randomNumberForPlayer1 = Math.floor(Math.random() * 6 + 1);
let randomNumberForPlayer2 = Math.floor(Math.random() * 6 + 1);
const player1DiceImage = document.querySelector(".player1");
const player2DiceImage = document.querySelector(".player2");
const winMessage = document.querySelector(".player-1-win");

function playerWin(player) {
  return (winMessage.innerHTML = player);
}

player1DiceImage.src = `./images/dice${randomNumberForPlayer1}.png`;
player2DiceImage.src = `./images/dice${randomNumberForPlayer2}.png`;

if (randomNumberForPlayer2 > randomNumberForPlayer1) {
  playerWin("Player 2 <span class='red'>WINS</span>");
} else if (randomNumberForPlayer2 === randomNumberForPlayer1) {
  playerWin("It is a <span class='red'>TIE</span>");
} else {
  playerWin("Player 1 <span class='red'>WINS</span>");
}
