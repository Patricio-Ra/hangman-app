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

getPuzzle((error, puzzle) => {
    error ? console.log(`Error: ${error}`) : console.log(puzzle);
});

/*
// Practicing with another API.
const xhrCountry = new XMLHttpRequest();
xhrCountry.addEventListener("readystatechange", e => {
    if (e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.response);
        const countryCode = "AR";
        const country = data.find(country => country.alpha2Code === countryCode);
        console.log(country.name);
    } else if (e.target.readyState === 4){
        console.log("An error has taken place.");
    }
});
xhrCountry.open("GET", "http://restcountries.eu/rest/v2/all");
xhrCountry.send();
*/