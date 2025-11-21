console.log("Esercizi OOP");


//creare una classe Beverage con le seguenti proprietà:
//name, producer, yob, quantity, alcohol

//creare una classe Beer che estende beverage con le seguenti proprietà:
//type, color

const moretti = new Beer('moretti ipa', 'moretti s.p.a.', 2024, 66, 4,'ipa', 'blonde',  100, 5, 5,);

//creare una classe Wine che estende beverage con le seguenti proprietà:
//vite, location

const dolcetto = new Wine('dolcetto bella vita', 'cantine bella vita', 2020, 75, 11, 200, 3, 10, 'dolcetto', 'alba');

//creare una classe PremiumWine che estende wine con le seguenti proprietà:
//certification

const barolo = new PremiumWine('brunate barolo', 'Francesco Borgogno', 2021, 75, 14, 1000, 5 , 15, 'nebbiolo da barolo', 'piemonte', 'D.O.C.G');


//creare i toString di tutte le classi

console.log(moretti.toString());
console.log(dolcetto.toString());
console.log(barolo.toString());

// aggiungere una proprietà chiamata bottleNumber a beverage e un metodo
// chiamato sellBottles che prende come input le bottiglie da vendere e 
// se ci sono abbastanza bottiglie le rimuove dal numero totale, altrimenti
// non fa nulla e logga l'errore
//const nBotleToSell = Number(prompt("inserire il numero di bottiglie a vendere: "))
// const barbera = new PremiumWine("Barbera d'Asti", "Consorzio Barbera D'Asti",
//                          2020, 75, 12.5, 1000, nBotleToSell, "Barbera D'Asti", "piemonte", 'D.O.C.G')
// console.log(barbera.toString());


//aggiungere una propietà non esposta (protetta) a beverage chiamata _price
// _price è esposta in lettura tramite getter
// _price è esposta in scrittura tramite setter che controlla che il nuovo prezzo non sia negativo
// l'unica differenza sta nel PremiumWine che nel getter moltiplica il prezzo usando
// questa formula prezzoReale = prezzo + (prezzo / 10 * anniDiInvecchiamento)

const nBotleToSell = Number(prompt("inserire il numero di bottiglie a vendere: "))
const barbera = new PremiumWine("Barbera d'Asti", "Consorzio Barbera D'Asti",
                         2020, 75, 12.5, 1000, nBotleToSell, 80, "Barbera D'Asti", "piemonte", 'D.O.C.G');
console.log(barbera.toString());