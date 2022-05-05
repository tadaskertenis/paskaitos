'use strict'

// const nameElement = document.createElement('h1');
// nameElement.innerText = (`Tadas`);
// document.body.appendChild(nameElement).style.color = "#fff000";




// const masinos = ['bmw', 'audi', 'citroen'];

const newEl = document.createElement('ul');

const bmw = document.createElement('li');
const audi = document.createElement('li');
const mB = document.createElement('li');


newEl.appendChild(bmw);
newEl.append(audi);
newEl.append(mB);


bmw.innerText = "bmw";
audi.innerText = "audi";
mB.innerText = "mB";
console.log(newEl);
