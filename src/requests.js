'use strict'

// Puzzle word Http request.
const getPuzzle = async wCount => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wCount}`, {});
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch the puzzle.');
    };
};

export { getPuzzle as default };