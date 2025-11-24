class Wine extends Beverage{
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, price, vite, location) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, price);
        this.vite = vite;
        this.location = location;
    }
    toString() {
        return `Vino
${super.toString()}
vitigno: ${this.vite}
localita: ${this.location}`
    }
}