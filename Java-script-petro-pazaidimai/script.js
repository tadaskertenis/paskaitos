"use strict";

//2 uzduotis

const gimMetai = 31;
const pcYear = gimMetai + 1;
const currentYear = 2022;
const birthYear = currentYear - pcYear;
console.log(`Tu Gimei, ${birthYear} metais`);

// Kokia šiandien diena?
// Sukurkite variable 'weekDay',
//  kuris būtų lygus skaičiui - savaitės dienai,
//  skaičiuojant nuo 0 (t.y. pirmadienis - 0;
//     antradienis - 1; trečiadienis - 2
//     ir t.t.). Parašykite Switch statement,
//     kuris paimtų skaičių ir jį pakeistų
//     (ne sukurtų naują kintamąjį, o pakeistų
//         'weekDay' reikšmę) į savaitės
//         dieną žodžiu. Vėliau, atspausdink
//          kintamąjį.


const weekDay = 9;
const allDays = [`pirmadienis, antradienis, trečiadienis, ketvirtadienis, penktadienis, šeštadienis, sekmadiensi`];
if (weekDay === 1){
    console.log(`pirmadienis`)
} else if (weekDay === 2) {
    console.log(`Antradienis`)
} else if (weekDay === 3) {
    console.log(`trečiadienis`)
} else if (weekDay === 4) {
    console.log(`Ketvirtadienis`)
} else if (weekDay === 5) {
    console.log(`Penktadienis`)
} else if (weekDay === 6) {
    console.log(`Šeštadienis`)
} else if (weekDay === 7) {
    console.log(`Sekmadienis`);
} else {
    console.log(`tokios savaitės dienos nėra`);
}

const car = "Mini";
const vwGroup = ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"];
if (vwGroup.includes(car)) {
  console.log("priklauso VW grupei");
} else {
  console.log("Priklauso BMW grupei");
}

//kaip suzinoti stringo ilgi
let str = 'Join our community of freelance developers';
console.log(str.length);


// Parašykite variable su jūsų vardu. 
// Pasiklauskite, jei vardo ilgis trumpesnis 
// nei 5 simboliai - tegul išmeta 
// konsolėje "Short Name", kitaip - "Long Name".

const names = `Tadas`;
console.log(names.length)
const nameAnswer = `${names.length}`
console.log(nameAnswer)
if (names.length <= 4) {
    console.log(`Short Name`)
} else {
    console.log (`Long Name`);
}

const name3 = `Tadas`; 
const nameLenght = name3.length <= 4 ? "Short name" : "Long name";
console.log(nameLenght)


//Su while ciklu pasirašykite, kad Jūsų vardą išvestų į console 3 kartus.
let text = "";
let i = 0;
while (i < 10) {
    text += "<br>Tadas" + i; 
    i++;
}

// for ( let i = 0; i < 10; i++){
//     console.log (`${i} Petras`)
// }

for ( let j = 10; j > 0; j--){
    console.log (`${j} Tadas`)
}

// while

let k = 0;

while(k < 3){
 console.log(k + "Asta")
 k++
}

//do while

let p = 0;

do {
    console.log(p);
    p++
} while(i < 5)

// do while pratimas


let combo = '';
const names4 = 'Tadas'; 
let times = 3; 
do {
    combo += names4
    times--;
} while (times < 0);
console.log(combo);

//js math
const min = 5;
const max = 12;
const randomNum = Math.floor(Math.random() * (min - max)) + 1;

console.log(randomNum);
//kodel man minusinis atsakymas


const luckyTicket = Math.floor(Math.random() * 5) + 1;
console.log (`Laimingas bilietas`, luckyTicket);

if (luckyTicket === 4) {
    console.log(`Jūsų bilietas laimėjo`)
} else {
    console.log(`Sekmės kitam kartui`);}


// DOM elementai

document.getElementById('namess').textContent = 'Tadas'


document.getElementsByClassName('listas')[2].textContent = 'Sūris'

document.querySelector('.bluetext > span').textContent = 'blue'


// // document.body.innerHTML = '<h1> Tadas </h1>';
