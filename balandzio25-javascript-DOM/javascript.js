'use strict'

// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, 
//jei reikalingas - paklaustų miesto į kurį reiks pristatyti;
// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"
// Jei prekės kaina daugiau arba lygu 50€ arba miestas yra "Vilnius"- pristatymas nemokamas. Pristatymas kitur Lietuvoje: 20€;
// Galiausiai atspausdintų tokią informaciją:
// 1 variantas (be pristatymo)
// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a
// 2 variantas (su pristatymu)
// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.
// 3 variantas (su nemokamu pristatymu)
// Prekės kaina : xx.xx €
// Prekę nemokamai pristatysime į "įvestas miestas" per 1-3 dienas.

let prekesKaina;
let pristatymoMiestas;
const pristatymoKaina = 20;
const nemokamoPristatymoRiba = 50;

// klausiu kainos tol, kol yra įvedamas tekstas, kurį įmanonoma paversti į skaičių. (nėra NaN po konversijos, nėra nulis arba mažiau.)

do {
  prekesKaina = prompt('Įveskite prekės Kainą');
  prekesKaina = Number(prekesKaina);
}
while (isNaN(prekesKaina) || prekesKaina <= 0)


//klausiu ar reikia pristatymo
const arReikalingasPristatymas = confirm('Ar reikalingas pristatymas 5 namus?');

if (arReikalingasPristatymas) {
  //klausiu pristatymo miesto, kol nėra ivedamas tektas
  do {
    pristatymoMiestas = prompt(`Į kurį miestą reikės pristatyti?`)
  } while (pristatymoMiestas.length === 0); // jei tuščias kartoju ciklą

  // jeigu miestas Vilnius ARBA kaina daugiau nei 50, pristatymas nemokamas
  if (pristatymoMiestas === 'Vilnius' || prekesKaina >= nemokamoPristatymoRiba) {
    console.log(`Prakės kaina ${prekesKaina.toFixed(2)} € `);
    console.log(`Prekė nemokamai pristatysime į ${pristatymoMiestas} per 1-3 dienas.`);
  } else { // jei kaina mažiau už 50 ar  bet koks kitas meistas nei vilnius
    const bendraKaina = prekesKaina + pristatymoKaina;
    console.log(`Prekėsk kaina ${prekesKaina.toFixed(2)} €`);
    console.log(`Pristatymo kaina ${pristatymoKaina.toFixed(2)} €`);
    console.log(`Is viso ${bendraKaina} €`);
    console.log(`Preke pristatysitem į ${pristatymoMiestas} per 1-3 dienas.`);
  }
} else {
  console.log(`Prekės kaina ${prekesKaina.toFixed(2)} €`);
  console.log(`Prekę galite atsiimti adresu Vilnius ged. g. 14`);
}

// DOM kaip ideti dalykus į HTML
const newElement = document.createElement('div');
const elementContent = document.createTextNode('Ypac vasaros dienos');

newElement.appendChild(elementContent);
const paragraphTag = document.querySelector('p');
document.body.insertBefore(newElement, paragraphTag);

