"use strict";
const kaina = 6;
let rezultatoLaukas = document.querySelector("h1");
function kainosApskaiciavimas(event) {
  event.preventDefault();
  const amzius = document.querySelector("#input-field") //is html 12 eilutes paemu tuscia input field.
  if (amzius < 0) {
    rezultatoLaukas.textContent = "Eik is cia";
    return;
  }

  let galutineKaina = kaina;
  if (amzius <= 16) {
    galutineKaina = kaina * 0.5;
    console.log(galutineKaina);
  } else if (amzius >= 60) {
    galutineKaina = kaina * 0.3;
  }

  rezultatoLaukas.textContent = galutineKaina.toFixed(2);
}
document.querySelector("form").addEventListener("submit", kainosApskaiciavimas); //istraukiu forma is html ir prideda event
