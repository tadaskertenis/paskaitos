"use strict";

// sukurti tools kuris pagal sali ir dienu skaiciu pasako kiek turi pasiimti pinigu
//pasirinkus sali, ir suvedus dienu skaiciu, turi sudauginti salies isleidimo vidurki su dienu skaiciumi.

//sudeda saliu sarasa
const countries = [
  { id: "1", name: "Country", price: 0 },
  { id: "2", name: "Lithuania", price: 38.35 },
  { id: "3", name: "Spain", price: 54 },
  { id: "4", name: "Latvia", price: 43 },
  { id: "5", name: "Estonia", price: 42 },
  { id: "6", name: "Poland", price: 15.67 },
  { id: "7", name: "Belarus", price: 22.85 },
  { id: "8", name: "Finland", price: 58 },
  { id: "9", name: "Sweden", price: 44.58 },
  { id: "10", name: "Norway", price: 48.37 },
  { id: "11", name: "Denmark", price: 70.19 },
  { id: "12", name: "Germany", price: 51 },
  { id: "13", name: "Czech", price: 28.38 },
  { id: "14", name: "Hungary", price: 26.49 },





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



finalResult.innerText = totalMoney.toFixed(2) + " € should cover your local expenses, Enjoy your Trip!";
}

document.querySelector("form").addEventListener("submit", moneyCalculator);
