import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    padding: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width: 500px)": {
      gridTemplateColumns: "auto",
      padding: "10px 20px",
    },
  },
  blackHeader: {
    width: "100%",
    backgroundColor: "lightgrey",
    padding: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width: 500px)": {
      gridTemplateColumns: "auto",
      padding: "10px 20px",
    },
  },
}));

export default useStyles;
