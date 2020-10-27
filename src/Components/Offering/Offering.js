import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.mainTitle}>Our Offering</h1>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/residentesIcon.svg")}
            />
            <h4 className={classes.title}>Residents</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/commercialIcon.svg")}
            />
            <h4 className={classes.title}>Commercial</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/housingIcon.svg")}
            />
            <h4 className={classes.title}>Housing Societies</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/smartCityIcon.svg")}
            />
            <h4 className={classes.title}>Smart Cities</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/parkingIcon.svg")}
            />
            <h4 className={classes.title}>Parking Operators</h4>
          </div>
        </Grid>
        <Grid item sm lg={12} className={classes.mobileView}></Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/electricIcon.svg")}
            />
            <h4 className={classes.title}>Electric Vehicles</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/valetIcon.svg")}
            />
            <h4 className={classes.title}>Valet Parking</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/corporatesIcon.svg")}
            />
            <h4 className={classes.title}>Corporates</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/icons/govermentIcon.svg")}
            />
            <h4 className={classes.title}>Government</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg></Grid>
      </Grid>
    </div>
  );
}
