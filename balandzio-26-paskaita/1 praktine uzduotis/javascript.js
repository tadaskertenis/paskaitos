'use strict'




_____________

// Sukurkite naują array su žemiau pateiktais personažų pavadinimais.
//   Naudodami 'console.log()' atspausdinkite pirmą ir paskutinį elementą.
// Naudodami prompt("Įveskite skaičių nuo 1 iki 6"), atspausdinkite personažą, kurio eilės numeris buvo įvestas

// Jon Snow
// Cersei Lannister
// Daenerys Targaryen
// Theon Greyjoy
// Tyrion Lannister
// Arya Stark
// Ketvirta užduotis

let fullNames = ['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen', 'Theon Greyjoy', 'Theon Greyjoy', 'Tyrion Lannister', 'Arya Stark']; 
//Kad rodyti pirmą
console.log(fullNames[0]);
//kad rodytu paskutini
const lastItemIndex = fullNames.length - 1;
console.log('elementu kiekis',fullNames.length);
console.log(fullNames[lastItemIndex]);

//kad nuskaitytu skaiciu
let inputNumber = prompt('Iveskite skaiciu nuo 1 iki 6');
console.log(fullNames[inputNumber]);

