import { open } from 'fs/promises';

const file = await open('sinput.txt');
const contents = await file.readFile({ encoding: "utf-8" });
const arrLines = contents.split('\r\n');

let finalResult = 0;
let currentNumber = 0;
const arrOfSymbol = [];
const arrOfNumber = [];
// console.log(arrLines);

arrLines.forEach(function (item, index, array) {
    arrLines[index] = item.split('');
    arrLines[index].forEach(function (itemItem, itemIndex, itemArray) {
        if ((itemItem !== "1") & (itemItem !== "2") & (itemItem !== "3") &
            (itemItem !== "4") & (itemItem !== "5") & (itemItem !== "6") &
            (itemItem !== "7") & (itemItem !== "8") & (itemItem !== "9") &
            (itemItem !== "0") & (itemItem !== '.')) {
            arrOfSymbol.push([index, itemIndex]);
        }
    })
})

arrLines.forEach(function (item, index, array) {
    arrLines[index].forEach(function (itemItem, itemIndex, itemArray) {
        if ((itemItem === "1") | (itemItem === "2") | (itemItem === "3") |
            (itemItem === "4") | (itemItem === "5") | (itemItem === "6") |
            (itemItem === "7") | (itemItem === "8") | (itemItem === "9") |
            (itemItem === "0")) {
            arrOfNumber.push([index, itemIndex]);
        }
    })
})

// for (let i = 0; i < 20000; i++) {
//     for (let x = 0; x < 20000; x++) {

//         if (arrOfNumber[i][x] === arrOfNumber) {
//             currentNumber = arrOfNumber
//         }



//     }
// }





// console.log(arrLines);
console.log(arrOfSymbol);
console.log(arrOfNumber);
// let lineOne = lines[0];
// let lineOneSplit = lineOne.split('');
// console.log(lineOneSplit);
// console.log('Я не ебу как делать эту срань');

