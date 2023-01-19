class Calculator {
  constructor() {
    this.total = 0;
  }
  add(num) {
    this.total += num;
    return this;
  }
  subtract(num) {
    this.total -= num;
    return this;
  }
  multiply(num) {
    this.total *= num;
    return this;
  }
  divide(num) {
    this.total /= num;
    return this;
  }
  value() {
    return this.total;
  }
}

const calc = new Calculator();
console.log(calc.add(20).subtract(10).multiply(2).divide(2).value());
