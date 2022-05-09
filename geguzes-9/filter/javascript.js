'use strict'

const kursoNariai = ['Andrejus Kolesnikovas', 'Daiva Urbonavičiūtė',    'Darius Stančaitis',    'Donatas Borkys',    'Edita Koliataitė',    'Edvardas Kazlauskas',    'Egidijus Voveris',    'Gabrielė Bartašiūtė',    'Gytis Rickevičius',    'Ieva Stanevičiūtė',    'Inga Astrauskaitė',    'Karolis Žemelis',    'Lina Matulaitienė',    'Nerijus Grigonis',    'Ronaldas Česonis',    'Tadas Kertenis',    'Viktorija Kazakevičiūtė', 'Žilvinas Blinovas'];

const rezultatasNariu = kursoNariai.filter((narys) => {
return narys.charAt (0) === 'I';
});

console.log(rezultatasNariu);

