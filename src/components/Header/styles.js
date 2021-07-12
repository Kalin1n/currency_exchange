import {makeStyles} from "@material-ui/core"


const useStyles = makeStyles(theme =>({
 header:{
  width: '100%',
  padding: '30px',
  display:"flex",
  justifyContent: 'space-between',
  alignItems: 'center'
 },
 actionsWrapper:{
  width: '50%'
 },
 button:{
  width:"100px",
  margin:"0px 20px",
  background: theme.palette.primary.secondary,
  color: "#fff"
 },
 input:{
  height: '30px',
  width: "50%",
  padding: '5px'
 }
}));

export default useStyles;