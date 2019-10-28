'use strict'

// Instances //
const game1 = new Hangman('helicopter', 4);

// Elements //
const containerEl = document.getElementById('game');
const puzzleEl = document.createElement('h1');
const guessesEl = document.createElement('h4');
const instructEl = document.createElement('p');

// Events //
window.addEventListener('keydown', e => {
    const guess = e.key;
    if (guess.match(/^[a-zA-Z]$/i) && game1.status === 'playing') {
        game1.makeGuess(guess);
        game1.renderGame();
    }; 
});

game1.renderGame();