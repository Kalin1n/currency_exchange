import React from "react";

import useStyles from "./styles";

import ThreeMonth from "../ThreeMonth";
import MainActions from "../MainActions";

const Header = () => {
  const classes = useStyles();

  let currentTime = new Date().getHours();

  const black = currentTime < 10 || currentTime > 19;

  return (
    <header className={black ? classes.blackHeader : classes.header}>
      <MainActions />
      <ThreeMonth />
    </header>
  );
};

export default Header;
