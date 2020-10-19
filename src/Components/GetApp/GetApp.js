import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.otopark.Otopark.oto.park.my.car.vehicle.find.parking.lot.space.host.user&hl=en_US"
            >
              <img
                className={classes.googlePlayImg}
                src={require("../../assets/images/googlePlay.png")}
              />
            </a>
            <div className={classes.flexContainer}>
              <p></p>
              <Link className={classes.link} to="/otopark/website/contactUs">
                <Button className={classes.button}>Contact</Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
