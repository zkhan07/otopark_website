import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  cardHeader: {
    color: "black",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold"
  },
  otherCardHeader:{
    color:'#ffff',
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold"
  }
  ,
  card1: {
    backgroundColor: "#00BBDC",
    display: "block",
    marginLeft: "135px",
    marginRight: "auto",
    marginTop: "-30px",
    width: "180px",
    height: "200px",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "60px",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "170px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card2: {
    backgroundColor: "#fff",
    display: "block",
    marginLeft: "auto",
    marginRight: "135px",
    width: "180px",
    height: "200px",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "60px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "170px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card3: {
    backgroundColor: "#fff",
    display: "block",
    marginLeft: "135px",
    marginRight: "auto",
    marginTop: "-30px",
    width: "180px",
    height: "200px",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "60px",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "170px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card4: {
    backgroundColor: "#fff",
    display: "block",
    marginLeft: "auto",
    marginRight: "135px",
    width: "180px",
    height: "200px",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "60px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "170px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px"
    }
  },
  subTitle: {
    color: "#00BBDC",
    fontWeight: "bold",
    fontSize: "15px",
   
  },
  title: {
    marginTop: "-10px",
    color: "black",
    fontWeight: "bold",
    fontSize: "25px"
  },
  para: {
    marginTop: "-25px",
    color: "grey",
    fontSize: "15px"
  },
  moreButton: {
    width: "200px",
    height: "40px",
    backgroundColor: "#00BBDC",
    color: "white",
    fontWeight: "bold",
    border: "1px solid #00BBDC",
    borderRadius: "5px",
    outerline: "0px"
  },
  cardImage: {
    width: "350px",
    height: "250px",
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "250px"
    }
  },
  centerCard:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  mainGrid:{
    marginTop: "40px",
    marginBottom: "40px" 
  }
}));
