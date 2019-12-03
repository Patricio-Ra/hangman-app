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

// Setting up Http request.
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", e => {
    if (e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
});
xhr.open("GET", "http://puzzle.mead.io/puzzle");
xhr.send();