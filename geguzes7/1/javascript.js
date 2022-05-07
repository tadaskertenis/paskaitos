'use strict'

const strExample = 'Nuostabus sestadienio rytas';
console.log('ilgis:', strExample.length);
console.log('ilgis', 'labas rytas'.length);
//--------


// charAt (pozicija); isimti specifine raide, skaiciu is sekos array
console.log('2as simlbolis:', strExample.charAt(2));
console.log('2as simlbolis:', strExample[2]);
console.log('2as simlbolis:', strExample[strExample.length -1]);
//------


// keisti visus i didziasas ar i mazasias, butinas skliaustukas
console.log('didziosiomis', strExample.toUpperCase());
//------


// pakeisti raide i kita raide replace arba replaceAll
console.log('s -> S:', strExample.replaceAll('s', 'S'));
//--------

// paieska simbolio
console.log('TAB pozicija', strExample.indexOf('tab'));
console.log('to ko nėra ieško', strExample.indexOf('ž'));
//-----------

// ar turi savyje, ar prasideda ar baigiasi
console.log('turi šeš', strExample.includes('šeš'));
console.log('turi šes', strExample.includes('šes'));
console.log('prasideda Nuo', strExample.startsWith('Nuo'));
console.log('baigiasi s', strExample.endsWith('s'));
//--------

// iskirti gabala slice, substring, substr
console.log('iskerpa pirmus 5 simbolius:', strExample.slice(0, 5));
console.log('nuperka pirmus du simbolius:', strExample.slice(2));
console.log('atvirsksciai nukerpa:', strExample.slice(-5, -2));
console.log('kirpti is vidurio:', strExample.slice(-5, -2));
console.log('paimti tik dali teksto is vidurio:', strExample.substring(2, 6));
//-------

//palyginimas didziuju ir mazuju 
console.log('a < A:', 'a' < 'A');
console.log('a > A:', 'a' > 'A');
//-------


//ar stringas ar ne
function isAString(live) {

    if (typeof live === 'string') {
      return `${live} is a string `;
    } else {
      return `${live} is not a string`;
    };
  
  };
  console.log(isAString(''));
  console.log(isAString('zodis'));
  console.log(isAString(123));
  //------
  //2 isskirstyti is string i masyva, ir neskaiciuoti nereikalingu tarpu naudojant TRIM()
  
  function splitString(stringai){
    if (typeof stringai === 'string'){
      return stringai.trim().split(' ');
    }
  };
  console.log(splitString('siandien seimu marsas yra gal gerai'));
  console.log(splitString('as yra gal gerai'));
  console.log(splitString(13));
  const elementai = splitString('nenoriu dirbti, noriu seslus kepti');
  console.log(elementai[1]);
  
  console.log(elementai.splice(1,1));
  console.log(elementai);
  
  console.log(elementai.join(' '));
  //------
  
  


const skaicius = 1239.1230;

console.log (typeof skaicius);
console.log (skaicius);

//paversti skaicius i string
console.log(typeof skaicius.toString())
console.log(skaicius.toString())
//---- 

// apvalint
console.log('1239', Math.floor(skaicius));
console.log('nubraukia viska po kablelio i mazesne puse 17.5', Math.floor(17.5));
console.log('i didesne puse apvalinti 17.5', Math.ceil(17.5));
console.log('apvalinti 17.5', Math.round(17.5));
console.log('apvalinti 17.5', Math.round(17.5));
console.log('du skaicius po kablelio', skaicius.toFixed(2));
//---- 

// is finite is NaN 
console.log(isNaN('12das3'));
console.log(isNaN('123'));
console.log(isNaN(123));
console.log(isFinite(123));
//----

// pavertimas stringo i skaiciu +, Number()
console.log('amzius: 14m.', +'14');
console.log('su number()', Number('145'));
//----

//random, min, max
console.log('bet kokia reiksme', (Math.random() * 5)).toFixed(2);
console.log('minimali reiksme', Math)




'bet '