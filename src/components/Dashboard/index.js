import React from "react"
import {observer} from "mobx-react-lite"

// import classes from "./index.module.css"
import useStyles from "./styles"

import moneyStore from "../../store";

const Dashboard = () => {
  const {exchangeRate} = moneyStore
   
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
     {
          exchangeRate &&  exchangeRate.map(({ccy, base_ccy, buy, sale})=>
            <div key={ccy+"_"+base_ccy} className={classes.exchangeCard}>
              <div className={classes.currencys}>
                <p>{ccy}</p>
                <p>{base_ccy}</p>
              </div>
              <div className={classes.rates}>
                <p> Продажа : {buy}</p>
                <p> Покупка : {sale}</p> 
              </div>    
            </div>)
        }
      </div>
  )
};

export default observer(Dashboard);