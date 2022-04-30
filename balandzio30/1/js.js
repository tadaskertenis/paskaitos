"use strict";

// //sujungti arrays ir juos išrušiuoti.

// //"Jon Snow", "Cersei Lannister", "Daenerys Targaryen"], ["Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]

// const firstArray = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen"];
// const secondArray = ["Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];

// function sujungta() {
//   //sujungs ir isrusiuos arrays kurie virsuje
//   const sujungtiMasyvai = firstArray.concat(secondArray);
//   return sujungtiMasyvai.sort();
//   console.log("testuoju return"); // niekas po return neissiveda i dienos sviesa. RETURN paskutine funkcijos eilute!!!
// }
// console.log(sujungta());

// // ---------------

// const degtukuSkaicius = [1, 2, 3, 12, 15, 16, 35];
// console.log(degtukuSkaicius);

// function degtukai(kiekis){
//   let yraTrikampis = false;
  
  
//     if (kiekis < 3) {
//     console.log("per mažai degtukų");
//   }
//   if (kiekis === 35) {
//     console.log("negalima sudeti nei vienos figuros");
//   }
//   if (kiekis === 3) {
//     console.log(
//       "paprastas atvejis kai galima sudeti tik lygiakrasti trikampi");
//   }
//   if (kiekis % 3 === 0) {
//     yraTrikampis = true;
//   }
//   if (kiekis % 4 === 0) {
//     console.log("galima sudeti tik keturkampi");
//   } 
 
//   if (kiekis % 8 === 0) {
//     console.log("galima sudeti tik keturkampi ir staciakampi");
//   }
//   if (kiekis >= 3 && yraTrikampis){
//       console.log("galima");

//   } else 
  
// }
// degtukai(16);   //padaryti kad mestu tik pirma atsakymą.

// //----------------

//a
// const ukioPlotas = (150 * 198);
// console.log (ukioPlotas);

const ilgis = 150;
const plotis = 198;
const kgBulviu = 120;
const kgRunkeliu = 150;
const kgMorku = 100; 

//a
const ukioPlotas = (ilgis * plotis / 10000);
console.log ("Ukio plotas", ukioPlotas, "ha");

//b 
const bulviuPlotas = (ukioPlotas / 3).toFixed(2);
console.log("Bulviu plotas",bulviuPlotas);

const runkeliuPlotas = (ukioPlotas / 10).toFixed(2);
console.log("Runkeliu plotas",runkeliuPlotas);

const morkuPlotas = (ukioPlotas - bulviuPlotas - runkeliuPlotas).toFixed(2);
console.log("Morku plotas",morkuPlotas);

//c
const pelnasBulves = (bulviuPlotas * 100) * kgBulviu * 0.2;
console.log(pelnasBulves);
const pelnasRunkeliai = (runkeliuPlotas * 100) * kgRunkeliu * 0.13;
console.log(pelnasRunkeliai);
const pelnasMorku = (morkuPlotas * 100) * kgMorku * 0.16;
console.log(pelnasMorku);


const pelnas = pelnasBulves + pelnasRunkeliai + pelnasMorku
console.log(pelnas)



if (ukioPlotas / 3) {

}


