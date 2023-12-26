import { open } from 'fs/promises';


const file = await open('input.txt');
const contents = await file.readFile({ encoding: "utf-8" });
const lines = contents.split('\r\n');
const regexNum = new RegExp(/\d/g);

const timeLine = lines[0];
const arrTime = timeLine.match(regexNum);
const realTime = arrTime.join('');

const distanceLine = lines[1];
const arrDistance = distanceLine.match(regexNum);
const realDistance = arrDistance.join('');

let finalResult = 0;

for (let x = 1; x <= realTime; x++) {
    if ((x * (realTime - x)) > realDistance) {
        finalResult++
    }
}

console.log(finalResult);

