'use strict'

// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back

// No guesses: *****
// Guessed 'h', 'e', 'a': h***e


// Constructor
const Hangman = function (word, guessesLeft, guessedLetters = []) {
    this.word = word.toLowerCase().split('');
    this.guessesLeft = guessesLeft;
    this.guessedLetters = guessedLetters;
};

Hangman.prototype.getPuzzle = function () {
    this.word.forEach(char => {

    });
    const wordEl = this.word.join('');
    return wordEl;
};

const game1 = new Hangman('house', 3, ['h']);
const game2 = new Hangman('buenos aires', 6);

console.log(game1.getPuzzle());
console.log(game2);
