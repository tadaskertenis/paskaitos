"use strict";

const forma = document.querySelector("form");
forma.addEventListener("submit", antanoUkis);

function antanoUkis(event) {
    event.preventDefault();
  const ilgis = document.querySelector("#ilgis").value;
  const plotis = document.querySelector("#plotis").value;
  const kgBulviu = document.querySelector("#bulves").value;
  const kgRunkeliu = document.querySelector("#morkos").value;
  const kgMorku = document.querySelector("#runkeliai").value;

  const ukioPlotas = (ilgis * plotis) / 10000;
  console.log("Ukio plotas", ukioPlotas, "ha");

  const bulviuPlotas = (ukioPlotas / 3).toFixed(2);
  console.log("Bulviu plotas", bulviuPlotas);

  const runkeliuPlotas = (ukioPlotas / 10).toFixed(2);
  console.log("Runkeliu plotas", runkeliuPlotas);

  const morkuPlotas = (ukioPlotas - bulviuPlotas - runkeliuPlotas).toFixed(2);
  console.log("Morku plotas", morkuPlotas);

  const pelnasBulves = bulviuPlotas * 100 * kgBulviu * 0.2;
  console.log(pelnasBulves);
  const pelnasRunkeliai = runkeliuPlotas * 100 * kgRunkeliu * 0.13;
  console.log(pelnasRunkeliai);
  const pelnasMorku = morkuPlotas * 100 * kgMorku * 0.16;
  console.log(pelnasMorku);

  const pelnas = pelnasBulves + pelnasRunkeliai + pelnasMorku;
  const result = document.querySelector('.result');
  let naujasElemtentas = document.createElement('div');
  naujasElemtentas.innerHTML = `
  <div>Ukio plotas ${ukioPlotas}</div>
  <div>${bulviuPlotas}</div>
  <div>${runkeliuPlotas}</div>
  <div>${morkuPlotas}</div>
  <div>${pelnas}</div>
  `;
result.appendChild(naujasElemtentas);
}



