import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    padding: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width: 500px)": {
      "& h2": {
        display: "none",
      },
      padding: "10px 20px",
      flexDirection: "column",
    },
  },
  info: {
    width: "100%",
    minHeight: 85,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  actionsWrapper: {
    width: "50%",
    "@media(max-width: 500px)": {
      width: "100%",
    },
  },
  button: {
    width: "100px",
    margin: "0px 20px",
    background: theme.palette.primary.secondary,
    color: "#fff",
  },
  input: {
    height: "30px",
    width: "50%",
    padding: "5px",
  },
}));

export default useStyles;
