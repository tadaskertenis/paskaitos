'use strict'
//funkcijos 

//funkcijos deklaravimas
// pradeti funkcijos deklaravima su veiksmazodziu pvz. gautiVarda, paskaiciuotiAmziu
function getFunctionDeclarationExample() {
console.log('getFunctionDeclarationExample')
};

getFunctionDeclarationExample();
console.log('--**--');

//lokalus kintamieji funkcijoje
// lokalus kintamasis yra tas kas funkcijoje sukurtas ir isorinės eilutės
// to nemato todel ir iškviesti nebus galima.
// 25 eilute jau nemato 19 eilutėje sukurto kintamojo. 

function setLocasVariablesExample(){
let lokalusKintamasis = 'Esu lokalus kontamasis';
console.log(lokalusKintamasis);

};

setLocasVariablesExample();
// console.log(lokalusKintamasis);  <--- šio nemato jau. 
console.log('--**--');
//--------

//Globalus kintamieji
//tie kas sukurti už funkcijos ribu
//funkcija gali paimti is isores kintamaji
//bet funkcijoje sukurto kintamojo kiti negali paimti. 


let globalusKintamasis = 'Esu globalus kintamasis';
function setGlobalVariablesExample(){
let zinute = `Testuoju kintamaji, kurio reiksme ${globalusKintamasis}`;
console.log(zinute);
};

setGlobalVariablesExample();
console.log('--**--');
//----------
//Globalus kintamieji
console.log('--**--');
let globalusKintamasis2 = 'Antras globalaus pvz';

function setGlobasVariables2Example (){
    globalusKintamasis2 = 'nauja reikšmė'   // <-- nauja reikšmes viršuje nurodytam kintamajam. 
    let zinute = 'Reiksme yra: ' + globalusKintamasis2;
    console.log (zinute);  // <-- ismeta kas buvo sukurta funkcijoje, orginalas perrašomas. 
};
console.log(globalusKintamasis2);   // <-- ismeta kas buvo nurodyta globalusKintamasis2 orginaliai 
setGlobasVariables2Example(); // <-- iskviesta funkcija 
console.log(globalusKintamasis2); // <--- atsirado nauja reiksme po funckijos iskvietimo kuri nurodyta 49 eiluteje.
console.log('--**--');
//----------

// kintamuju vardu dubliavimas

let globalusKintamasis3 = 'esu trecias';
function setGlobasVariables3Example(){
let globalusKintamasis3 = "esu funkcijos viduje";
let zinute = 'labas, ' + globalusKintamasis3;
console.log(zinute);

};
setGlobasVariables3Example();
console.log(globalusKintamasis3);

console.log('--**--');
//------

// parametrai vs argumentai
// function setFunctionWithParams(parametrai){}
// setFunctionWithParams(argumentai)
function setFunctionWithParams(vardas, miestas, data) {
    
console.log(`${vardas} iš ${miestas} yra geras zmogus, šiandien yra ${data}`);
}

const data = new Date ();
setFunctionWithParams('Andrejus', 'Kauno', data.toDateString());
setFunctionWithParams('Zilvinas', 'Marijampoles', data.toDateString());
console.log('--**--');
//---

//----
function setFunctionWithParams2(pavadinimas, data){


};
function setFunctionWithParams2(pavadinimas, data) {
    pavadinimas = `${pavadinimas} ${data}`;
console.log (pavadinimas);
};

let pavadinimas = 'Treciadienis';
setFunctionWithParams2 (pavadinimas, data.toDateString());
console.log(pavadinimas);
console.log('--**--');
//----

// Defaultines/pradines reiksmes
 
function setDefaultParameters2 (pavadinimas, data = (new Date()).toDateString()){
    pavadinimas = `${pavadinimas} ${data}`;
    console.log (pavadinimas);
};

setDefaultParameters2('Mokomes JS');
console.log('--**--');
// ar yra ivesta reiksme, patikrinti
function setDefaultParameters3 (pavadinimas){
console.log(pavadinimas ?? 'pavadinimas neegzistuoja')


}

setDefaultParameters3(0);
setDefaultParameters3();
setDefaultParameters3(null);

 