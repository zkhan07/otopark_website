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
    width: "80px",
    heigh: "80px",
    padding: "10px"
  },
  navbarButton: {
    textTransform: "none",
    borderRadius: "20px",
    outerline: "0px",
    "&:hover": {
      backgroundColor: "transparent"
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "20px"
    }
  },
  downloadButton: {
    width: "150px",
    marginLeft: "10px",
    marginRight: "30px",
    textTransform: "none",
    borderRadius: "20px",
    backgroundColor: "white",
    color: "#00BBDC",
    border: "2px solid #00BBDC",
    outerline: "0px",
    "&:hover": {
      backgroundColor: "#00BBDC",
      color: "#fff",
      border: "2px solid #fff",
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
  },
  link: {
    marginLeft: "10px",
    marginRight: "10px",
    textDecoration: "none",
    color: "white"
  }
}));
