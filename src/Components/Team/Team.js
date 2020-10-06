import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Footer from "../Footer/Footer";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Meet the team</h1>
      <p className={classes.headingPara}>We are the worlds best team</p>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
        {/* next column */}
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <img
            className={classes.profileImage}
            src={require("../../assets/images/profile.jpg")}
          />
          <h4 className={classes.profileTitle}>Neha Gupta</h4>
          <p className={classes.profileSubTitle}>Founder & CEO</p>
        </Grid>
      </Grid>
    </div>
  );
}
