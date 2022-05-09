'use strict'

//map
const menesiai = [
    "Sausis",
  
    "Vasaris",
  
    "Kovas",
  
    "Balandis",
  
    "Gegužė",
  
    "Birželis",
  
    "Liepa",
  
    "Rugpjūtis",
  
    "Rugsėjis",
  
    "Spalis",
  
    "Lapkritis",
  
    "Gruodis",
  ];

  function grazinaSezona(index) {

    if(index < 2 || index === 11) {

        return 'žiema';

    } else if (index < 5) {

        return 'pavasaris';

    } else if (index < 8) {

        return 'vasara';

    } else {

        return 'ruduo'

    }

  }

  const rezultatas = menesiai.map((menuo, index) => {
    return {menuo, sezonas: grazinaSezona(index) };
  } );

  console.log(rezultatas)