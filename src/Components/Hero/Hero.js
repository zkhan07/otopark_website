import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CompanySlider from "../CompanySlider/CompanySlider";
import { useStyles } from "./css";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div className={classes.root} id="homePage">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.heroContainer}>
            <img
              className={classes.heroImg}
              src={require("../../assets/images/homeBgImg.svg")}
            />
          </div>
          <div
            className={classes.heroSlogan}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p>
              <b>
                India's first contactless <br />
                smart parking solution <br />
                powered by FASTag
              </b>
            </p>
            <Link smooth={true} to="#cards" style={{ textDecoration: "none" }}>
              <button className={classes.heroButton}>Explore More </button>
            </Link>
          </div>
          {/* <div id="trainMotion">
              <img
                id="train"
                src={require("../../assets/images/movingCarImg.svg")}
              />
            </div> */}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h4 align="right" className={classes.sliderText}>
            In association with
          </h4>
        </Grid>
        <Grid item item xs={12} sm={12} md={8} lg={8}>
          <CompanySlider />
        </Grid>
      </Grid>
    </div>
  );
}
