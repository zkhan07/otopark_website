import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./css";

export const Smart = () => {
  const [value, setValue] = useState("OICCS");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <h1 className={classes.header}>Smart Parking Products</h1>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("OICCS")}
            className={
              value === "OICCS" ? classes.buttons : classes.unClickButtons
            }
          >
            OICCS
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("Ranger")}
            className={
              value === "Ranger" ? classes.buttons : classes.unClickButtons
            }
          >
            Ranger
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("Citizen App")}
            className={
              value === "Citizen App" ? classes.buttons : classes.unClickButtons
            }
          >
            Citizen App
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("Parking Hardware")}
            className={
              value === "Parking Hardware"
                ? classes.buttons
                : classes.unClickButtons
            }
          >
            Parking Hardware
          </Button>
        </Grid>
      </Grid>

      {/*1. OICCS Button */}
      {value === "OICCS" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              Integrated Command Control System for Commercial Parking
              Management
            </div>
            <ul>
              <li className={classes.underContent}>
                All-in-one dashboard for parking lot administrators
              </li>
              <li className={classes.underContent}>
                Track vehicle entry and exits, revenue breakdown, monthly pass
                holders, real time parking status, analytics and more
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <img
              className={classes.gifImg}
              src={require("../../assets/gif/OICCS.gif")}
            />
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {/*2. Ranger Button */}
      {value === "Ranger" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              Simple parking operations app for attendants (Rangers)
            </div>
            <ul>
              <li className={classes.underContent}>
                Track vehicles entering and exiting the parking facility,
                transact payments, and manage Rangers
              </li>
              <li className={classes.underContent}>
                Simple user interface for quick transactions and parking
                operation control
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <img
              className={classes.gif2}
              src={require("../../assets/gif/CitizenApp.gif")}
            />
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {/* 3. Citizen App Button */}
      {value === "Citizen App" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              Free app for citizens to find parking and earn money
            </div>
            <ul>
              <li className={classes.underContent}>
                Find parking and pay for the hours you need
              </li>
              <li className={classes.underContent}>
                Earn money by sharing your home parking space
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <img
              className={classes.gif1}
              src={require("../../assets/gif/Ranger.gif")}
            />
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {/* 4. Parking Hardware Button */}
      {value === "Parking Hardware" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              Suite of parking technologies for parking lots, malls, airports
              and more
            </div>
            <ul>
              <li className={classes.underContent}>
                Install boom barrier gates, Automatic Number Plate Recognition
                cameras (ANPR), FASTag sensors and more
              </li>
              <li className={classes.underContent}>
                Don’t see what you need? Contact us to learn about our full
                product offering
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <img
              className={classes.gifImg}
              src={require("../../assets/gif/ParkingHardware.gif")}
            />
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
};
