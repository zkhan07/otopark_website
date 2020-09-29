import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} className={classes.footerContainer}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                className={classes.logo}
                src={require("../../assets/images/blueLogo.png")}
              />
              <p className={classes.footerList} align="center">
                Intoducing india's first contactless parking solution
              </p>
              <p align="center">
                <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                otopark@gmail.com
              </p>
              <p align="center">
                {" "}
                <i class="fa fa-phone" aria-hidden="true"></i> +91 88 55226644
              </p>
              <div align="center">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <h4>Home</h4>
              <div className={classes.footerList}>
                <p>Introduction</p>
                <p>Problem Statement</p>
                <p>Find Parking</p>
                <p>Booking Parking</p>
                <p>otomedia</p>
                <p>Video Sector</p>
                <p>Social Media</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <h4>Our Innovation</h4>
              <div className={classes.footerList}>
                <p>Parking Technology</p>
                <p>OICCS Features</p>
                <p>Smart Parking Technology</p>
                <p> Parking Services</p>
                <p>FASTag Parking</p>
                <p>Our solutions</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <h4>About Us</h4>
              <div className={classes.footerList}>
                <p>Team</p>
                <p>Vision</p>
                <p>Clientele</p>
                <p>Our Offerings</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <h4>Case Studies</h4>
              <div className={classes.footerList}>
                <p>Team</p>
                <p>Vision</p>
                <p>Clientele</p>
                <p>Our Offerings</p>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.footerDivider}></div>
              <br />
              <div className={classes.footerAbout}>
                <div>
                  Term & Conditions | Privacy Policy | Accessibility | Legal
                </div>
                <div>Design with@otopark.in 2020.All rights reserved</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
