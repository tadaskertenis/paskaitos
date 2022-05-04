"use strict";
//prideti header su H1 i body
let headerEl = document.createElement("header");
headerEl.innerHTML = `<h1>Darbu Sarasas</h1>`;
document.body.appendChild(headerEl);
//-------

//sukuriamas div
let inputContainerEl = document.createElement("div");
//----

//input ir button kad galetume prikabinti addeventlistener
let inputEl = document.createElement("input");
let buttonEl = document.createElement("button");
buttonEl.textContent = "+";
inputEl.setAttribute("id", "input-text");
inputEl.setAttribute("type", "text");
inputEl.setAttribute("placeholder", "Iveskite uzduoti");
document.body.appendChild(inputEl);
document.body.appendChild(buttonEl);
//----

// sukurtas div'as is virsuje nurodyto
document.body.appendChild(inputContainerEl);
//-------

// sukurti list kurti kuris pats pasipildo.
let listEl = document.createElement("ul");
document.body.appendChild(listEl);
//--------

// sukurti evenet klausima kad kai mygtuka paspaudzia prideda kas ivedama.
buttonEl.addEventListener("click", () => {
  const text = inputEl.value;
  if (text) {
    veiksmaiSuSarasu(text);
  }
});

function veiksmaiSuSarasu(text) {
    let listItemEl = document.createElement('li');
    listItemEl.innerHTML = `
    <span>${text}</span><button class='remove'>-</button>
    `;
    listEl.appendChild(listItemEl);

    inputEl.value = '';

    const removeBtnEl = listItemEl.querySelector('.remove');
    removeBtnEl.addEventListener('click', (event) =>{
        event.currentTarget.parentNode.remove();
    } )
}
//------


//kad paspaudus ENTER priimtu tas kas parasyta
document.addEventListener('keypress', (event) => {
    const text = inputEl.value;
    if (event.keyCode === 13 && text){
        veiksmaiSuSarasu(text)
    };
})
//------











// <input id="input-text" type="text" placeholder="Įveskite užduotį">

// <button id="add">+</button>

// `;

// document.body.appendChild(inputContainerEl);

// //pridedame sąrašo elementą darbams atvaizduoti

// const listEl = document.createElement('ul');

// document.body.appendChild(listEl);

// const inputEl = document.querySelector('#input-text');

// const buttonEl = document.querySelector('#add');
