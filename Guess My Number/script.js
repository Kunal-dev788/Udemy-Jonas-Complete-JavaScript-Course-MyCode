'use strict';

// Decleration Of All Query Selector Elements
const checkBtn = document.querySelector('.check');
const guessNum = document.querySelector('.guess');
const messageText = document.querySelector('.message');
const scoreBoard = document.querySelector('.label-score');
const highScoreBoard = document.querySelector('.label-highscore');
const playAgainBtn = document.querySelector('.again');

// Generating Random Numbers b/w 1 to 20
const randomNumber = Math.trunc(Math.random() * 20) + 1;

// Delcleared the Variables
let playerNumber;
let playerScore = 20;

// Storing High Score in Local Storage and Visible it to Screen
let highScore = localStorage.getItem('highScore')
  ? Number(localStorage.getItem('highScore'))
  : 0;
highScoreBoard.textContent = `🥇 Highscore: ${highScore}`;

// Score Calc Function
const scoreMaintained = () => {
  playerScore -= 1;
  scoreBoard.textContent = `💯 Score: ${playerScore}`;
};

// Checking Logic b/w PlayerNumber and RandomNumber
checkBtn.addEventListener('click', () => {
  playerNumber = Number(guessNum.value);
  if (playerScore > 1) {
    if (!playerNumber) {
      messageText.textContent = 'No number!';
    } else if (playerNumber !== randomNumber) {
      messageText.textContent =
        playerNumber > randomNumber ? '📈 Too High !' : '📉 Too Low !';
      scoreMaintained();
    } else {
      messageText.textContent = '🎉 Correct Number !';
      if (highScore < playerScore) {
        highScore = playerScore;
        localStorage.setItem('highScore', highScore); // Update local storage
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  } else {
    messageText.textContent = '⛔ You Lost !';
  }
});

// Reloading the site for refresh the content
playAgainBtn.addEventListener('click', () => {
  window.location.reload();
});
