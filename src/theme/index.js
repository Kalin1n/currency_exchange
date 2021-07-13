import { createMuiTheme } from "@material-ui/core";

const baseTheme = createMuiTheme({
  borderRadius: "1em",
  palette: {
    primary: {
      main: "#10451d",
      secondary: "#155d27",
      first: "#1a7431",
      second: "#92e6a7",
      white: "#fff",
    },
  },
});

export default baseTheme;
