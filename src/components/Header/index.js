import React from "react";
import classNames from "classnames";
import useStyles from "./styles";

import ThreeMonth from "../ThreeMonth";
import MainActions from "../MainActions";

const Header = () => {
  const classes = useStyles();

  let currentTime = new Date().getHours();

  const black = currentTime < 10 || currentTime > 18;

  return (
    <header
      className={classNames(classes.header, black && classes.blackHeader)}
    >
      <MainActions />
      <ThreeMonth />
    </header>
  );
};

export default Header;
