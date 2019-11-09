const { getRandomWordSync, getRandomWord, getRandomWords } = require('word-maker');
const fs = require('fs');
console.log('It works!');

// YOUR CODE HERE
var max_length = 100;
var fizz_buzz = 'FizzBuzz';
var fizz = 'Fizz';
var buzz = 'Buzz';

//1
function taskOne() {
    var word = '';
    for (let i = 1; i <= parseInt(max_length); i++) {
        // console.log(i + ". " + getRandomWordSync());
        word = word + i + ". " + getRandomWordSync() + '\n';
    }
    writeOnFile(word)
}


//2
function taskTwo() {
    var word = '';
    for (let i = 1; i <= parseInt(max_length); i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            // console.log(i + ". " + fizz_buzz);
            word = word + i + ". " + fizz_buzz + '\n';
        } else {
            if (i % 3 == 0) {
                // console.log(i + ". " + fizz);
                word = word + i + ". " + fizz + '\n';
            } else if (i % 5 == 0) {
                // console.log(i + ". " + buzz);
                word = word + i + ". " + buzz + '\n';
            } else {
                // console.log(i + ". " + getRandomWordSync());
                word = word + i + ". " + getRandomWordSync() + '\n';
            }
        }
    }
    writeOnFile(word);
}

//3 version one
async function taskThreeVersionOne() {
    var word = '';
    for (let i = 1; i <= parseInt(max_length); i++) {
        // console.log(i + ". " + await getRandomWords());
        word = word + i + ". " + await getRandomWords() + '\n';
    }
    writeOnFile(word);
}

//3 version two
async function taskThreeVersionTwo() {
    var word = '';
    for (let i = 1; i <= parseInt(max_length); i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            // console.log(i + ". " + fizz_buzz);
            word = word + i + ". " + fizz_buzz + '\n';
        } else {
            if (i % 3 == 0) {
                // console.log(i + ". " + fizz);
                word = word + i + ". " + fizz + '\n';
            } else if (i % 5 == 0) {
                // console.log(i + ". " + buzz);
                word = word + i + ". " + buzz + '\n';
            } else {
                // console.log(i + ". " + await getRandomWords());
                word = word + i + ". " + await getRandomWords() + '\n';
            }
        }
    }
    writeOnFile(word);
}

//4
async function taskFour() {
    var word = '';
    for (let i = 1; i <= parseInt(max_length); i++) {
        try {
            // console.log(i + ". " + await getRandomWord(i));
            word = word + i + ". " + await getRandomWord(i) + '\n';

        } catch (err) {
            // console.log(i + ". " + err.message);
            word = word + i + ". " + err.message + '\n';

        }
    }
    writeOnFile(word);

}

//5
function writeOnFile(text) {

    // write to a new file named exercise.txt
    fs.writeFile('exercise.txt', text, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('data saved!');
    });
}


function main() {
    //*task one//*
     taskOne();

     //*task two//*
    // taskTwo();

    //*task three version 1//*
    // taskThreeVersionOne();

    //*task three version 2//*
    // taskThreeVersionTwo();

    //*task four //*
    // taskFour();
}

main();

