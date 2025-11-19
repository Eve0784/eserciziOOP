class Wine extends Beverage{
    constructor(name, producer, yob, quantity, alcohol, vite, location) {
        super(name, producer, yob, quantity, alcohol);
        this.vite = vite;
        this.location = location;
    }
    toString() {
        return super.toString() + "\n" +
            "vite: " + this.vite + "\n" +
            "localita: " + this.location;
    }
}