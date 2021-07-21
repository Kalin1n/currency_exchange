import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SallaryDashboard from "./Pages/Home";

import baseTheme from "theme";

const MainApp = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={SallaryDashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default MainApp;
