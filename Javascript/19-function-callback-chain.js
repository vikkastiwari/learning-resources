
const calc = {
    total: 0,
    add (a) {
        this.total += a;
        return this;
    },
    multiply (a){
        this.total *= a;
        return this; 
    },
    subtract (a){
        this.total -= a;
        return this; 
    },
    divide (a){
        this.total /= a;
        return this; 
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(20);
console.log(result.total);