import {
  makeObservable,
  runInAction,
  onBecomeObserved,
  observable,
} from "mobx";
import { toast } from "react-toastify";

const messageMap = new Map([
  ["200", "Все мы были трейни"],
  ["400", "Пиши Марине"],
  ["600", "Нормально все делаешь"],
  ["800", "На ход ноги"],
  ["1000", "Ты чё там? Шутник?"],
]);

const storageKey = "@Sallary_calc_amount";

class MoneyStore {
  exchangeRate = null;
  threeMonthAmount = null;
  hryvnaAmount = 0;

  constructor() {
    makeObservable(this, {
      exchangeRate: observable,
      hryvnaAmount: observable,
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

  getHistory = async () => {
    let response = await (
      await fetch(
        "https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2019"
      )
    ).json();
    console.log("Response : ", response);
  };

  transformToHryvna = (amount) => {
    if (!amount) {
      return;
    }

    const prevAmount = localStorage.getItem(storageKey);

    if (prevAmount && prevAmount > amount) {
      toast.success(
        messageMap.get(amount) ? messageMap.get(amount) : "Мои поздравления"
      );
      localStorage.setItem(storageKey, amount);
    } else if (!prevAmount) {
      localStorage.setItem(storageKey, amount);
    }

    runInAction(() => {
      this.hryvnaAmount = amount * this.exchangeRate[0].buy;
    });

    return amount * this.exchangeRate[0].buy;
  };

  get countThreeMonth() {
    return this.hryvnaAmount * 3;
  }

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
    if (this.countThreeMonth) {
      const en = (this.countThreeMonth / 100) * 5;
      const afterEsv = this.countThreeMonth - 3960 - en;
      return afterEsv;
    } else {
      return null;
    }
  }
}

export default new MoneyStore();
