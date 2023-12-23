import { open } from 'fs/promises';

const file = await open('input_day4.txt');
const lines = file.readLines();

let finalResult = 0;
for await (const line of lines) {

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
        //console.log(" - WIN = " + '-' + winNumberSolo + '-')
        //console.log(typeof (+winNumberSolo))
        for (let haveNumberSolo of arrHaveNumbers) {
            // console.log('have = ' + haveNumberSolo)
            if ((+winNumberSolo === +haveNumberSolo) & (winNumberSolo !== ("") | (' ')))
                numberMatches = numberMatches + 1;
        }

    }
    let lineResult = 0;
    if (numberMatches === 0) {
        lineResult = 0;
    } else {
        lineResult = 2 ** (numberMatches - 1);
    }
    finalResult = finalResult + lineResult;
    // Console output


    //console.log(numberMatches);
    //console.log(arrWinNumbers);
    //console.log(arrHaveNumbers);
    //console.log(lineResult);
    //console.log(2 ** 1);
    console.log(finalResult);
    //console.log(' = ' + );

}
