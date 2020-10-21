import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#00BBDC",
    color: "#fff"
  },
  gridContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "80px",
    marginBottom: "50px"
  },
  cardContainer: {
    marginLeft: "20px",
    marginRight: "20px",
    width: "90%",
    height: "260px",
    "&:hover": {
      color: "grey"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "280px",
      marginLeft: "0px",
      marginRight: "0px"
    }
  },
  removeBorder: {
    "&:focus": {
      outline: 0,
      outline: "none"
    }
  },
  title: {
    fontWeight: "bold",
    fontSize: "35px",
    marginLeft: "30px"
  },
  subTitle: {
    marginTop: "-30px",
    fontSize: "15px",
    marginLeft: "30px"
  },
  slideImage: {
    padding: "10px",
    width: "60%",
    height: "50px"
  },
  para: {
    padding: "10px",
    fontSize: "15px"
  },
  moreButton: {
    textTransform: "none",
    color: "#00BBDC",
    fontSize: "12px"
  }
}));
