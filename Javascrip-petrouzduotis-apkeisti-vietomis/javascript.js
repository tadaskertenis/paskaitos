'use strict'

const firstCar = document.querySelector('li:first-child');
const secondCar = document.querySelector('li:nth-child(2)');

const bmw_group = firstCar.textContent;
const vw_group = secondCar.textContent;

firstCar.textContent = vw_group;
secondCar.textContent = bmw_group;

