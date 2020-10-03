import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useStyles } from "./css";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.desktopView}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.navbarContainer}>
            <div>
              <Link to="/">
                <img
                  className={classes.navbarImage}
                  src={require("../../assets/images/logo.png")}
                />
              </Link>
            </div>
            <div>
              <Button className={classes.navbarButton} color="inherit">
                Home
              </Button>
              <Button className={classes.navbarButton} color="inherit">
                Solutions
              </Button>
              <Button className={classes.navbarButton} color="inherit">
                Use Cases
              </Button>
              <Button className={classes.navbarButton} color="inherit">
                FAQ
              </Button>
              <Button className={classes.navbarButton} color="inherit">
                About
              </Button>
              <Button className={classes.navbarButton} color="inherit">
                Contact
              </Button>
              <Button className={classes.navbarButton} color="inherit">
                Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
