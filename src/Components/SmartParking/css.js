import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "100px",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "50px",
      marginBottom: "50px"
    }
  },
  header: {
    display: "flex",
    color: "#00BBDC",
    [theme.breakpoints.down("sm")]: {
      padding: "0px"
    }
  },
  buttons: {
    width: "80%",
    marginTop: "15px",
    color: "white",
    padding: "10px",
    backgroundColor: "#00BBDC",
    "&:hover": {
      color: "#ffff",
      backgroundColor: "#00BBDC"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      width: "90%"
    }
  },
  unClickButtons: {
    width: "80%",
    marginTop: "15px",
    color: "#00BBDC",
    padding: "10px",
    backgroundColor: "#ffff",
    "&:hover": {
      color: "#ffff",
      backgroundColor: "#00BBDC"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      width: "90%"
    }
  },
  oicssgrid: {
    padding: "40px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px"
    }
  },
  oicssheader: {
    fontWeight: "500",
    fontSize: "20px",
    color: "#696871"
  },
  underContent: {
    paddingTop: "20px",
    lineHeight: "1.7em",
    color: "#19191B"
  },
  videoDiv: {
    boxShadow: "none",
    width: "100%"
  }
}));
