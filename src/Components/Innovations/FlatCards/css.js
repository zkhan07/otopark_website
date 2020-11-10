import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-50px",
    marginBottom: "100px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginBottom: "20px",
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  mainContainer: {
    marginTop: "50px",
    backgroundColor: "#EDFAFD",
    borderRadius: "10px",
    boxShadow: "0px 5px 16px #00000029"
  },
  imageDiv: {
    margin: "20px",
    borderRadius: "20px",
    backgroundColor: "#fff"
  },
  leftImage: {
    padding: "70px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "60%"
    }
  },
  leftImage1: {
    borderRadius: "20px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  rightContainer: {
    marginLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px"
    }
  },
  title: {
    marginLeft: "20px",
    color: "#00BBDC",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px"
    }
  },
  para: {
    marginTop: "-5px",
    fontWeight: "500",
    color: "black"
  },
  desktopView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobileView: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
}));
