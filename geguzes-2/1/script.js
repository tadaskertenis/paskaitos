"use strict";

const forma = document.querySelector("form");
forma.addEventListener("submit", sumbitHandler);

function sumbitHandler(event) {
  event.preventDefault();
  const vardas = document.querySelector("#vardas").value;
  const skaicius = document.querySelector("#skaicius").value;
  const sarasas = document.querySelector("ul");

  if (!forma || !skaicius || !vardas || !sarasas) {
    console.log("truksta duomenu");
  }

  let naujasElementas = "";

  for (let i = 0; i < skaicius; i++) {
    naujasElementas += `<li>${vardas}</li>`;
  }

  sarasas.innerHTML = naujasElementas;
}
