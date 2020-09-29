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
    width: "300px",
    height: "200px",
    outerline: "0px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
      width: "90%",
      height: "200px",
      outerline: "0px"
    }
  },
  title: {
    fontSize: "35px"
  },
  subTitle: {
    marginTop: "-30px",
    fontSize: "15px"
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
