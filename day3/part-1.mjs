import { open } from 'fs/promises';

const file = await open('sinput.txt');
const contents = await file.readFile({ encoding: "utf-8" });
const lines = contents.split('\r\n');

let finalResult = 0;

console.log(lines);
console.log('Я не ебу как желать эту срань');


