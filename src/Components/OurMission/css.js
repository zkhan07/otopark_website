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
    width: "100%",
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      height: "200px"
    }
  },
  contentPara: {
    // letterSpacing: "0.1em",
    justifyContent: "center",
    fontSize: "15px"
  }
}));
