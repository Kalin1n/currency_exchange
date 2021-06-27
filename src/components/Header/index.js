import React, {useState} from "react";

import classes from "./index.module.css"
import moneyStore from "../../store";

const Header = () => {
  const [amount, setAmount] = useState(400);
  const [inHryvna, setInHryvna] = useState();
  const {transformToHryvna} = moneyStore;

  const submit = (event) => {
    event.preventDefault();
    setInHryvna(transformToHryvna(amount))
  }

  return (
    <header className={classes.header}>
      <div>
        <h1>Sallary app</h1>
        <p>Currencys list</p>
        {
          inHryvna && inHryvna
        }
      </div>
      <div className={classes.actionsWrapper}>
        <input  type="number" placeholder="Sallary" className={classes.input} value={amount} onChange={(event)=>setAmount(event.target.value)} />
        <button onClick={submit} className={classes.button}>Count</button>
      </div>
    </header>
  )
};

export default Header;