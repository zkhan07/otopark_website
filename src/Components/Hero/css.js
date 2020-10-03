import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heroContainer: {
    marginLeft: "-8px",
    marginRight: "-8px",
    backgroundColor: "#00BBDC",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      height: "300px"
    }
  },
  heroImg: {
    marginLeft: "30%",
    width: "70%",
    marginTop: "205px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%",
      width: "70%",
      marginTop: "275px"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      width: "100%",
      marginTop: "200px"
    }
  },
  heroSlogan: {
    position: "absolute",
    top: "30%",
    left: "10%",
    fontSize: "30px",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "15%",
      left: "5%",
      fontSize: "25px"
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "15%",
      left: "15%",
      fontSize: "20px"
    }
  },
  heroButton: {
    backgroundColor: "#fff",
    color: "#00BBDC",
    marginLeft: "70px",
    width: "150px",
    height: "35px",
    border: "1px solid white",
    borderRadius: "3px",
    boxShadow: "1px 1px 1px 1px #f2f2f2",
    outline: "0px",
    fontWeight: "bold",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#00BBDC",
      color: "#fff",
      boxShadow: "1px 1px 1px 1px #00BBDC"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginLeft: "50px"
    }
  },
  sliderText: {
    color: "#A9B1C6",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  }
}));
