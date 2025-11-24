console.log("Esercizi OOP");


//creare una classe Beverage con le seguenti proprietà:
//name, producer, yob, quantity, alcohol

//creare una classe Beer che estende beverage con le seguenti proprietà:
//type, color

const moretti = new Beer('moretti ipa', 'moretti s.p.a.', 2024, 66, 4,'ipa', 'blonde',  100, 5,);

//creare una classe Wine che estende beverage con le seguenti proprietà:
//vite, location

const dolcetto = new Wine('dolcetto bella vita', 'cantine bella vita', 2020, 75, 11, 200, 3,
                        'dolcetto', 'alba');

//creare una classe PremiumWine che estende wine con le seguenti proprietà:
//certification

const barolo = new PremiumWine('brunate barolo', 'Francesco Borgogno', 2021, 75, 14, 1000, 5, 
                        'nebbiolo da barolo', 'piemonte', 'D.O.C.G');

//creare i toString di tutte le classi

console.log(moretti.toString());
console.log(dolcetto.toString());
console.log(barolo.toString());



// aggiungere una proprietà chiamata bottleNumber a beverage e un metodo
// chiamato sellBottles che prende come input le bottiglie da vendere e 
// se ci sono abbastanza bottiglie le rimuove dal numero totale, altrimenti
// non fa nulla e logga l'errore
//const nBotleToSell = Number(prompt("inserire il numero di bottiglie a vendere: "))
const barbera = new PremiumWine("Barbera d'Asti", "Consorzio Barbera D'Asti",
                          2020, 75, 12.5, 1000, 18, "Barbera D'Asti", "Piemonte", 'D.O.C.G')
console.log(barbera.toString());


//aggiungere una propietà non esposta (protetta) a beverage chiamata _price
// _price è esposta in lettura tramite getter
// _price è esposta in scrittura tramite setter che controlla che il nuovo prezzo non sia negativo
// l'unica differenza sta nel PremiumWine che nel getter moltiplica il prezzo usando
// questa formula prezzoReale = prezzo + (prezzo / 10 * anniDiInvecchiamento)

//const nBotleToSell = Number(prompt("inserire il numero di bottiglie a vendere: "))
// const barbera = new PremiumWine("Barbera d'Asti", "Consorzio Barbera D'Asti",
//                          2020, 75, 12.5, 1000, nBotleToSell, 80, "Barbera D'Asti", "piemonte", 'D.O.C.G');
// console.log(barbera.toString());

//------------------------------DOCUMENT OBJECT MODEL-----------------------------------------//
console.log(document);
const h1Title = document.getElementById('main-title');
console.log(h1Title);

h1Title.innerText = "Enoteca Bartoletti S.P.A."
const nameSpan = document.getElementById('card-name'); nameSpan.innerText = barbera.name;
const producerSpan = document.getElementById('card-producer'); producerSpan.innerText = barbera.producer;
const yobSpan = document.getElementById('card-yob'); yobSpan.innerText = barbera.yob;
const quantitySpan = document.getElementById('card-quantity'); quantitySpan.innerText = barbera.quantity;
const alcoholSpan = document.getElementById('card-alcohol'); alcoholSpan.innerText = barbera.alcohol + "%";
const bottleNumberSpan = document.getElementById('card-bottleNumber'); bottleNumberSpan.innerText = barbera.bottleNumber;
const priceSpan = document.getElementById('card-price'); priceSpan.innerText = barbera.price + "€";
const viteSpan = document.getElementById('card-vite'); viteSpan.innerText = barbera.vite;
const locationSpan = document.getElementById('card-location'); locationSpan.innerText = barbera.location;
const certificationSpan = document.getElementById('card-certification'); certificationSpan.innerText = barbera.certification;


//------------------------altro modo piu veloce-------------------//
//document.getElementById('card-name').innerText = barbera.name;
//document.getElementById('card-bottleNumber').innerText = barbera.bottleNumber;

//---------------------Creare  una nuova card per mostrare gli altri vini ----------------------//
const champagne = new PremiumWine("Champagne Brut", "Charles Vercy", 2020, 75, 12, 200, 19, "Chardonnay", "Francia", "D.O.C.G");
console.log(champagne.toString());
//---------------Creazione della nuova card----------------------//
const newCard = document.createElement('div');
newCard.className = 'card';
const main = document.getElementById('main-content');
main.appendChild(newCard);
//---------------- Aggiungiamo la imagine ------------------------//
const cardImage = document.createElement('img');
cardImage.src = 'assets/wineglass.svg';
cardImage.height = '90';
newCard.appendChild (cardImage);
//---------------- Aggiungiamo la il div dove va il nome ------------------------//
const nameContainer = document.createElement('div');
newCard.appendChild(nameContainer);

