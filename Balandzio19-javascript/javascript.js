'use strict'

// uzduotis

const skaicius = 1;
if (skaicius % 2 === 0) {
  console.log(`${skaicius} lyginis`);
} else if (skaicius % 2 === 1) {
  console.log(`${skaicius} trukmes reiksme nelygi`);
} else {
  console.log(`${skaicius} odd`);
}

// uzduotis

const grupesNariai = 3;
if (grupesNariai <= 0) {
  console.log(`${grupesNariai} Nėra grupė`);
} else if (grupesNariai === 1) {
  console.log(`${grupesNariai} tai Solistas`);
} else if (grupesNariai === 2) {
  console.log(`${grupesNariai} tai jau Duetas`);
} else if (grupesNariai === 3) {
  console.log(`Grupės narių ${grupesNariai}, visas Trio`);
} else if (grupesNariai === 4) {
  console.log(`${grupesNariai} Kvartetas`);
} else {
  console.log(`${grupesNariai} Didelė grupė`);
}

// petro užduotis

// Sukurk variable 'legalAge', kuris būtų lygus 20.
//  Antra variable 'clientAge' su bet kokiu skaičiumi.
//  Pasirašyk if-else, kuris alert išmestų ar
//  klientas jau pasiekęs šį legalAge, ar dar ne.

const legalAge = 20;
const clientAge = 25;
if (clientAge < legalAge) {
  console.log(`${clientAge} Nepasiekes`);
} else {
  console.log(`${clientAge} Pilnametis`);
}

//Pasirašyk kintamą su savo vardu.
//  Sukurk if-else, kuris pasakys "Ilgas vardas",
//  jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju,
//  nieko neišmes. String ilgį gali susižinoti
//  prirašant 'length' property
//  (pvz.: "Petras".length arba su kintamu: name.length).

const vardas = "Tadas";
if (vardas.length < 6) {
  console.log(`${vardas} Trumpasm`);
} else {
  console.log(`${vardas} Ilgas`);
}

//Sukurt kintamąjį su savo amžiumi.
// Patikrink: jei amžius didesnis nei 100,
// arba mažesnis nei 0 - tegul išmeta "Invalid age";
// jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 -
// "Adult".

const amzius = 142;
if (amzius > 100 || amzius < 0) {
  console.log("Invalid age");
} else if (amzius >= 1 && amzius <= 18) {
  console.log("Child");
} else {
  console.log("Adult");
}

// Sukurk variable 'car', kuris bus lygus kažkokiam
// automobilio prekės ženklui. Sukurk if-else,
// kuris pasakys ar tas brand
// 'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

const car = "Mini";
const vwGroup = ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"];
if (vwGroup.includes(car)) {
  console.log("priklauso VW grupei");
} else {
  console.log("Priklauso BMW grupei");
}

// paskaita uzduotis 3

const balance = 1.0;
const checkBalance = true;
const isActive = true;

if (checkBalance === true) {
  if (isActive && balance > 0) {
    console.log(`Your balance is ${balance}.`);
  } else if (isActive === false) {
    console.log(`Your account is no longer acitve`);
  } else if (balance === 0) {
    console.log(`Your account is empty`);
  } else {
    console.log(`Your balance is negative. Please`);
  }
} else {
  console.log(`Thank you. Have a nice day!`);
}

//ternary pavyzdis
const condition = "not";
let action = "";

// if (condition === 'hot') {
//     action = 'we will go swim'; {

//     } else {
//         action = 'we will stay home'
//     }
// }

condition === "hot"
  ? (action = `we will go swim`)
  : (action = `we will stay home`);
console.log(action);

//ternary pavyzdis 2 (dar labiau sutrumpintas)

const cond = "hot";
let act = cond === `hot` ? `we will go swim` : `we will stay home`; //reiksme lygi jei cond lygus hot ir pirmas yra teigiamas antras neigiams
console.log(act);

// pavyzdis switch

const fruit = "Mangoes";
switch (fruit.toLowerCase()) {
  case "Oranges":
    console.log(`Oranges are 0.59 a ppound`);
    break;
  case "mangoes":
  case "papayas":
    console.log(`Mongoes and papayers are 232 a pundd`);
    break;
  default:
    console.log(`Sorry, we are out of ${fruit.toLowerCase()}`);
}


//arrays masyvai (push)

let savaitesDienos = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis'];
console.log(savaitesDienos[2])
savaitesDienos.push('penktadienis');
console.log('Pridetas jau su push', savaitesDienos[4]);
savaitesDienos.shift();
console.log('visos dienos po shift: ', savaitesDienos);
console.log(savaitesDienos.pop());
console.log('visos dienos po pop, istrina paskutini element', savaitesDienos);


// loops pratimas

for (let i = 0; i < 10; i++) {
    console.log(`${i} Petras`);
}

for (let j = 10; j > 0; j--) {
  console.log(`${j} Petras`);
}


// console.log ("kitos eilutes");

// for(let i = 0; i < 10; i++) {
//     console.log("Petras")
// }

// const name = "Petras";
// const count = 10;
// for(let i = 0; i < count; i++); {
//     console.log(name);
// }

// let i = 10;
// while(i > 0) {
//     console.log(i);
//     i--;
// }


