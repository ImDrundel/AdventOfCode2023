import { open } from 'fs/promises';

const file = await open('input_day4.txt');
const lines = file.readLines();

let finalResult = 0;
let gameNumber = 1;
let finalGameCopy = 1;
let arrGameCopy = [0]
for (let c = 1; c < 500; c++) {
    arrGameCopy.push(0)
}
for await (const line of lines) {

    let winCopy = 0;
    //console.log('_____________')
    //console.log('GAME NUMBER - ' + gameNumber + '  ' + typeof (gameNumber));

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
    let numberMatches = 0;

    for (let winNumberSolo of arrWinNumbers) {
        for (let haveNumberSolo of arrHaveNumbers) {
            if ((+winNumberSolo === +haveNumberSolo) & (winNumberSolo !== ("") | (' ')))
                numberMatches = numberMatches + 1;
        }
    }


    if (numberMatches === 0) {
        winCopy = 0;
    } else {
        winCopy = numberMatches;
    }



    for (let x = 0; x < finalGameCopy; x++) {
        for (let i = gameNumber; i < (gameNumber + winCopy); i++) {
            let bonusArr = arrGameCopy[i]
            //console.log(bonusArr)
            arrGameCopy[i] = arrGameCopy[i] + 1;
        }
    }


    finalGameCopy = 1 + arrGameCopy[gameNumber];
    gameNumber = gameNumber + 1;
    // Card counnt


    finalResult = finalResult + finalGameCopy;

    // Console output


    //console.log('winCopy= ' + winCopy + '  ' + typeof (winCopy));
    //console.log(arrGameCopy);
    // console.log('finalGameCopy - ' + finalGameCopy);
    //console.log(2 ** 1);
    console.log(finalResult);
    //console.log(' = ' + );

}
