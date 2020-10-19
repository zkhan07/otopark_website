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
        <AppBar
          position="fixed"
          style={{ boxShadow: "2px 2px 2px 2px #00BBDC" }}
        >
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
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button className={classes.navbarButton} color="inherit">
                  Home
                </Button>
              </Link>
              {/* <Button className={classes.navbarButton} color="inherit">
                Solutions
              </Button> */}
              {/* <Link className={classes.btn} to="/otopark/website/caseStudy">
                <Button className={classes.navbarButton} color="inherit">
                  Use Cases
                </Button>
              </Link> */}
              <Link
                to="/otopark/website/faq"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  FAQ
                </Button>
              </Link>
              <Link
                to="/otopark/website/aboutUs"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  About
                </Button>
              </Link>
              <Link
                to="/otopark/website/contactUs"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Contact
                </Button>
              </Link>
              {/* <Button className={classes.navbarButton} color="inherit">
                Login
              </Button> */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
