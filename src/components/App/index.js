import React from "react";
import {ThemeProvider, CssBaseline} from "@material-ui/core";
import Header from "../Header"
import Dashboard from "../Dashboard";

import baseTheme from "../../theme"

const MainApp = () => {  
  return(
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Header />
      <Dashboard />
    </ThemeProvider>
  )
};

export default MainApp;
