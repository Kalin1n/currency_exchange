import {
  makeObservable,
  runInAction,
  onBecomeObserved,
  observable,
  action,
} from "mobx";

class MoneyStore {
  exchangeRate = null;
  threeMonthAmount = null;
  threeMonthsCheck = false;
  hryvnaAmount = 0;

  constructor() {
    makeObservable(this, {
      exchangeRate: observable,
      hryvnaAmount: observable,
      threeMonthAmount: observable,
      threeMonthsCheck: observable,
      setCheck: action,
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

  setCheck = () => {
    console.log(this.threeMonthsCheck);
    this.threeMonthsCheck = !this.threeMonthsCheck;
    console.log(this.threeMonthsCheck);
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

  get threeMonthAfterTaxes() {
    if (this.threeMonthAmount) {
      const en = (this.threeMonthAmount / 100) * 5;
      const afterEsv = this.threeMonthAmount - 3960 - en;
      return afterEsv;
    } else {
      return null;
    }
  }
}

export default new MoneyStore();
