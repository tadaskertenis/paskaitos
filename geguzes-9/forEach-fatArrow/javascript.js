"use strict";

//forEach

const menesiai = [
  "Sausis",

  "Vasaris",

  "Kovas",

  "Balandis",

  "Gegužė",

  "Birželis",

  "Liepa",

  "Rugpjūtis",

  "Rugsėjis",

  "Spalis",

  "Lapkritis",

  "Gruodis",
];

menesiai.forEach((menuo, index) => {

    if(index < 2 || index === 11) {
  
      console.log(`${menuo} - žiemos mėnuo`);
  
    } else if (index < 5) {
  
      console.log(`${menuo} - pavasario mėnuo`);
  
    } else if (index < 8) {
  
      console.log(`${menuo} - vasaros mėnuo`);
  
    } else {
  
      console.log(`${menuo} - rudens mėnuo`);
  
    }
  
  })