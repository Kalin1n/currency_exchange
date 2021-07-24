import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  info: {
    width: "100%",
    minHeight: 85,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "& svg": {
      fontSize: "1em",
      width: theme.spacing,
      fill: theme.palette.primary.teal,
      stroke: theme.palette.primary.purple,
      marginRight: theme.spacing(2),
    },
  },
  actionsWrapper: {
    // width: "100%",
    "@media(max-width: 500px)": {
      marginTop: theme.spacing(4),
      width: "100%",
    },
  },
  button: {
    width: "100px",
    margin: `0px ${theme.spacing(4)}`,
    background: theme.palette.primary.purple,
    color: "#fff",
  },
  input: {
    height: theme.spacing(5),
    width: "50%",
    padding: theme.spacing,
    marginRight: theme.spacing(4),
  },
}));

export default useStyles;
