import React, { useState } from "react";
import { autorun } from "mobx";
import {
  Button,
  Input,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import useStyles from "./styles";

import moneyStore from "../../store";

const Header = () => {
  const [amount, setAmount] = useState();
  const [inHryvna, setInHryvna] = useState();
  const [checked, setChecked] = useState(false);

  const classes = useStyles();

  const { transformToHryvna, afterTaxes, countThreeMonth, threeMonthAmount } =
    moneyStore;

  const handleCheck = () => {
    setChecked(!checked);
  };

  const submit = (event) => {
    event.preventDefault();
    setInHryvna(transformToHryvna(amount));
  };

  autorun((checked) => {
    countThreeMonth();
  });

  return (
    <header className={classes.header}>
      <div className={classes.info}>
        <Typography variant="h5">Without taxes {inHryvna}</Typography>
        <Typography variant="h5">After taxes {afterTaxes}</Typography>
      </div>
      <div className={classes.actionsWrapper}>
        <Input
          type="number"
          placeholder="Sallary"
          className={classes.input}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <Button variant="contained" onClick={submit} className={classes.button}>
          Count
        </Button>
      </div>
      <div className={classes.checkboxWrapper}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={checked}
              onChange={handleCheck}
              label="For 3 months?"
            />
          }
          label="For 3 months "
        />

        {checked && threeMonthAmount}
      </div>
    </header>
  );
};

export default Header;
