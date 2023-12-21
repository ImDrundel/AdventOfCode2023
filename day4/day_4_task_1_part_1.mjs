import { open } from 'fs/promises';

const file = await open('sinput_day4.txt');
const lines = file.readLines();

let result1 = 0;
for await (const line of lines) {
    console.log("________________________");
    // Full line
    let arrFullLine = line.split(" ");
    let arrLineAllNumber = arrFullLine.slice(2, 100);
    let lineAllNumber = arrLineAllNumber.join(' ');
    let arrSplitNumber = lineAllNumber.split(' | ');

    // Win part
    let winNumbers = arrSplitNumber[0];
    let arrWinNumbers = winNumbers.split(' ');

    // Have part
    let haveNumbers = arrSplitNumber[1];
    let arrHaveNumbers = haveNumbers.split(' ');

    // Check for victory
    let numberMatches = 0
    for (let winNumberSolo of arrWinNumbers) {
        console.log(" - WIN = " + winNumberSolo)
        console.log(typeof (+winNumberSolo))
        if (winNumberSolo !== " ") {

            for (let haveNumberSolo of arrHaveNumbers) {
                console.log('have = ' + haveNumberSolo)
                if (+winNumberSolo === +haveNumberSolo)
                    numberMatches = numberMatches + 1;
            }
        }
        else break;
    }

    // Console output


    console.log(numberMatches);
    // console.log(arrWinNumbers);
    // console.log(arrHaveNumbers);
    //console.log();
    //console.log();
    //console.log();
    //console.log(' = ' + );

}
