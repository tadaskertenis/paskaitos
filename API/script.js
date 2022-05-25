'use strict'


const fetchCountry = async (countryCode) => {
    try {
    const result = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`); 
    const data = await result.json();
    return data;   
} catch (error) {
    console.log(error);
}                
};
const fetchCountryAndNeighbors = async () => {
    const country = await fetchCountry('lt');
    const neighbors = await Promise.all(
        country[0].borders.map((borderCode) => fetchCountry(borderCode))
    );
    return neighbors;
}

const displayItems = (countries) => {

    let element = '';

    countries.forEach((country) => {

        element += `<div>

                        <span>${country[0].name.common}</span> <img src='${country[0].flags.svg}'></img>

                    </div>`;

    });

    document.body.innerHTML = element;

};
 



fetchCountryAndNeighbors().then((result) => displayItems(result));




// --**-- // 
//pasiemem duomenis apie sali, pagal jos varda
// const fetchCountry = async (countryName) => {
//     try {
//     const result = await fetch(`https://restcountries.com/v3.1/name/${countryName}`); 
//     const data = await result.json();
//     return data;   
// } catch (error) {
//     console.log(error);
// }                
// };
// fetchCountry('Lithuania').then((result) => console.log(result));

// --**-- // 


