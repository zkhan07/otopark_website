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
            <p className={classes.subTitle}>Need Enterprise Solutions?</p>
            <p className={classes.subTitle}>Contact us for business enquires</p>
            <img
              className={classes.firstImg}
              src={require("../../assets/images/appStore.png")}
            />
            <img
              className={classes.secondImg}
              src={require("../../assets/images/googlePlay.png")}
            />
            <div className={classes.flexContainer}>
              <p></p>
              <Button className={classes.button}>
                Contact
                <i
                  style={{ marginLeft: "20px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
