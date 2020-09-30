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
    marginTop: "50px",
    marginBottom: "50px"
  },
  cardContainer: {
    marginLeft: "30px",
    width: "300px",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
      width: "90%",
      height: "200px"
    }
  },
  removeBorder: {
    "&:focus": {
      outline: 0,
      outline: "none"
    }
  },
  title: {
    fontSize: "35px",
    marginLeft: "30px"
  },
  subTitle: {
    marginTop: "-30px",
    fontSize: "15px",
    marginLeft: "30px"
  },
  slideImage: {
    width: "60%",
    height: "50px"
  },
  para: {
    fontSize: "15px"
  },
  moreButton: {
    textTransform: "none",
    color: "#00BBDC",
    fontSize: "12px"
  }
}));