const nameKey = document.createElement('strong');
nameKey.innerText = 'Nome: ';
nameContainer.appendChild(nameKey);

const nameValue = document.createElement('span');
nameValue.innerText = champagne.name;
nameContainer.appendChild(nameValue);

//---------------- Aggiungiamo la il div dove va il produttore ------------------------//
const producerContainer = document.createElement('div');
newCard.appendChild(producerContainer);

const producerKey = document.createElement('strong');
producerKey.innerText = 'Produttore: ';
producerContainer.appendChild(producerKey);

const producerValue = document.createElement('span');
producerValue.innerText = champagne.producer;
producerContainer.appendChild(producerValue);

//---------------- Aggiungiamo la il div dove va L'anno ------------------------//
const yobContainer = document.createElement('div');
newCard.appendChild(yobContainer);

const yobKey = document.createElement('strong');
yobKey.innerText = 'Annata: ';
yobContainer.appendChild(yobKey);

const yobValue = document.createElement('span');
yobValue.innerText = champagne.yob;
yobContainer.appendChild(yobValue);

//---------------- Aggiungiamo la il div dove va la quantita------------------------//
const quantityContainer = document.createElement('div');
newCard.appendChild(quantityContainer);

const quantityKey = document.createElement('strong');
quantityKey.innerText = 'cl: ';
quantityContainer.appendChild(quantityKey);

const quantityValue = document.createElement('span');
quantityValue.innerText = champagne.quantity;
quantityContainer.appendChild(quantityValue);

//---------------- Aggiungiamo la il div dove vanno i gradi di alcohol-----------------------//
const alcoholContainer = document.createElement('div');
newCard.appendChild(alcoholContainer);

const alcoholKey = document.createElement('strong');
alcoholKey.innerText = 'Gradi: ';
alcoholContainer.appendChild(alcoholKey);

const alcoholValue = document.createElement('span');
alcoholValue.innerText = champagne.alcohol  + "%";
alcoholContainer.appendChild(alcoholValue);

//---------------- Aggiungiamo la il div dove va la quantita di bottiglie------------------------//
const bottleNumberContainer = document.createElement('div');
newCard.appendChild(bottleNumberContainer);

const bottleNumberKey = document.createElement('strong');
bottleNumberKey.innerText = 'N. bottiglie in stock: ';
bottleNumberContainer.appendChild(bottleNumberKey);

const bottleNumberValue = document.createElement('span');
bottleNumberValue.innerText = champagne.bottleNumber;
bottleNumberContainer.appendChild(bottleNumberValue);


//---------------- Aggiungiamo la il div dove va il prezzo------------------------//
const priceContainer = document.createElement('div');
newCard.appendChild(priceContainer);

const priceKey = document.createElement('strong');
priceKey.innerText = 'Prezzo: ';
priceContainer.appendChild(priceKey);

const priceValue = document.createElement('span');
priceValue.innerText = champagne.price + "€";
priceContainer.appendChild(priceValue);

//---------------- Aggiungiamo la il div dove va il vitigno-----------------------//
const viteContainer = document.createElement('div');
newCard.appendChild(viteContainer);

const viteKey = document.createElement('strong');
viteKey.innerText = 'Vitigno: ';
viteContainer.appendChild(viteKey);

const viteValue = document.createElement('span');
viteValue.innerText = champagne.vite;
viteContainer.appendChild(viteValue);

//---------------- Aggiungiamo la il div dove va la localita------------------------//
const locationContainer = document.createElement('div');
newCard.appendChild(locationContainer);

const locationKey = document.createElement('strong');
locationKey.innerText = 'Località: ';
locationContainer.appendChild(locationKey);

const locationValue = document.createElement('span');
locationValue.innerText = champagne.location;
locationContainer.appendChild(locationValue);

//---------------- Aggiungiamo la il div dove va la certificazione-----------------------//
const certificationContainer = document.createElement('div');
newCard.appendChild(certificationContainer);

const certificationKey = document.createElement('strong');
certificationKey.innerText = 'Certificazione: ';
certificationContainer.appendChild(certificationKey);

const certificationValue = document.createElement('span');
certificationValue.innerText = champagne.certification;
certificationContainer.appendChild(certificationValue);