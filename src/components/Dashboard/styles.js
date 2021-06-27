import {makeStyles} from "@material-ui/core"


const useStyles = makeStyles(theme =>({
  wrapper:{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  exchangeCard:{
    border: `1px solid ${theme.palette.primary.main}`,
    margin: "10px 30px",
    padding: "20px",
  },
  currencys:{
    fontWeight: '500',
    display: 'flex',
    justifyContentt:"space-between"
  },
  rates:{
    display: "flex",
    justifyContentt: "space-between"
  }
}));

export default useStyles;