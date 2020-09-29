import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h4 className={classes.workTitle}>How it works</h4>
          <Button className={classes.workButton}>For Drivers(Guests)</Button>
          <Button className={classes.workButton}>
            For Parking Owner(Hosts)
          </Button>
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
