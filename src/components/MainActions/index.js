import React, { useState } from "react";
import { Observer } from "mobx-react-lite";
import { Button, Input, Typography } from "@material-ui/core";

import useStyles from "./styles";

import moneyStore from "../../store";

const MainActions = () => {
  const [amount, setAmount] = useState(undefined);
  const [inHryvna, setInHryvna] = useState();

  const classes = useStyles();

  const { transformToHryvna, afterTaxes } = moneyStore;

  const submit = (event) => {
    event.preventDefault();
    setInHryvna(transformToHryvna(amount));
  };
  return (
    <Observer>
      {() => (
        <>
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
            <Button
              variant="contained"
              onClick={submit}
              className={classes.button}
            >
              Count
            </Button>
          </div>
        </>
      )}
    </Observer>
  );
};

export default MainActions;
