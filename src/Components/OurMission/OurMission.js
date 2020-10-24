import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Footer from "../Footer/Footer";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div id="aboutUsTop" className={classes.mainRoot}>
      <div className={classes.headingContainer}>
        <br />
        <h1
          className={classes.heading}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          About Us
        </h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <br />
            <br />
            <p
              className={classes.contentPara}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <b>otopark</b> is a dynamic organisation that exists to meet the
              parking challenges of the mega cities of India, by providing smart
              sustainable innovative technological solutions. otopark focuses on
              building a collaborative economy between consumers, businesses and
              government entities for efficient allocation of community
              resources.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{ overflowX: "hidden" }}
          >
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className={classes.image}
              src={require("../../assets/images/aboutImg1.jpg")}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{ overflowX: "hidden" }}
          >
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              className={classes.image}
              src={require("../../assets/images/aboutImg2.jpg")}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
