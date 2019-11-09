const randomWords = require('random-words');

function getRandomWordSync({ withErrors = false } = {}) {
    if (withErrors && randomInRange(0, 5) === 5) {
        throw new Error('It failed :(');
    }
    return randomWords();
}

//* print "It shouldn't break anything!" instead of the random word //*
function getRandomWord(value, { withErrors = true, slow = false } = {}) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => withErrors && numberValidation(value) === 0 ? reject(new Error("It shouldn't break anything!")) : resolve(randomWords()),
            // add some variance so order isn't totally predicatable in async version
            slow ? randomInRange(500 - 20, 500 + 20) : randomInRange(0, 20),
        );
    });
}

//* `slow` option turned on //*
function getRandomWords({ withErrors = false, slow = true } = {}) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => withErrors && randomInRange(0, 5) === 5 ? reject(new Error('It failed :(')) : resolve(randomWords()),
            // add some variance so order isn't totally predicatable in async version
            slow ? randomInRange(0, 5) : randomInRange(0, 20),
        );
    });
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberValidation(value) {
    if (value % 3 == 0 || value % 5 == 0) {
        return 0;
    } else {
        return 1;
    }
}

module.exports = { getRandomWord, getRandomWordSync, getRandomWords };