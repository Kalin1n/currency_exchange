import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    // width: "100%",
    padding: theme.spacing(3),
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width: 500px)": {
      gridTemplateColumns: "auto",
      padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    },
  },
  blackHeader: {
    backgroundColor: "lightgrey",
  },
}));

export default useStyles;
