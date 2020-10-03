import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  getAppContainer: {
    marginTop: "100px",
    marginBottom: "50px",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: "20px",
    backgroundColor: "#00BBDC",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginRight: "0%"
    }
  },
  title: {
    color: "white",
    fontSize: "40px",
    marginLeft: "15%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginLeft: "0%",
      fontSize: "25px"
    }
  },
  subTitle1: {
    color: "white",
    fontSize: "15px",
    marginTop: "-30px",
    marginLeft: "15%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-15px",
      textAlign: "center",
      marginLeft: "0%",
      fontSize: "12px"
    }
  },
  subTitle2: {
    color: "white",
    fontSize: "15px",
    marginTop: "-10px",
    marginLeft: "15%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginLeft: "0%",
      fontSize: "12px"
    }
  },
  firstImg: {
    marginLeft: "15%",
    width: "120px",
    height: "35px",
    backgroundColor: "#00BBDC",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px"
    }
  },
  button: {
    textTransform: "none",
    width: "100px",
    height: "30px",
    marginTop: "-40px",
    marginRight: "50px",
    backgroundColor: "#fff",
    color: "#00BBDC",
    border: "1px solid white",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#00BBDC",
      color: "#fff"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "120px",
      height: "35px",
      marginTop: "-10px",
      marginRight: "0px",
      marginBottom: "40px"
    }
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center"
    }
  }
}));
