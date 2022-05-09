"use strict";

// //kovertavimas
// const konvertuotaReiksme = konvertuojaValiuta(6, "usDollar", atvaizduojaKonvertuotaValiuta);
// atvaizduojaKonvertuotaValiuta(konvertuotaReiksme);
// function konvertuojaValiuta(eurai, valiuta, callbackFunkcija) {
//   const valiutos = [
//     { name: "usDollar", amount: 1.0548 },
//     { name: "britishPound", amount: 0.85481 },
//     { name: "japaneseYen", amount: 137.7 },
//     { name: "canadianDollar", amount: 1.3617 },
//   ];
//  for (let i = 0; i < valiutos.length; i++){
//      if (valiuta === valiutos[i].name)
//      return eurai * valiutos[i].amount;
//  }

// }

// function atvaizduojaKonvertuotaValiuta(reiksme) {
//   console.log("gausite", reiksme.toFixed(1), "euru");
// }

konvertuojaValiuta(10, "canadianDollar", atvaizduojaKonvertuotaValiuta);

function konvertuojaValiuta(eurai, valiuta, callbackFunkcija) {
  const valiutos = [
    { name: "usDollar", amount: 1.0548 },

    { name: "britishPound", amount: 0.85481 },

    { name: "japaneseYen", amount: 137.7 },

    { name: "canadianDollar", amount: 1.3617 },
  ];

  for (let i = 0; i < valiutos.length; i++) {
    if (valiuta === valiutos[i].name) {
      callbackFunkcija(eurai * valiutos[i].amount);
    }
  }
}

function atvaizduojaKonvertuotaValiuta(reiksme) {
  console.log(reiksme);
}
