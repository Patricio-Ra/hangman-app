'use strict'

// Puzzle word Http request.
const getPuzzle = wCount => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wCount}`, {}).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the puzzle.');
        };
    }).then(data => {
        return data.puzzle;
    });
};

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
