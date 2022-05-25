'use strict'
//inkapsuliacija
// Inkapsuliuojant, objektų metodai ir savybės (properties) yra uždari objekte, todėl jie nėra eksportuojami
class Knyga {
  idetiAtributus(pavadinimas, autorius) {
    this.pavadinimas = pavadinimas;
    this.autorius = autorius;
  }
  gautiAutoriu() {
    console.log(this.autorius);
  }
  gautiPavadinima() {
    console.log(this.pavadinimas);
  }
  gautiAntraste() {
    console.log(`${this.pavadinimas} (${this.autorius})`);
  }
}
const knyga = new Knyga();
knyga.idetiAtributus('Meškiukas Rudnosiukas', 'Vytė Nemunėlis');
knyga.gautiAutoriu();
knyga.gautiPavadinima();
knyga.gautiAntraste();
console.log('--**--')
// Abstrakcija
// Jeigu žiūrim į mašiną, galime pasakyti kaip ji atrodo, kokia jos spalva, kokie ratai ir pan. Bet nematome kas ją sudaro, koks variklis ir pan. Tai ir yra abstrakcija - sudėtingų detalių slėpimas ir paprastų rodymas.
function Studentas(vardas, stojimoMetai) {
  this.vardas = vardas;
  this.stojimoMetai = stojimoMetai;
  const adresas = 'Studento adresas';
  const surastiAdresa = () => console.log(`${adresas} yra privatus`);
  this.gautiAdresa = () => {
    console.log(vardas, stojimoMetai);
    surastiAdresa();
  }
}
const studentas = new Studentas('Joshua', 2017);
// studentas.gautiAdresa();
//studentas.surastiAdresa(); //nėra funkcija
// console.log(studentas.adresas);
// Paveldėjimas
// Leidžia perduoti tėvines klases į vaikines. 
class Automobilis {
  constructor(greitis) {
    this.greitis = greitis;
  }
  maksimalusGreitis() {
    console.log(`mašina gali važiuoti max ${this.greitis}`);
  }
}
class Motociklas extends Automobilis { };
let motociklas = new Motociklas('250');
motociklas.maksimalusGreitis();
// Polimorfizmas
// Galvokime apie polimorfizmą kaip apie kelių formų rinkinį. Šiuo atveju polimorfizmas reiškia, kad tą patį metodą galima naudoti skirtingiems objektams. Pavyzdžiui jeigu Mašina ir Motociklas turi tą pačią funkciją drive, polimorfizmas suteikia galimybę iškviesti tą patį metodą skirtinguose objektuose
class Auto {
  vaziuoja() {
    console.log('letai');
  }
  kuriasi() {
    console.log('kartais');
  }
}
class Moto extends Auto {
  vaziuoja() {
    console.log('greitai');
  }  
};
const auto = new Auto();
const moto = new Moto();
auto.vaziuoja();
moto.vaziuoja();
moto.kuriasi();