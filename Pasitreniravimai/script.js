"use strict";

// sukurti tools kuris pagal sali ir dienu skaiciu pasako kiek turi pasiimti pinigu
//pasirinkus sali, ir suvedus dienu skaiciu, turi sudauginti salies isleidimo vidurki su dienu skaiciumi.

//sudeda saliu sarasa
const countries = [
  { id: "1", name: "Lithuania", price: 30 },
  { id: "2", name: "Spain", price: 40 },
  ];

  // istumia sali i pasirinkima
let finalResult = document.querySelector("h2");
let spain = 30;
let selectedElement = document.createElement("select");
selectedElement.setAttribute('id',"country-dropdown"); 
let options = "";
countries.forEach((element) => {
options += `<option value="${element.id}">${element.name}</option>`
}); 
selectedElement.innerHTML = options;
document.querySelector(".selector").appendChild(selectedElement);



function moneyCalculator(event) {
  event.preventDefault();
  const choosenCountry = document.querySelector("#country-dropdown");
  const nights = document.querySelector("#number-of-days").value;
  let choosenCountryValue = choosenCountry.options[choosenCountry.selectedIndex].value;
let selectedCountry = countries.find((country)=>{return country.id === choosenCountryValue});

let totalMoney = selectedCountry.price * nights
console.log(totalMoney);



finalResult.innerText = totalMoney.toFixed(2);
}

document.querySelector("form").addEventListener("submit", moneyCalculator);
