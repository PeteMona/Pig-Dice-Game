'use strict';

//selecting the score element
const score0El = document.querySelector('#score--1');
const score1El = document.getElementById('score--0');

const diceEl = document.querySelector('.dice');
//selecting the dice element
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
