import React from "react";
import {ThemeProvider} from "@material-ui/core";
import Header from "../Header"
import Dashboard from "../Dashboard";

import baseTheme from "../../theme"

const MainApp = () => {  
  return(
    <ThemeProvider theme={baseTheme}>
      <Header />
      <Dashboard />
    </ThemeProvider>
  )
};

export default MainApp;
