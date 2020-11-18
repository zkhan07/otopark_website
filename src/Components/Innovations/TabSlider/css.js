import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // padding: "20px"
  },
  image: {
    width: "100%",
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-50px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      height: "300px"
    }
  },
  title: {
    marginLeft: "30px",
    marginTop: "50px",
    color: "black",
    fontWeight: "bold",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px"
    }
  },
  para: {
    marginLeft: "30px",
    marginTop: "-25px",
    color: "grey",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px"
    }
  },
  moreButton: {
    marginLeft: "30px",
    marginBottom: "30px",
    width: "200px",
    height: "40px",
    backgroundColor: "#00BBDC",
    color: "white",
    fontWeight: "bold",
    border: "1px solid #00BBDC",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #00BBDC",
      backgroundColor: "#fff",
      color: "#00BBDC"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px"
    }
  },
  removeBorder: {
    "&:focus": {
      outline: 0,
      outline: "none"
    }
  }
}));
