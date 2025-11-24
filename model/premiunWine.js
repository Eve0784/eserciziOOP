class PremiumWine extends Wine{
     constructor(name, producer, yob, quantity, alcohol,  bottleNumber, price, vite, location, certification) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, price, vite, location);
        this.certification = certification;
    }

    get price(){
        const yearsOfAge = new Date().getFullYear() - this.yob;
        const basePrice = this._price;
        return basePrice +(basePrice / 10) * yearsOfAge;
    }
        set price(newPrice){
        if (newPrice  >= 0) {
            this._price = newPrice;
        }else {
            return "il nuovo prezzo non è valido";
        }
    }
    toString(){
        return `${super.toString()}
certificazione: ${this.certification}`
    }
}