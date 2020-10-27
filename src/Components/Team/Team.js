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
      {/* <p className={classes.headingPara}>We are the worlds best team</p> */}

      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/akash.png")}
          />
          <h4 className={classes.profileTitle}>Aakash Gupta</h4>
          <p className={classes.profileSubTitle}>Chief Executive Officer</p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/abhimanyu.png")}
          />
          <h4 className={classes.profileTitle}>Abhimanyu Yadav</h4>
          <p className={classes.profileSubTitle}>Chief Marketing Officer</p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/hikaru.png")}
          />
          <h4 className={classes.profileTitle}>Hikaru Kasai</h4>
          <p className={classes.profileSubTitle}>Chief Strategy Officer</p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/lokesh.png")}
          />
          <h4 className={classes.profileTitle}>Lokesh Singh</h4>
          <p className={classes.profileSubTitle}>Chief Technology Officer</p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/sanjay.png")}
          />
          <h4 className={classes.profileTitle}>Sanjay Gund</h4>
          <p className={classes.profileSubTitle}>Chief Product Officer</p>
        </Grid>
        <Grid item lg={12} className={classes.mobileView}></Grid>
        {/* next column */}
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/abhishek.png")}
          />
          <h4 className={classes.profileTitle}>Abhishek Tyagi</h4>
          <p className={classes.profileSubTitle}>Financial Advisor</p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/krishna.png")}
          />
          <h4 className={classes.profileTitle}>Krishna Reddy</h4>
          <p className={classes.profileSubTitle}>Chief Identity Officer</p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/ram.png")}
          />
          <h4 className={classes.profileTitle}>Ram Prajapati</h4>
          <p className={classes.profileSubTitle}>
            Chief Administrative Officer
          </p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/yagya.png")}
          />
          <h4 className={classes.profileTitle}>Yagya Prakash</h4>
          <p className={classes.profileSubTitle}>Developer</p>
        </Grid>
        <Grid item xs={6} sm={6} md lg>
          <img
            className={classes.profileImage}
            src={require("../../assets/profile/zaid.png")}
          />
          <h4 className={classes.profileTitle}>Zaid Khan</h4>
          <p className={classes.profileSubTitle}>Developer</p>
        </Grid>
      </Grid>
    </div>
  );
}
