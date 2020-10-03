import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useStyles } from "./css";

export default function FullWidthGrid() {
  const [value, setValue] = useState("Driver");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h4 className={classes.workTitle}>How it works</h4>
          <div className={classes.btn}>
            <Button
              onClick={() => setValue("Driver")}
              className={
                value === "Driver"
                  ? classes.workButton
                  : classes.unclickedworkButton
              }
            >
              {value === "Driver" ? (
                <img
                  className={classes.img}
                  src={require("../../assets/icons/taxi-driver.svg")}
                />
              ) : (
                <img
                  className={classes.img}
                  src={require("../../assets/icons/icon-09.svg")}
                />
              )}
              For Drivers (Guests)
            </Button>
            <Button
              onClick={() => setValue("Parking")}
              className={
                value === "Parking"
                  ? classes.workButton
                  : classes.unclickedworkButton
              }
            >
              {value === "Parking" ? (
                <img
                  className={classes.img}
                  src={require("../../assets/icons/icon-12.svg")}
                />
              ) : (
                <img
                  className={classes.img}
                  src={require("../../assets/icons/landlord.svg")}
                />
              )}
              For Parking Owner (Hosts)
            </Button>
          </div>
          <div>
            <img
              className={classes.workImg}
              src={require("../../assets/images/workPageImg.svg")}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
