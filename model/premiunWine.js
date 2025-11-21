class PremiumWine extends Wine{
     constructor(name, producer, yob, quantity, alcohol,  bottleNumber, bottleToSell, price, vite, location, certification) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, bottleToSell, price, vite, location);
        this.certification = certification;
    }

    get price(){
        const yearsOfAge = new Date().getFullYear() - this.yob;
        const basePrice = this._price;
        return basePrice +(basePrice / 10) * yearsOfAge;
    }
    toString() {
        return super.toString() + "\n" +
            "certificazione: " + this.certification  + "\n";
    }
}