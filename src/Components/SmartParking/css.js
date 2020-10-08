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
      marginRight: "5%"
    }
  },
  header: {
    display: "flex",
    // padding: "20px",
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
      width: "100%"
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
      width: "100%"
    }
  },
  number: {
    borderRadius: "20px",
    padding: "8px",
    margin: "5px",
    color: "#ffff",
    fontSize: "10px",
    backgroundColor: "#00BBDC"
  },
  oicssgrid: {
    padding: "40px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px"
    }
  },
  oicssheader: {
    color: "#696871"
  },
  underContent: {
    paddingTop: "20px",
    lineHeight: "1.7em",
    color: "#19191B"
  },
  spantext: {}
}));
