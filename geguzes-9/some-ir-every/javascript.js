'use strict'

const masyvas =  [1,2,3,4,5, 40];
// kad bent vienas
const arYraLyginiu = masyvas.some((elementas) => {
    return elementas % 2 === 0; 
})

console.log(arYraLyginiu);

// kad kiekvienas atitiktu
const arYraMazesnisUzDesimt = masyvas.every((elementas) => {
    return elementas < 10;
})

console.log(arYraMazesnisUzDesimt);