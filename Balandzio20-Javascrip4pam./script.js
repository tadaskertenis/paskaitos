"use strict";

//masyvai (arrays) number2 SPLICE

let savaitesDienos = [
  "pirmadienis",
  "antradienis",
  "treciadienis",
  "ketvirtadienis",
];
console.log(savaitesDienos[2]);
savaitesDienos.push("penktadienis");
console.log("Pridetas jau su push", savaitesDienos[4]);
savaitesDienos.shift();
console.log("visos dienos po shift: ", savaitesDienos);
console.log(savaitesDienos.pop());
console.log("visos dienos po pop, istrina paskutini element", savaitesDienos);
savaitesDienos.splice(1, 0, "pirmadienis");
console.log("visos dienos po splice, savaitesDienos", savaitesDienos);
savaitesDienos.splice(3, 1, "durnadienis"); //iterp bet kur ir istrint kur5 nori
console.log("visos dienos po splice, savaitesDienos", savaitesDienos);

let darboDienos = [
  "pirmadienis",
  "antradienis",
  "treciadienis",
  "ketvirtadienis",
  "penktadienis",
];
const bePirmadienio = darboDienos.slice(1, 5);
console.log(bePirmadienio);
//CONCAT sudeda du arrays bet neatlieka veiksmu
let savatigalis = [`sestadienis`, `sekmadienis`];
const pilnaSavaite = darboDienos.concat(savatigalis);
console.log(pilnaSavaite);

//split ir join (sujungia isskirais masyvus arrays)

const sakinys = "grazu tu mano brangi tevyne";
const zodziai = sakinys.split(" ");
console.log(zodziai);
zodziai.push("!");
console.log(`ipushintas sauktukas`, zodziai);
console.log(zodziai.join(" "));
let naujasSakinys = zodziai.join(" ");
console.log(`prideda sauktuka be tarpo|`, naujasSakinys.replace(" !", "!"));

// masyvu arrays rusiavimas - sort surusiuoja bca pagal abc arba 231 i 123 ir t.t. // paieska indexof / includes
const zodiakai = ["svarstykles", "jautis", "avinas", "vandenis"];
console.log("nerusiuotas", zodiakai);
console.log(`rusiuotas`, zodiakai.sort());
console.log(`jautis`, zodiakai.indexOf("jautis")); // kelintoje vieotje masyve
console.log(`avinas`, zodiakai.includes("avinas")); //ar yra masyve toks zodis

const zodiakas = "dvynys";
if (!zodiakai.includes(zodiakas)) {
  //jei zodiakai neincludina zodzio dvynys tada ideti zodi dvynys
  zodiakai.push(zodiakas);
}
console.log(zodiakai);

//ciklai (loops)
for (let i = 0; i < 5; i++) {
  // kintamasis ir nuo ko prades, ka tikrins, ka atliks iki atitikimo
  console.log(`mano indeksas ${i}`);
}

//output text from array loop
const masinos = ["audi", "bmw", "volvo", "lada"];
for (let n = 0; n < masinos.length; n++) {
  console.log(`${masinos[n]} yra geras auto`);
}

// ciklas, loop while
let i = 0;
let values = "";
while (i < 5) {
  values = values + `skaicius yra` + i;
  i++;
}
//document.getElementById("loopvalues").innerHTML = values;

// do while loop
let n = 1;
let text = '';
do {
  n++;
  text = text + `<br>skaicius yra ${n}`;
} while (n < 5);
document.getElementById('loopValue').innerHTML = text;

