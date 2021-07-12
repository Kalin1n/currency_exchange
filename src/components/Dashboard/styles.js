import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  exchangeCard: {
    border: `1px solid ${theme.palette.primary.main}`,
    margin: "2em",
    padding: "1.5em",
  },
  currencys: {
    fontWeight: 600,
    display: "flex",
    justifyContent: "space-between",
  },
  rates: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
