import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    background: theme.palette.primary.purple,
    minHeight: 50,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  text: {
    margin: theme.spacing,
    color: theme.palette.primary.white,
    marginBottom: theme.spacing,
  },
  links: {
    width: "40%",
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export default useStyles;
