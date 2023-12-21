import { open } from 'fs/promises';

const file = await open('index.txt');
const lines = file.readLines();

let finalResult = 0;
for await (const line of lines) {
    const regexFirst = /\d|one|two|three|four|five|six|seven|eight|nine/;
    const regexLast = /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/;

    let firstNumber = 0;
    let arrNumberOne = line.match(regexFirst);

    switch (arrNumberOne[0]) {
        case "one": firstNumber = 1;
            break;
        case "two": firstNumber = 2;
            break;
        case "three": firstNumber = 3;
            break;
        case "four": firstNumber = 4;
            break;
        case "five": firstNumber = 5;
            break;
        case "six": firstNumber = 6;
            break;
        case "seven": firstNumber = 7;
            break;
        case "eight": firstNumber = 8;
            break;
        case "nine": firstNumber = 9;
            break;
        default: firstNumber = arrNumberOne[0];
            break;
    }

    let lastNumber = 0;
    let splitWord = line.split('').reverse();
    let lineReverse = splitWord.join('')
    let arrNumberTwo = lineReverse.match(regexLast);
    switch (arrNumberTwo[0]) {
        case "eno": lastNumber = 1;
            break;
        case "owt": lastNumber = 2;
            break;
        case "eerht": lastNumber = 3;
            break;
        case "ruof": lastNumber = 4;
            break;
        case "evif": lastNumber = 5;
            break;
        case "xis": lastNumber = 6;
            break;
        case "neves": lastNumber = 7;
            break;
        case "thgie": lastNumber = 8;
            break;
        case "enin": lastNumber = 9;
            break;
        default: lastNumber = arrNumberTwo[0];
            break;
    }

    let unionNumberStr = String(firstNumber) + lastNumber;
    finalResult = finalResult + +unionNumberStr;

    console.log('finalResult = ' + finalResult);
}
