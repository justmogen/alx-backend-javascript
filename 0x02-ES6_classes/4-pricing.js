import Currency from './3-currency';

class Pricing {
  constructor(amount) {
    this._amount = amount;
    this._currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return new Pricing(amount * conversionRate, this._currency);
  }
}

export default Pricing;
