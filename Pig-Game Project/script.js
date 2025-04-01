'use strict';

// Declearing Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollDiceBtnEl = document.querySelector('.btn--roll');
const newBtnEl = document.querySelector('.btn--new');
const holdBtnEl = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Set Initial Score Value 0
score0El.textContent = 0;
score1El.textContent = 0;

// Declearing Variables
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Hide dice Initially
diceEl.classList.add('hidden');

// Function
const playerSwitching = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Generation Random Number to Pick Dice Img by click rollDice Btn
rollDiceBtnEl.addEventListener('click', () => {
  if (playing) {
    // 1. Generation Random  Number b/w 1 to 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.   Display Dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // 3. Check for rolled 1: if ture, switch to next player
    if (dice != 1) {
      // Add Dice to the Current Score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switching the Player because of one
      playerSwitching();
    }
  }
});

holdBtnEl.addEventListener('click', () => {
  if (playing) {
    // 1. Add Current Score to the Active Player Main ScoreBoard
    score[activePlayer] += currentScore;
    // Dynamically set Main Score Board Points like => score0El,1El.textContent = [activePlayer]
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // 2. Check if player's score is >=100
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switching the Player
      playerSwitching();
    }
  }
});

newBtnEl.addEventListener("click", ()=>{
    window.location.reload();
})
