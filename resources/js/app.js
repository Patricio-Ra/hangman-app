'use strict'

// Instances //
let game;

// Elements //
const containerEl = document.getElementById('game');
const puzzleEl = document.createElement('h1');
const guessesEl = document.createElement('h4');
const instructEl = document.createElement('p');

// Start Game //
const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5);
    game.renderGame()
}
startGame();

// Events //
window.addEventListener('keydown', e => {
    const guess = e.key;
    if (guess.match(/^[a-zA-Z]$/i)) {
        game.makeGuess(guess);
        game.renderGame();
    }; 
});
document.getElementById('reset').addEventListener('click', startGame);


// getPuzzle('2').then(puzzle => {
//     console.log(puzzle);
// }).catch(error => {
//     console.log(`${error}`);
// });

// getCurrentCountry().then(country => {
//     console.log(country.name);
// }).catch(error => {
//     console.log(error);
// });