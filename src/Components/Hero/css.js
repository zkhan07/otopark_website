import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "60px",
    marginTop: "-60px"
  },
  heroContainer: {
    marginLeft: "-8px",
    marginRight: "-8px",
    backgroundColor: "#00BBDC",
    height: "500px",
    [theme.breakpoints.up("xl")]: {
      height: "700px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px"
    }
  },
  heroImg: {
    marginLeft: "30%",
    width: "70%",
    marginTop: "205px",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "30%",
      width: "70%",
      marginTop: "260px"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%",
      width: "70%",
      marginTop: "275px"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      width: "100%",
      marginTop: "212px"
    }
  },
  heroSlogan: {
    textAlign: "center",
    color: "white",
    position: "absolute",
    top: "20%",
    left: "7%",
    fontSize: "35px",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "22%",
      left: "7%",
      fontSize: "30px"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      top: "15%",
      left: "0",
      right: "0",
      fontSize: "20px"
    }
  },
  heroButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    color: "#00BBDC",
    width: "150px",
    height: "35px",
    border: "1px solid white",
    borderRadius: "3px",
    boxShadow: "1px 1px 1px 1px #f2f2f2",
    outline: "0px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#00BBDC",
      color: "#fff",
      boxShadow: "1px 1px 1px 1px #00BBDC"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      marginLeft: "100px"
    },
    [theme.breakpoints.down("sm")]: {
      top: "35%",
      left: "5%",
      fontSize: "12px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
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
