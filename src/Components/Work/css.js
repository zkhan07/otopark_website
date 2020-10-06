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
      width: "200px",
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
      width: "200px",
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
    justifyContent: "center"
  },
  img1: {
    width: "25px",
    height: "25px",
    padding: "5px"
  },
  img2: {
    width: "30px",
    height: "30px",
    padding: "5px"
  }
}));
