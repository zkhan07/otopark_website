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
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  videoContainer: {
    // marginLeft: "10%",
    // marginRight: "10%"
  },
  videoPlayer: {
    height: "100px"
  },
  frame: {
    [theme.breakpoints.down("md")]: {
      height: "230px",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "230px"
    }
  }
}));
