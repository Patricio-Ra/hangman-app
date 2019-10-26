'use strict'


// Constructor
const Hangman = function (word, guessesLeft) {
    this.word = word.toLowerCase().split('');
    this.guessesLeft = guessesLeft;
    this.guessedLetters = ['h', 'e', 'g'];
};

// Render word
Hangman.prototype.getPuzzle = function () {
    let wordEl = '';
    this.word.forEach(letter => {
        this.guessedLetters.includes(letter) || letter === ' ' ? wordEl += letter : wordEl += '*';
    });
    return wordEl;
};

// Instances
const game1 = new Hangman('house', 3);
const game2 = new Hangman('buenos aires', 6);

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());
