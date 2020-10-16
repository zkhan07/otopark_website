import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  headingContainer: {
    marginLeft: "-8px",
    marginRight: "-8px",
    marginTop: "80px",
    height: "150px",
    backgroundColor: "#B1EFFF45",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px"
    }
  },
  heading: {
    marginLeft: "10%",
    fontSize: "40px"
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    height: "200px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      height: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      height: "150px"
    }
  },
  contentPara: {
    // letterSpacing: "0.1em",
    justifyContent: "center",
    fontSize: "15px"
  }
}));
