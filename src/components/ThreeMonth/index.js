import React, { useState } from "react";
import { Observer } from "mobx-react-lite";
import { Typography, Checkbox, FormControlLabel } from "@material-ui/core";

import moneyStore from "../../store";

import useStyles from "./styles";

const ThreeMonth = () => {
  const [checked, setChecked] = useState(false);

  const { countThreeMonth, threeMonthAfterTaxes } = moneyStore;

  const classes = useStyles();

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div className={classes.checkboxWrapper}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleCheck}
              label="For 3 months?"
            />
          }
          label="For 3 months "
        />
      </div>
      {checked && (
        <Observer>
          {() => (
            <div>
              <Typography className={classes.infoRow}>
                Three month amount : <b>{countThreeMonth}</b>
              </Typography>
              <Typography className={classes.infoRow}>
                Three month amount after taxes : <b>{threeMonthAfterTaxes}</b>
              </Typography>
            </div>
          )}
        </Observer>
      )}
    </div>
  );
};

export default ThreeMonth;
