import {
  makeObservable,
  runInAction,
  onBecomeObserved,
  observable,
} from "mobx";

class MoneyStore {
  exchangeRate = null;
  hryvnaAmount = 0;

  constructor() {
    makeObservable(this, {
      exchangeRate: observable,
      hryvnaAmount: observable,
    });
    onBecomeObserved(this, "exchangeRate", () => this.getCurrencys());
  }

  getCurrencys = async () => {
    const response = await (
      await fetch(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      )
    ).json();
    runInAction(() => {
      this.exchangeRate = response;
    });
  };

  transformToHryvna = (amount) => {
    runInAction(() => {
      this.hryvnaAmount = amount * this.exchangeRate[0].buy;
    });
    return amount * this.exchangeRate[0].buy;
  };

  get afterTaxes() {
    if (this.hryvnaAmount) {
      const en = (this.hryvnaAmount / 100) * 5;
      const afterEsv = this.hryvnaAmount - 1320 - en;
      return afterEsv;
    } else {
      return null;
    }
  }
}

export default new MoneyStore();
