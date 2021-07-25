import { Typography } from "@material-ui/core";
import React from "react";

import { LinkedIn } from "../../theme/Icons";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography className={classes.text}>
        Build by Kalinin Ivan {new Date().getFullYear()}
      </Typography>
      <div className={classes.links}>
        <LinkedIn />
        {/* Add socials */}
        <LinkedIn />
        <LinkedIn />
      </div>
    </footer>
  );
};

export default Footer;
