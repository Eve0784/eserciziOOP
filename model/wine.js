class Wine extends Beverage{
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, bottleToSell, price, vite, location) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, bottleToSell, price);
        this.vite = vite;
        this.location = location;
    }
    toString() {
        return super.toString() + "\n" +
            "vite: " + this.vite + "\n" +
            "localita: " + this.location;
    }
}