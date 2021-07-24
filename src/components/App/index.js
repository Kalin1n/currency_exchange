import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "css/toastifyOverride.css";

import routes from "./Pages";

import baseTheme from "theme";

const MainApp = () => {
  console.log(
    navigator.geolocation.getCurrentPosition((data) =>
      console.log("Data : ", data)
    )
  );

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ToastContainer autoClose={10000} transition={Slide} />
      <Router>
        <Switch>
          {routes.map(({ path, exact, component }, index) => (
            <Route
              key={path + "_" + index}
              exact={exact}
              component={component}
            />
          ))}

          {/* <Route path="/" exact component={SallaryDashboard} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default MainApp;
