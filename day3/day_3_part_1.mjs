import { open } from 'fs/promises';

const file = await open('sinput.txt');
const lines = file.readLines();

let finalResult = 0;
for await (const line of lines) {

    console.log(line);
}
