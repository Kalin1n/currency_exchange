import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkboxWrapper: {
    marginTop: 20,
    width: "100%",
  },
  infoRow: {
    padding: "10px 05px",
    background: theme.palette.primary.second,
    borderBottom: `1px solid ${theme.palette.primary.white}`,
  },
}));

export default useStyles;
