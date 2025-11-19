class Beverage{
    constructor(name, producer, yob, quantity, alcohol) {
    this.name = name;
    this.producer = producer;
    this. yob = yob;
    this.quantity = quantity;
    this.alcohol = alcohol;
    }
    toString(){
        return "nome: " + this.name + "\n"+
        "produttore: " + this.producer + "\n"+
        "anno di imbottigliamento: " + this.yob + "\n"+
        "quantita: " + this.quantity+ "cl\n"+
        "tasso alcool: " + this.alcohol + "%";
    }
}