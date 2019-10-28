'use strict'

// Constructor //
const Hangman = function (word, guessesLeft) {
    this.word = word.toLowerCase().split('');
    this.guessesLeft = guessesLeft;
    this.guessedLetters = [' '];
    this.status = 'playing';
};


// Get puzzle //
Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    this.word.forEach(letter => {
        this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*';
    });
    return puzzle;
};

// Make a guess //
Hangman.prototype.makeGuess = function (guess) {
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

// Get status //
Hangman.prototype.getStatus = function () {
    if (this.guessesLeft === 0) {
        this.status = 'failed';
    } else if (!this.getPuzzle().includes('*')) {
        this.status = 'succeeded';
    };
};

// Render status msg //
Hangman.prototype.renderStatus = function () {
    if (this.status === 'failed') {
        guessesEl.textContent = `Nice try! The word was '${this.word.join('')}'.`
    } else if ((this.status === 'playing')) {
        guessesEl.textContent = `Remaining guesses: ${game1.guessesLeft}`;
    } else {
        guessesEl.textContent = `Congratulations! You guessed the word.`
    };
};

// Render Game //
Hangman.prototype.renderGame = function () {
    instructEl.textContent = 'Press a letter to make a guess and discover the word!';
    puzzleEl.textContent = this.getPuzzle();
    guessesEl.textContent = this.renderStatus();

    containerEl.innerHTML = '';
    containerEl.append(instructEl, puzzleEl, guessesEl);
    this.renderStatus();
};