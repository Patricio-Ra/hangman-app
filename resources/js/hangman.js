'use strict'

// Class //
class Hangman {
    constructor (word, guessesLeft) {
        this.word = word.toLowerCase().split('');
        this.guessesLeft = guessesLeft;
        this.guessedLetters = [];
        this.status = 'playing';
    };

    get puzzle () {
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
            this.statusMessage;
        };
    };

    get statusMessage () {
        if (this.guessesLeft === 0) {
            this.status = 'failed';
        } else if (!this.puzzle.includes('*')) {
            this.status = 'succeeded';
        };
    };

    renderStatus () {
        if (this.status === 'failed') {
            guessesEl.textContent = `Nice try! The word was '${this.word.join('')}'.`
        } else if ((this.status === 'playing')) {
            guessesEl.textContent = `Remaining guesses: ${this.guessesLeft}`;
        } else {
            guessesEl.textContent = `Congratulations! You guessed the word.`
        };
    };

    renderGame () {
        instructEl.textContent = 'Press a letter to make a guess and discover the word!';
        guessesEl.textContent = this.renderStatus();
        puzzleEl.innerHTML = '';
        containerEl.innerHTML = '';
        
        for (const char of this.puzzle.split('')) {
            const spanEl = document.createElement('span');
            spanEl.innerText = char;
            puzzleEl.append(spanEl);
        }

        containerEl.append(instructEl, puzzleEl, guessesEl);
        this.renderStatus();
    };
};