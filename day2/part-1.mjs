import { open } from 'fs/promises';

const file = await open('input.txt');
const lines = file.readLines();

let possibleGamesCount = 0;
for await (const line of lines) {
    const regexNumberGame = /(\w+)\s(\d+)/
    const regexNumberCubes = /(\d+)\s(\w+)/g

    let numberGame = [] = line.match(regexNumberGame);
    let gameIndex = numberGame[2];

    let arrNumberCubes = [] = line.match(regexNumberCubes);
    let breakCount = 0;

    for (let numberCubes of arrNumberCubes) {
        let arrPair = numberCubes.split(' ');
        switch (arrPair[1]) {
            case "red":
                if (arrPair[0] > 12) {
                    breakCount++;
                };
            case "green":
                if (arrPair[0] > 13) {
                    breakCount++;
                };
            case "blue":
                if (arrPair[0] > 14) {
                    breakCount++;
                };
        }
    }
    if (breakCount === 0) {
        possibleGamesCount = possibleGamesCount + +gameIndex;
    };

    console.log('possibleGamesCount = ' + possibleGamesCount);
}
