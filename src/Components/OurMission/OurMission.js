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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.headingContainer}>
            <h1>About us</h1>
            <p className={classes.headingPara}>
              Create custom landing pages with omega
            </p>
            <p className={classes.headingPara}>
              that converts more visitors that any
            </p>
          </div>

          <br />
          <br />
          <h2>Our mission is to make your Parking Smart Parking</h2>
          <p className={classes.contentPara}>
            otopark is a dynamic organisation that exists to meet the parking
            challenges of the mega cities of India, by providing smart
            sustainable innovative technological solutions. otopark focuses on
            building a collaborative economy between consumers, businesses and
            government entities for efficient allocation of community resources.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            className={classes.image}
            src={require("../../assets/images/earnMoneyImg.svg")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <img
            className={classes.image}
            src={require("../../assets/images/parkingTechnologiesImg.svg")}
          />
        </Grid>
      </Grid>
    </div>
  );
}
