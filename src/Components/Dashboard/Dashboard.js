import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Hero from "../Hero/Hero";
import CardPage from "../CardPage/CardPage";
import Work from "../Work/Work";
import GetApp from "../GetApp/GetApp";
import Solutions from "../Solutions/Solutions";
import Media from "../Media/Media";
import Videos from "../Videos/Videos";
import Footer from "../Footer/Footer";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
          <MobileNavbar />
          <Hero />
          <CardPage />
          {/* <Work /> */}
          <GetApp />
          {/* <Solutions /> */}
          {/* <Media /> */}
          {/* <Videos /> */}
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
