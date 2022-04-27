"use strict";

const forma = document.querySelector("form");
const vardas = document.querySelector("#vardas");
const pavarde = document.querySelector("#pavarde");
const amzius = document.querySelector("#amzius");
let lentele = document.querySelector("table");

forma.addEventListener("submit", veiksmasPoSubmit);

function veiksmasPoSubmit(event) {
  event.preventDefault();
  let naujasElementas = document.createElement("tr");
  naujasElementas.innerHTML = `
    <td>${vardas.value}</td>
    <td>${pavarde.value}</td>
    <td>${amzius.value}</td>
    `;
    lentele.appendChild(naujasElementas);
    vardas.value = '';
    pavarde.value = '';
    amzius.value = '';
    



}
