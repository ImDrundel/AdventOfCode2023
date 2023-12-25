import { open } from 'fs/promises';

const file = await open('sinput.txt');
const contents = await file.readFile({ encoding: "utf-8" });
const paragraph = contents.split('\r\n\r\n');
// const lines = contents.split('\r\n');
let finalResult = 0;

const lineSeeds = paragraph[0];
const lineSeedToSoil = paragraph[1];
const lineSoilToFertilizer = paragraph[2];
const lineFertilizerToWater = paragraph[3];
const lineWaterToLight = paragraph[4];
const lineLightToTemperature = paragraph[5];
const lineTemperatureToHumidity = paragraph[6];
const lineHumidityToLocation = paragraph[7];

let arrFinalSeeds = [];
let arrFinalSoil = [];
let arrFinalFertilizer = [];
let arrFinalWater = [];
let arrFinalLight = [];
let arrFinalTemperature = [];
let arrFinalLocation = [];


const arrSeeds = lineSeeds.split('\r\n');

// Seed to soil
let arrSeedToSoil = lineSeedToSoil.split('\r\n');
arrSeedToSoil.shift();
arrSeedToSoil.forEach(function (item, index, array) {

})



console.log(arrSeedToSoil);
// console.log(lines);
// console.log(lineSeeds);
// console.log(lineSeedToSoil);
// console.log(lineSoilToFertilizer);
// console.log(lineFertilizerToWater);
// console.log(lineWaterToLight);
// console.log(lineLightToTemperature);
// console.log(lineTemperatureToHumidity);
// console.log(lineHumidityToLocation);