'use strict'

// Puzzle word Http request.
const getPuzzle = wCount => new Promise((resolve, reject) => {
    const xhrWords = new XMLHttpRequest();
    xhrWords.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.response);
            data ? resolve(data.puzzle) : reject('An error has taken place');
        } else if (e.target.readyState === 4) {
            reject('An error has taken place');
        }
    });
    xhrWords.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wCount}`);
    xhrWords.send();
})

// Country name Http request
const getCountry = countryCode => new Promise((resolve, reject) => {
    const xhrCountry = new XMLHttpRequest();
    xhrCountry.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.response);
            const country = data.find(country => country.alpha2Code === countryCode);
            country ? resolve(country.name) : reject('Could not fetch the data.'); 
        } else if (e.target.readyState === 4){
            reject('Could not fetch the data.');      
        }
    });
    xhrCountry.open('GET', 'http://restcountries.eu/rest/v2/all');
    xhrCountry.send();
})
