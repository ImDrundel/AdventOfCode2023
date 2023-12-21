import { open } from 'fs/promises';

const file = await open('input.txt');
const lines = file.readLines();

function compareNumeric(a, b) {
    return a - b;
}

let allGameResult = 0;

for await (const line of lines) {
    const regexNumberCubes = /(\d+)\s(\w+)/g

    let arrNumberCubes = [] = line.match(regexNumberCubes);
    let arrCountRedCubes = [];
    let arrCountGreenCubes = [];
    let arrCountBlueCubes = [];

    for (let numberCubes of arrNumberCubes) {
        let arrPair = numberCubes.split(' ');
        switch (arrPair[1]) {
            case "red":
                arrCountRedCubes.push(arrPair[0]);
                arrCountRedCubes.sort(compareNumeric);
                break;
            case "green":
                arrCountGreenCubes.push(arrPair[0])
                arrCountGreenCubes.sort(compareNumeric);
                break;
            case "blue":
                arrCountBlueCubes.push(arrPair[0])
                arrCountBlueCubes.sort(compareNumeric);
                break;
        }
    }
    let minRed = arrCountRedCubes.at(-1);
    let minGreen = arrCountGreenCubes.at(-1);
    let minBlue = arrCountBlueCubes.at(-1);

    let thisGameResult = +minRed * +minGreen * +minBlue;
    allGameResult = allGameResult + thisGameResult;
    console.log(allGameResult);
}
