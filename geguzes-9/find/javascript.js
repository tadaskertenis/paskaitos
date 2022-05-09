"use strict";

const kursoNariai = [
  "Andrejus Kolesnikovas",
  "Daiva Urbonavičiūtė",
  "Darius Stančaitis",
  "Donatas Borkys",
  "Edita Koliataitė",
  "Edvardas Kazlauskas",
  "Egidijus Voveris",
  "Gabrielė Bartašiūtė",
  "Gytis Rickevičius",
  "Ieva Stanevičiūtė",
  "Inga Astrauskaitė",
  "Karolis Žemelis",
  "Lina Matulaitienė",
  "Nerijus Grigonis",
  "Ronaldas Česonis",
  "Tadas Kertenis",
  "Viktorija Kazakevičiūtė",
  "Žilvinas Blinovas",
];

const findRezultatas = kursoNariai.find((narys) => {
    return narys === "Tadas Kertenis"
})

const findIndeksas = kursoNariai.findIndex((narys) => {

    return narys === 'Tadas Kertenis';
  
  })

console.log(findRezultatas, findIndeksas);