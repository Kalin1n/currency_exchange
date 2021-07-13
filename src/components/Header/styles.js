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
