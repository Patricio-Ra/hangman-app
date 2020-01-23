'use strict'

import "core-js/stable";
import "regenerator-runtime/runtime";
import Hangman from './hangman';
import getPuzzle from './requests';

// Instances //
let game;

// Elements //
const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');

// Functions //
const renderGame = () => {
    guessesEl.textContent = game.renderStatus();
    puzzleEl.innerHTML = '';
    
    for (const char of game.puzzle.split('')) {
        const spanEl = document.createElement('span');
        spanEl.innerText = char;
        puzzleEl.append(spanEl);
    }
};

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5);
    renderGame()
}

// Events //
window.addEventListener('keydown', e => {
    const guess = e.key;
    if (guess.match(/^[a-zA-Z]$/i)) {
        game.makeGuess(guess);
        renderGame();
    }; 
});
document.getElementById('reset').addEventListener('click', startGame);

startGame();