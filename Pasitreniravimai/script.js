"use strict";

// sukurti tools kuris pagal sali ir dienu skaiciu pasako kiek turi pasiimti pinigu
//pasirinkus sali, ir suvedus dienu skaiciu, turi sudauginti salies isleidimo vidurki su dienu skaiciumi.



let finalResult = document.querySelector("h2");
let spain = 30; 

function moneyCalculator(event) {
  event.preventDefault();
  const choosenCountry = document.querySelector("#country-dropdown");
  const nights = document.querySelector("#number-of-days");
  choosenCountry = choosenCountry.options[choosenCountry.selectedIndex].text
  choosenCountryText = choosenCountry.options[choosenCountry.selectedIndex].text
  


  if (choosenCountry === "Spain") {
    totalMoney = choosenCountry * nights;
}



finalResult.textContent = totalMoney.toFixed(2);


}

document.querySelector('form').addEventListener('submit', moneyCalculator);







  

//   if (choosenCountry === 1) {
//     totalMoney = nights * choosenCountry;
//     console.log(totalMoney);
//   }

//   finalResult.textContent = totalMoney.toFixed(2);
//