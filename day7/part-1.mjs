import { open } from 'fs/promises';

const file = await open('sinput.txt');
const contents = await file.readFile({ encoding: "utf-8" });
const lines = contents.split('\r\n');
const matrixAllLine = [];

let finalResult = 0;

lines.forEach(function (item, index, arr) {
    let eachIndex = item.split(' ');
    let splitItem = eachIndex[0].split('');
    eachIndex.push(splitItem)
    console.log(splitItem);
    matrixAllLine.push(eachIndex);
})




// console.log(lines);
console.log(matrixAllLine);
