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
  footerContainer: {
    marginBottom: "-20px",
    backgroundColor: "#283646",
    color: "#fff",
    marginTop: "50px",
    padding: "10px"
  },
  logo: {
    width: "150px",
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  footerList: {
    fontSize: "13px"
  },
  footerDivider: {
    borderBottom: "5px solid white"
  },
  fabIcon: {
    border: "1px solid white",
    width: "20px",
    height: "20px",
    borderRadius: "50%"
  },
  bottomDiv: {
    padding: "10px",
    width: "100%",
    borderTop: "1px solid #71777D"
  },
  header: {
    color: "#A4A4A4"
  },
  icon: {
    margin: "5px"
  },
  bottomTextLeft: {
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      float: "left",
      padding: "5px",
      marginLeft: "-10px"
    }
  },
  bottomText: {
    fontSize: "14px",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      float: "left",
      padding: "5px",
      marginLeft: "-10px"
    }
  }
}));
