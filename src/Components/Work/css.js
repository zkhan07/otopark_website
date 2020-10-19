import { makeStyles, fade } from "@material-ui/core/styles";
import Image from "../../assets/images/workPageImg.svg";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "5%",
    marginRight: "5%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  workTitle: {
    color: "black",
    fontSize: "25px",
    textAlign: "center"
  },
  workButton: {
    width: "300px",
    textTransform: "none",
    backgroundColor: "#00BBDC",
    color: "white",
    // marginRight: "10px",
    margin: "10px",
    textAlign: "center",
    padding: "15px",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "3px 3px #00000034",
    "&:hover": {
      backgroundColor: "#00BBDC",
      color: "white"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      fontSize: "15px"
    }
  },
  unclickedworkButton: {
    width: "300px",
    textTransform: "none",
    backgroundColor: "#ffff",
    color: "#00BBDC",
    margin: "10px",
    textAlign: "center",
    padding: "15px",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "3px 3px #00000034",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      fontSize: "15px"
    }
  },
  workImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  img1: {
    width: "25px",
    height: "25px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
      padding: "0px"
    }
  },
  img2: {
    width: "30px",
    height: "30px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
      padding: "0px"
    }
  },
  mobileView: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      display: "block"
    }
  },
  cardContainer: {
    backgroundColor: "#00BBDC",
    color: "#fff",
    width: "98%",
    height: "300px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  title: {
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bold"
  },
  subTitle: {
    color: "#fff",
    marginTop: "-10px",
    fontSize: "15px"
  },
  bgImg: {
    marginTop: "50px",
    height: "1500px",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  desktopView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  title1: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold"
  },
  subTitle1: {
    color: "#fff",
    marginTop: "-10px",
    fontSize: "12px"
  },
  desktopCard1: {
    position: "relative",
    top: "10%",
    left: "75%",
    backgroundColor: "#00BBDC",
    color: "#fff",
    width: "250px",
    height: "250px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  desktopCard2: {
    position: "relative",
    top: "25%",
    left: "5%",
    backgroundColor: "#00BBDC",
    color: "#fff",
    width: "250px",
    height: "250px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  desktopCard3: {
    position: "relative",
    top: "53%",
    left: "55%",
    backgroundColor: "#00BBDC",
    color: "#fff",
    width: "250px",
    height: "250px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}));
