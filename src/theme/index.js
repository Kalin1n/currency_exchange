import { createMuiTheme } from "@material-ui/core";

const baseTheme = createMuiTheme({
  borderRadius: "1em",
  palette: {
    primary: {
      main: "#50CB93",
      secondary: "#155d27",
      first: "#1a7431",
      second: "#92e6a7",
      white: "#fff",
      // New
      purple: "#54436B",
      teal: "#50CB93",
      light: "#71EFA3",
      mint: "#ACFFAD",
    },
  },
  dimens: {
    spacing: 5,
  },
});

export default baseTheme;
