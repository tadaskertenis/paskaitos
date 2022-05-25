// Būdai, kuriais galima sukurti JS objektus
// 1 Naudojant object literal sintaksę
const persona = {
    vardas: 'ManoVardas',
    pavarde: 'ManoPavarde',
  }
  console.log(persona);
  // 2 Naudojant new raktinį žodį
  // Pirmas būdas
  // sukuriamas objektas
  const useris = new Object();
  //pridedamos savybės
  useris.vardas = 'UserisVardas';
  useris.pavarde = 'UserisPavarde';
  useris.amzius = 12;
  console.log(useris)
  //Antras būdas
  //sukuriama funkcija
  function UserisDu(vardoArg, pavardesArg) {
    this.vardas = vardoArg;
    this.pavarde = pavardesArg;
  }
  const userisDu = new UserisDu('UserisDuVardas', 'UserisDuPavarde');
  console.log(userisDu.vardas);
  console.log(userisDu);