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
const getCountry = countryCode => {
    return fetch('http://restcountries.eu/rest/v2/all', {}).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the countries.');
        }
    }).then(data => data.find(country => country.alpha2Code === countryCode));
};

// Location Http request
const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=da5cbab48f8fa0', {}).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the location.');
        }
    })
}