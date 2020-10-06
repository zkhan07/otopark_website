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
    marginTop: "100px",
    height: "150px",
    backgroundColor: "#B1EFFF45"
  },
  headingPara: {
    marginTop: "-10px",
    color: "#696871",
    fontSize: "15px"
  },
  image: {
    width: "100%",
    height: "300px"
  },
  contentPara: {
    // letterSpacing: "0.1em",
    justifyContent: "center",
    fontSize: "15px"
  }
}));
