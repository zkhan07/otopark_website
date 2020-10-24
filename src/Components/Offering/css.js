import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "100px",
    marginBottom: "100px"
  },
  mainTitle: {
    marginBottom: "50px",
    marginLeft: "20px",
    color: "#00BBDC",
    fontSize: "40px"
  },
  imgIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70px",
    height: "70px"
  },
  title: {
    textAlign: "center",
    color: "#1D1D1D"
  },
  mobileView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
