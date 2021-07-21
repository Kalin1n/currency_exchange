import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.secondary,
    minHeight: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: theme.spacing,
    flexShrink: 0,
  },
}));

export default useStyles;
