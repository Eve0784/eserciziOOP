class Beverage{
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, price) {
    this.name = name;
    this.producer = producer;
    this. yob = yob;
    this.quantity = quantity;
    this.alcohol = alcohol;
    this.bottleNumber = bottleNumber;
    this._price = 0;
    this.price = price;

    }
    get price(){
        return this._price;
    }
    set price(newPrice){
        if (newPrice  >= 0) {
            this._price = newPrice;
        }else {
            return "il nuovo prezzo non è valido";
        }
    }

    toString(){
        return "nome: " + this.name + "\n"+
        "produttore: " + this.producer + "\n"+
        "annata: " + this.yob + "\n"+
        "cl: " + this.quantity+ "\n"+
        "gradi: " + this.alcohol + "%"+ "\n" +
        "numero di bottiglie in stock: " + this.bottleNumber + "\n" +
        "prezzo: " + this.price + "€";
    }
    
    addBottles(nbr){
        if (nbr > 0) {
            this.bottleNumber += nbr;
        }
    }

    sellBottles(nbr){

        if (nbr <= this.bottleNumber) {
            //this.bottleNumber = this.bottleNumber - nbr;
            this.bottleNumber -= nbr;    
        } else {
            console.error('Bottiglie insufficienti, vendita annullata!!')
        }

    }
}

// stringhe interpolate 
    // toString(){
    //     return `nome: ${this.name}
    //productore: ${this.producer}
    //annata: ${this.yob}
    //cl: ${this.quantity}
    //gradi: ${this.alcohol}`
    // }

    //VEDERE QUELLO DEL PROF PERCHE BISOGNA SISTEMARE 