import React from "react";

import { LinkedIn } from "../../theme/Icons";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p>Build by Kalinin Ivan</p>
      <div>
        <LinkedIn />
      </div>
    </footer>
  );
};

export default Footer;
