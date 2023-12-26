import { open } from 'fs/promises';

const file = await open('input.txt');
const contents = await file.readFile({ encoding: "utf-8" });
const lines = contents.split('\r\n');
const regexNum = new RegExp(/\d+/g);

const timeLine = lines[0];
const distanceLine = lines[1];
const arrTime = timeLine.match(regexNum);
const arrDistance = distanceLine.match(regexNum);

let winCountOptions = [0, 0, 0, 0];
let finalResult = 1;


for (let i = 0; i < 4; i++) {
    for (let x = 0; x <= arrTime[i]; x++) {
        if ((x * (arrTime[i] - x)) > arrDistance[i]) {
            winCountOptions[i] = winCountOptions[i] + 1
        }
    }
}

winCountOptions.forEach(function (item, index, arr) {
    finalResult = finalResult * item;
})

console.log(finalResult);

