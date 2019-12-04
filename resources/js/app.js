'use strict'

// Instances //
const game1 = new Hangman('papa rico', 4);

// Elements //
const containerEl = document.getElementById('game');
const puzzleEl = document.createElement('h1');
const guessesEl = document.createElement('h4');
const instructEl = document.createElement('p');

game1.renderGame();

// Events //
window.addEventListener('keydown', e => {
    const guess = e.key;
    if (guess.match(/^[a-zA-Z]$/i)) {
        game1.makeGuess(guess);
        game1.renderGame();
    }; 
});

getPuzzle('2').then(puzzle => {
    console.log(puzzle);
}, error => {
    console.log(`Error: ${error}`);
});

getCountry('AR').then(countryName => {
    console.log(`Country name: ${countryName}`);
}, error => {
    console.log(`Error: ${error}`);
});

