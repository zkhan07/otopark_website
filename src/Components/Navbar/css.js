import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  navbarContainer: {
    marginLeft: "-8px",
    marginRight: "-8px",
    backgroundColor: "#00BBDC",
    display: "flex",
    justifyContent: "space-between"
  },
  navbarImage: {
    width: "100px",
    heigh: "80px",
    padding: "20px"
  },
  navbarButton: {
    marginRight: "30px",
    textTransform: "none",
    borderRadius: "20px",
    outerline: "0px",
    "&:hover": {
      backgroundColor: "white",
      color: "#00BBDC",
      borderRadius: "20px"
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "20px"
    }
  },
  desktopView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
