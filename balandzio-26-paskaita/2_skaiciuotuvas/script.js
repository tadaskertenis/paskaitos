'use strict'

let num1 = document.querySelector('#num-1'); // istraukiu skaičiu is html su ID num-1, ir suteikiu num1 reiksme 
console.log(num1);
let num2 = document.querySelector('#num-2'); //istraukiu skaičiu is html su ID num-2, ir suteikiu num2 reiksme 
console.log(num2);
let btn = document.querySelector('.button-plus'); // istraukti mygtuka per class
console.log(btn);
let result = document.querySelector('.result'); //istraukti rezultato lauką per class .result
console.log(result)

//querySelector(ir prideti klase, arba id) tada paima būtent tą elementą. 



 //kad mygtukas būtų sekamas iš virsauš paimtas BTN. kas bus paspaudus
 //addEventListener (koks veiksmas, kokia funkcija) - ka tai padarys jei paspausi/click
 //.value bet išmeta kaip stringą-žodžiai
 //.number padaro kad is reiksmes (zodzio) matytu kaip skaiciu. 
btn.addEventListener('click', function(){ 
if (num1.value && num2.value) {
    num1.nextElementSibling.classList.add('hidden'); 
    num2.nextElementSibling.classList.add('hidden'); 
    result.innerText = Number(num1.value) + Number(num2.value);
} else {
    result.innerText = '';
}

    if (!num1.value){
       num1.nextElementSibling.classList.remove('hidden'); 
    }

    if (!num2.value){
        num2.nextElementSibling.classList.remove('hidden'); 
     }
});
//nextElementSibling - parenka ne teva, ne vaiką o vidurinį (brolį). 
//classlist - parenka class, naudojamas su prieš tai kažkokiu 

//result tai nukeltas is virsaus let 
//.innerText - pakeičia toje vietoje kur buvo html tago vidus, neatvaizduoja stiliaus ir struktūros tik TAG'o vidus
//.number padaro kad is reiksmes (zodzio) matytu kaip skaiciu)
//.innerHtml - pakeicia ir visą tag'ą pvz is (h1 tadas /h1) gali pakeisti į (p jonas /p)
// funkcijos - function (google)
//scope - funkcijos scope yra viskas kas tarp riestiniu skliaustu. 

//function - pradesiu - sugalvotasPavdinimas (darVienasSugalvotasPavadinimas) {
    // alert, console.log arba sudėjimą) }




