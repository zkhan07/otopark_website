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
          <div className={classes.getAppContainer}>
            <br />
            <h2 className={classes.title}>Get the app now</h2>
            <p className={classes.subTitle1}>Need Enterprise Solutions?</p>
            <p className={classes.subTitle2}>
              Contact us for business enquires
            </p>
            <img
              className={classes.firstImg}
              src={require("../../assets/images/googlePlay.png")}
            />
            <div className={classes.flexContainer}>
              <p></p>
              <Button className={classes.button}>Contact</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
