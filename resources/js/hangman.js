'use strict'

// Class //
class Hangman {
    constructor (word, guessesLeft) {
        this.word = word.toLowerCase().split('');
        this.guessesLeft = guessesLeft;
        this.guessedLetters = [' '];
        this.status = 'playing';
    };

    getPuzzle () {
        let puzzle = '';
        this.word.forEach(letter => {
            this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*';
        });
        return puzzle;
    };

    makeGuess (guess) {
        if (this.status === 'playing') {
            guess = guess.toLowerCase();
            if (!this.guessedLetters.includes(guess)) {
                this.guessedLetters.push(guess.toLowerCase());
                if (!this.word.includes(guess)) {
                    this.guessesLeft--;
                };
            };
            this.getStatus();
        };
    };

    getStatus = function () {
        if (this.guessesLeft === 0) {
            this.status = 'failed';
        } else if (!this.getPuzzle().includes('*')) {
            this.status = 'succeeded';
        };
    };

    renderStatus = function () {
        if (this.status === 'failed') {
            guessesEl.textContent = `Nice try! The word was '${this.word.join('')}'.`
        } else if ((this.status === 'playing')) {
            guessesEl.textContent = `Remaining guesses: ${game1.guessesLeft}`;
        } else {
            guessesEl.textContent = `Congratulations! You guessed the word.`
        };
    };

    renderGame = function () {
        instructEl.textContent = 'Press a letter to make a guess and discover the word!';
        puzzleEl.textContent = this.getPuzzle();
        guessesEl.textContent = this.renderStatus();
    
        containerEl.innerHTML = '';
        containerEl.append(instructEl, puzzleEl, guessesEl);
        this.renderStatus();
    };
};