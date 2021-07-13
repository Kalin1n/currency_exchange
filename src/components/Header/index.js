import React, { useState } from "react";
import { observer } from "mobx-react-lite";
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
  const [amount, setAmount] = useState(undefined);
  const [inHryvna, setInHryvna] = useState();
  // const [checked, setChecked] = useState(false);

  const classes = useStyles();

  const {
    transformToHryvna,
    afterTaxes,
    countThreeMonth,
    threeMonthAmount,
    threeMonthsCheck,
    threeMonthAfterTaxes,
    setCheck,
  } = moneyStore;

  const handleCheck = () => {
    console.log("handle check");
    setCheck();
    // setChecked(!checked);
  };

  const submit = (event) => {
    event.preventDefault();
    setInHryvna(transformToHryvna(amount));
  };

  autorun((threeMonthsCheck) => {
    console.log("Autorun : ", threeMonthsCheck);
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
              checked={threeMonthsCheck}
              onChange={handleCheck}
              label="For 3 months?"
            />
          }
          label="For 3 months "
        />
      </div>
      {threeMonthsCheck && (
        <div>
          <Typography className={classes.infoRow}>
            Three month amount : <b>{threeMonthAmount}</b>
          </Typography>
          <Typography className={classes.infoRow}>
            Three month amount after taxes : <b>{threeMonthAfterTaxes}</b>
          </Typography>
        </div>
      )}
    </header>
  );
};

export default observer(Header);
