import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { ToastContainer, Slide } from "react-toastify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "css/toastifyOverride.css";

import routes from "./Pages";
import Footer from "components/Footer";
import geo from "store/geoStore";
import baseTheme from "theme";

const MainApp = () => {
  const { getCurrentLocation } = geo;

  getCurrentLocation();

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ToastContainer autoClose={8000} transition={Slide} />
      <Router>
        <Switch>
          {routes.map(({ path, exact, component }, index) => (
            <Route
              path={path}
              key={path + "_" + index}
              exact={exact}
              component={component}
            />
          ))}

          <Redirect from="/currency_exchange" to="/" />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default MainApp;
