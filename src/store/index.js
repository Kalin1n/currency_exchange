import {makeObservable, runInAction, onBecomeObserved, observable} from "mobx"

class MoneyStore{
  exchangeRate = null;

  constructor(){
    makeObservable(this, {
      exchangeRate: observable
    })
    onBecomeObserved(this, "exchangeRate", ()=> this.getCurrencys())
  }

  getCurrencys = async () => {
    const response = await (await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")).json();
    runInAction(()=>{
      this.exchangeRate = response
    })
  }

  transformToHryvna = (amount) => {
    return amount * this.exchangeRate[0].buy
  }
}

export default new MoneyStore();