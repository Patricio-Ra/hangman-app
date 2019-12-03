'use strict'

// Setting up Http request.
const getPuzzle = (callback) => {
    const xhrWords = new XMLHttpRequest();
    xhrWords.addEventListener("readystatechange", e => {
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.response);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback("An error has taken place", undefined);
        }
    });
    xhrWords.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
    xhrWords.send();
}
