'use strict'

// Puzzle word Http request.
const getPuzzle = async wCount => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wCount}`, {})
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch the puzzle.');
    };
};

// Country name Http request
const getCountry = async countryCode => {
    const response = await fetch('http://restcountries.eu/rest/v2/all', {});
    if (response.status === 200) {
        const data = await response.json();
        return data.find(country => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch country.');
    };
};

// Current Country
const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);
}

// Location Http request
const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=da5cbab48f8fa0', {});
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch the location.');
    };
};