import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "100px",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "0px",
      marginBottom: "0px"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  mainTitle: {
    color: "#00BBDC",
    fontSize: "35px"
  },
  cardContainer: {
    width: "98%",
    height: "400px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold"
  },
  subTitle: {
    color: "black",
    marginTop: "-10px",
    fontSize: "15px"
  },
  moreButton: {
    textTransform: "none",
    fontSize: "15px",
    color: "#00BBDC"
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between"
  }
}));