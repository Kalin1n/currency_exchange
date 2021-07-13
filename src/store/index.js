import {
  makeObservable,
  runInAction,
  onBecomeObserved,
  observable,
} from "mobx";

class MoneyStore {
  exchangeRate = null;
  threeMonthAmount = null;
  hryvnaAmount = 0;

  constructor() {
    makeObservable(this, {
      exchangeRate: observable,
      hryvnaAmount: observable,
      threeMonthAmount: observable,
    });
    onBecomeObserved(this, "exchangeRate", () => this.getCurrencys());
  }

  getCurrencys = async () => {
    let response = await (
      await fetch(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      )
    ).json();
    // We support Ukraine, it means no russians
    response = response.filter(({ ccy }) => ccy !== "RUR");
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

  countThreeMonth = () => {
    const threeMonthAmount = this.hryvnaAmount * 3;
    this.threeMonthAmount = threeMonthAmount;
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
