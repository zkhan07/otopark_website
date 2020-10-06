import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  root1: {
    flexGrow: 1,
    marginTop: "100px",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "5%",
      marginRight: "5%"
    },
    "& label.Mui-focused": {
      color: "#00BBDC"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "lightgray"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lighgray"
      },
      "&:hover fieldset": {
        borderColor: "lightgray"
      },
      "&.Mui-focused fieldset": {
        borderColor: "lightgray"
      }
    }
  },
  title: {
    color: "black",
    fontSize: "40px"
  },
  label: {
    color: "black",
    fontWeight: "bold"
  },
  inputField: {
    width: "400px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  submitButton: {
    textTransform: "none",
    width: "200px",
    color: "white",
    backgroundColor: "#00BBDC",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px"
    }
  },
  map: {
    marginTop: "80px",
    width: "400px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      width: "200px"
    }
  },
  mapframe: {
    display: "flex",
    width: "400px",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "230px"
    }
  }
  // .mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
}));
