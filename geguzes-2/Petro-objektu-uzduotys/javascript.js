// let car = {
//     doors: 4,
//     color: 'red',
//     brand: 'bmw',
// };

//--------
// užduotis a

// Sukuriame formą su dviem input -
// name ir surname. Pateikus formą,
// JS turi pasiimti vardą ir pavardę
// ir sukurti objektą pavadinimu
// 'person'. Šis objektas turės du
// parametrus - name ir surname.
// Kai tik objektas susikuria
// (t.y. dar addEventListener funkcijoje)
//  - atsispausdink objektą ir
//  pažiūrėk ar viskas gerai veikia.
//   Hint: už funkcijos ribų negali
//   atspausdinti objekto, nes const
//   person = {} yra limituotas
//   konkrečiame bloke (šiuo atveju -
//     funkcijoje). Už jos ribų jis
//     neegzistuoja.

// const name = document.querySelector('#name');
// const surname = document.querySelector('#name');

// ;
// const createAPerson = document.querySelector("form");

// createAPerson.addEventListener("submit", nameCreator);

// function nameCreator(name, surname) {
//   const vardas = document.querySelector("#vardas");
//   const pavarde = document.querySelector("#pavarde");

//   return {
//     name: personName,
//     surname: pavarde,
//   };
// }
// let vardasBeObjekto = nameCreator(`personName, pavarde`);

const createAPerson = document.querySelector("form")
createAPerson.addEventListener("submit", user)

function user(event){
    event.preventDefault();
    const vardas = document.querySelector("#vardas").value;
    const pavarde = document.querySelector("#pavarde").value;
    
    const useris = {
        name: vardas,
        surname: pavarde,
    };
    const newPerson = document.querySelector("div");
    newPerson.innerText = `${useris.name} ${useris.surname}`; 



   
};
//const useris = new useris ('vardas', 'pavarde');






