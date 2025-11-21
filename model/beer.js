class Beer extends Beverage{
    constructor(name, producer, yob, quantity, alcohol, type, color, bottleNumber, bottleToSell, price) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, bottleToSell, price);
        this.type = type;
        this.color = color;
    }
    toString() {
        return super.toString() + "\n" +
            "tipo: " + this.type + "\n" +
            "colore: " + this.color + "\n";
    }
}