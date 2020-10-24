import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";
import { Divider } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";

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
                Parking made smart
              </p>
              <p align="center">
                <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                info@otopark.in
              </p>
              <p align="center">
                {" "}
                <i class="fa fa-phone" aria-hidden="true"></i> +91 88 55226644
              </p>
              <div align="center" className={classes.icon}>
                <a
                  target="_blank"
                  style={{ color: "white" }}
                  href="https://www.facebook.com/myotopark/"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px"
                    }}
                    class="fa fa-facebook"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  style={{ color: "white" }}
                  href="https://twitter.com/myotopark"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px",
                      margin: "5px"
                    }}
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/company/myotopark/"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px"
                    }}
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  style={{ color: "white" }}
                  href="https://www.instagram.com/myotopark/"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px",
                      margin: "5px"
                    }}
                    class="fa fa-instagram"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg>
              <h4 className={classes.header}>Home</h4>
              <div className={classes.footerList}>
                <Link smooth={true} to="/#homePage" className={classes.link}>
                  <p className={classes.listItem}>Introduction</p>
                </Link>
                <Link smooth={true} to="/#howItWork" className={classes.link}>
                  <p className={classes.listItem}>How it works</p>
                </Link>
                <Link smooth={true} to="/#getApp" className={classes.link}>
                  <p className={classes.listItem}>Download app</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Solutions</p>
                </Link>
                <Link smooth={true} to="/#otoMedia" className={classes.link}>
                  <p className={classes.listItem}>Media</p>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg>
              <h4 className={classes.header}>Solutions</h4>
              <div className={classes.footerList}>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>FASTag Parking</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Share Parking and Earn</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Find Parking</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Parking Technologies</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Parking Services</p>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg>
              <h4 className={classes.header}>About</h4>
              <div className={classes.footerList}>
                <Link
                  to="/otopark/website/aboutUs/#aboutUsTop"
                  className={classes.link}
                >
                  <p className={classes.listItem}>Vision</p>
                </Link>
                <Link
                  to="/otopark/website/aboutUs/#aboutUsTop"
                  className={classes.link}
                >
                  <p className={classes.listItem}>Team</p>
                </Link>
              </div>
            </Grid>

            <div className={classes.footerDivider}></div>

            <div className={classes.bottomDiv}>
              <Grid container>
                <Grid item xs={12} lg={6} md={6}>
                  <div className={classes.bottomTextLeft}>
                    <a
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      href="http://otopark.in/host-terms-and-conditions/"
                    >
                      Host Policy{" "}
                    </a>{" "}
                    |{" "}
                    <a
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      href="http://otopark.in/privacy-policy/"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>{" "}
                    |{" "}
                    <a
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      href="http://otopark.in/overstay-policy/"
                    >
                      Overstay Policy{" "}
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <div className={classes.bottomText}>
                    ® © 2020 otopark Technological Services Pvt. Ltd.
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
