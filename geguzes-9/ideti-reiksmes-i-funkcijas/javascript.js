"use strict";

const forma = document.getElementsByTagName("form")[0];
const pirmasInputas = document.getElementById("pirmas");
const antrasInputas = document.getElementById("antras");

function sumuoju(varA, varB) {
  return varA + varB;
}
function atvaizduoju(rezultatas) {
  document.getElementById("result").innerText = rezultatas;
}

forma.addEventListener("submit", (event) => {
  event.preventDefault();

  const pirmoInputoReiksme = pirmasInputas.value;

  const antroInputoReiksme = antrasInputas.value;

  
  const suma = sumuoju(+pirmoInputoReiksme, +antroInputoReiksme);

  atvaizduoju(suma);
});
