"use strict";

const forma = document.querySelector("form");

forma.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const skaicius = document.querySelector("#skaicius").value;
  const rezultatas = document.querySelector("div");

  let trikampioHTML = ``;

  for (let eil = 0; eil < skaicius; eil++) {
      for (let pos = 0; pos <= eil; pos++){
        trikampioHTML += '*';
      }
   
    trikampioHTML += '<br>';
  }

  rezultatas.innerHTML = trikampioHTML;
}
