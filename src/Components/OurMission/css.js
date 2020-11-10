import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  mainRoot: {
    paddingTop: "50px",
    marginTop: "-50px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px"
    }
  },
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
    marginLeft: "11%",
    fontSize: "40px"
  },
  image: {
    marginTop: "60px",
    display: "block",
    marginLeft: "100px",
    marginRight: "auto",
    width: "90%",
    height: "65%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      marginLeft: "0px",
      width: "100%",
      height: "200px"
    }
  },
  contentPara: {
    justifyContent: "center",
    fontSize: "16px"
  }
}));
