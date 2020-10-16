import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CompanySlider from "../CompanySlider/CompanySlider";
import { useStyles } from "./css";
// import "./Hero.css";

// moving car code
// var windowHeight = Math.max(
//   document.documentElement.clientHeight,
//   window.innerHeight || 0
// );

// window.addEventListener("scroll", function(event) {
//   var train = document.getElementById("trainMotion"),
//     offset = train.getBoundingClientRect().top - windowHeight;

//   if (offset > 0) {
//     train.classList.remove("choochoo");
//     return;
//   }

//   if (train.className.indexOf("choocho") === -1) {
//     train.classList.add("choochoo");
//   }
// });
// done

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
                <br /> <b className={classes.sloganMargin}>NEED IT,</b>
              </b>{" "}
              <b>EARN MONEY</b> <br />
              <b style={{ color: "white", marginLeft: "10px" }}>
                WHEN YOU DON'T USE IT"
              </b>
            </p>
            <button className={classes.heroButton}>Explore More </button>
            {/* <div id="trainMotion">
              <img
                id="train"
                src={require("../../assets/images/movingCarImg.svg")}
              />
            </div> */}
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
