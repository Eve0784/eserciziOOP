class Beverage{
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, bottleToSell, price) {
    this.name = name;
    this.producer = producer;
    this. yob = yob;
    this.quantity = quantity;
    this.alcohol = alcohol;
    this.bottleNumber = bottleNumber;
    this.bottleToSell = bottleToSell;
    this._price = price;
    }
    get price(){
        return this._price;
    }
    set price(newPrice){
        if (newPrice  > 0) {
            this._price = newPrice;
        }else {
            return "il nuovo prezzo non è valido";
        }
    }
    sellBottles(){
        if (this.bottleNumber >= this.bottleToSell) {
            this.bottleNumber -= this.bottleToSell;
            return this.bottleNumber;
        } 
        else{
            return "non ci sono abbastanza bottiglie in stock"
        }
    }
    toString(){
        return "nome: " + this.name + "\n"+
        "produttore: " + this.producer + "\n"+
        "anno di imbottigliamento: " + this.yob + "\n"+
        "quantita: " + this.quantity+ "cl\n"+
        "tasso alcool: " + this.alcohol + "%"+ "\n" +
        "numero di bottiglie in stock: " + this.sellBottles() + "\n" +
        "prezzo: " + this.price + "€";
    }
}