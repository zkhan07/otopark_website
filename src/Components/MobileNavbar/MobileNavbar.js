import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.mobileView}>
      <div className={classes.root}>
        <AppBar
          style={{ boxShadow: "2px 2px 2px 2px #00BBDC" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="flex-end">
              <Link smooth={true} to="/#homePage">
                <img
                  justify="flex-end"
                  className={classes.mobileLogo}
                  src={require("../../assets/images/logo.png")}
                />
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          onEscapeKeyDown={handleDrawerClose}
          onBackdropClick={handleDrawerClose}
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{ color: "white" }} />
              ) : (
                <ChevronRightIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link
              smooth={true}
              to="/#homePage"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            {/* <ListItem button>
              <ListItemText primary="Solutions" />
            </ListItem> */}
            {/* <ListItem button>
              <ListItemText primary="Use Cases" />
            </ListItem> */}
            <Link
              to="/otopark/website/faq/#faqTop"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button>
                <ListItemText primary="FAQ" />
              </ListItem>
            </Link>
            <Link
              to="/otopark/website/aboutUs/#aboutUsTop"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link
              to="/otopark/website/contactUs/#contactUsTop"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <a
              className={classes.link}
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.otopark.Otopark.oto.park.my.car.vehicle.find.parking.lot.space.host.user&hl=en_US"
            >
              <Button className={classes.downloadButton} color="inherit">
                Download App
              </Button>
            </a>
            {/* <ListItem
              button
              className={classes.listBtn}
              onClick={handleDrawerClose}
            >
              <ListItemText className={classes.listBtn} primary="Login" />
            </ListItem> */}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {/* <div className={classes.drawerHeader} /> */}
        </main>
      </div>
    </div>
  );
}
