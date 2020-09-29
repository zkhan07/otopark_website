import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  workTitle: {
    color: "black",
    fontSize: "25px",
    textAlign: "center"
  },
  workButton: {
    backgroundColor: "#00BBDC",
    color: "white",
    marginRight: "10px",
    textAlign: "center"
  },
  workImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  }
}));
