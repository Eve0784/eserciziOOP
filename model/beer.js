class Beer extends Beverage{
    constructor(name, producer, yob, quantity, alcohol, type, color, bottleNumber, price) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, price);
        this.type = type;
        this.color = color;
    }
    toString() {
        return `Birra
${super.toString()}
tipologia: ${this.type}
colore: ${this.color}` 
    }
}