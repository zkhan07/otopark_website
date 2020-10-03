import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CompanySlider from "../CompanySlider/CompanySlider";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.heroContainer}>
            <img
              className={classes.heroImg}
              src={require("../../assets/images/heroImg.svg")}
            />
          </div>
          <div className={classes.heroSlogan}>
            <p>
              <b>"FIND PARKING</b>{" "}
              <b style={{ color: "white" }}>
                WHEN YOU
                <br /> <b style={{ marginLeft: "30px" }}>NEED IT,</b>
              </b>{" "}
              <b>EARN MONEY</b> <br />
              <b style={{ color: "white", marginLeft: "10px" }}>
                WHEN YOU DON'T USE IT"
              </b>
            </p>
            <button className={classes.heroButton}>Explore More </button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h4 align="right" className={classes.sliderText}>
            Proudly Recognized and Supported by
          </h4>
        </Grid>
        <Grid item item xs={12} sm={12} md={8} lg={8}>
          <CompanySlider />
        </Grid>
      </Grid>
    </div>
  );
}
