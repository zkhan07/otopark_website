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
  footerContainer: {
    marginBottom: "-20px",
    backgroundColor: "#283646",
    color: "#fff",
    marginTop: "50px"
  },
  logo: {
    width: "150px",
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  footerList: {
    fontSize: "13px"
  },
  footerAbout: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px"
  },
  footerDivider: {
    borderBottom: "1px solid white"
  },
  fabIcon: {
    border: "1px solid white",
    width: "20px",
    height: "20px",
    borderRadius: "50%"
  }
}));
