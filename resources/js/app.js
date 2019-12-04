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

getPuzzle("2", (error, puzzle) => error ? console.log(`Error: ${error}`) : console.log(puzzle));
getCountry("AR", (error, countryName) => error ? console.log(`${error}`) : console.log(`Country name: ${countryName}`));

