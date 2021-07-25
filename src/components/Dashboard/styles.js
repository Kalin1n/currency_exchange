import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    padding: `${theme.spacing(2)}px`,
    gridTemplateColumns: "repeat(2,  1fr)",
    background: theme.palette.primary.second,
    "@media(max-width: 500px)": {
      gridTemplateColumns: "auto",
    },
  },
  exchangeCard: {
    border: `${theme.spacing(1)}px solid ${theme.palette.primary.main}`,
    borderRadius: theme.borderRadius,
    margin: theme.spacing(1),
    padding: "1.5em",
    boxShadow: `5px 5px 2px ${theme.palette.primary.purple}`,
    "&:hover": {
      boxShadow: `5px 5px 2px ${theme.palette.primary.white}`,
    },
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
