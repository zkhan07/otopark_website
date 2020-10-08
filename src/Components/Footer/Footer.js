import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { useStyles } from "./css";
import { Divider } from "@material-ui/core";

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
                    style={{
                      padding: "10px",
                      height: "10px",
                      width: "10px",
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
                    style={{
                      padding: "10px",
                      height: "10px",
                      width: "10px",
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
                    style={{
                      padding: "10px",
                      height: "10px",
                      width: "10px",
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
                    style={{
                      padding: "10px",
                      height: "10px",
                      width: "10px",
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
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <h4 className={classes.header}>Home</h4>
              <div className={classes.footerList}>
                <p>Introduction</p>
                <p>How it works</p>
                <p>Download app</p>
                <p>Solutions</p>
                <p>Media</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <h4 className={classes.header}>Solutions</h4>
              <div className={classes.footerList}>
                <p>FASTag Parking</p>
                <p>Share Parking and Earn</p>
                <p>Find Parking</p>
                <p>Parking Technologies</p>
                <p>Parking Services</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <h4 className={classes.header}>About</h4>
              <div className={classes.footerList}>
                <p>Vision</p>
                <p>Team</p>
              </div>
            </Grid>

            <div className={classes.footerDivider}></div>

            <div className={classes.bottomDiv}>
              <Grid container>
                <Grid item xs={12} lg={6} md={6}>
                  <div className={classes.bottomTextLeft}>
                    Term & Conditions | Privacy Policy | Legal
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
