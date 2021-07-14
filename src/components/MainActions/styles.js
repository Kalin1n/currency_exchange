import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
      marginTop: 20,
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
