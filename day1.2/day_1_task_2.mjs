import { open } from 'fs/promises';

const file = await open('input.txt');
const lines = file.readLines();

let finalResult = 0;
let characterPositions = 0;
let arrOfPositions = [];
for await (const line of lines) {
    let splitBrackets = line.split('');
    for (let count of splitBrackets) {
        if (count === "(") {
            finalResult++;
        }
        else {
            finalResult--;
        }
        characterPositions++;

        if (finalResult === -1) {
            arrOfPositions.push(characterPositions);
        }
    }
    console.log(arrOfPositions)
    console.log(finalResult);
}