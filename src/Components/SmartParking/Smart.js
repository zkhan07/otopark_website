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

      {/* OICCS Button */}
      {value === "OICCS" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={classes.oicssheader}>
              Integrated Command Control System for Commercial Parking
              Management
            </div>
            <div>
              <table>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <span className={classes.number}>1</span>
                    </td>
                    <td>All-in-one dashboard for parking lot administrators</td>
                  </div>
                </tr>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <span className={classes.number}>2</span>
                    </td>
                    <td>
                      Track vehicle entry and exits, revenue breakdown, monthly
                      pass holders, real time parking status, analytics and more
                    </td>
                  </div>
                </tr>
              </table>
            </div>
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

      {/* Ranger Button */}
      {value === "Ranger" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={classes.oicssheader}>
              Integrated Command Control System for Commercial Parking
              Management
            </div>
            <div>
              <table>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <span className={classes.number}>1</span>
                    </td>
                    <td>All-in-one dashboard for parking lot administrators</td>
                  </div>
                </tr>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <span className={classes.number}>2</span>
                    </td>
                    <td>
                      Track vehicle entry and exits, revenue breakdown, monthly
                      pass holders, real time parking status, analytics and more
                    </td>
                  </div>
                </tr>
              </table>
            </div>
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

      {/* Citizen App Button */}
      {value === "Citizen App" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={classes.oicssheader}>
              Integrated Command Control System for Commercial Parking
              Management
            </div>
            <div>
              <table>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <span className={classes.number}>1</span>
                    </td>
                    <td>All-in-one dashboard for parking lot administrators</td>
                  </div>
                </tr>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <span className={classes.number}>2</span>
                    </td>
                    <td>
                      Track vehicle entry and exits, revenue breakdown, monthly
                      pass holders, real time parking status, analytics and more
                    </td>
                  </div>
                </tr>
              </table>
            </div>
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

      {/* Parking Hardware Button */}
      {value === "Parking Hardware" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={classes.oicssheader}>
              Integrated Command Control System for Commercial Parking
              Management
            </div>
            <div>
              <table>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <div className={classes.number}>1</div>
                    </td>
                    <td>All-in-one dashboard for parking lot administrators</td>
                  </div>
                </tr>
                <tr>
                  <div className={classes.underContent}>
                    <td>
                      <span className={classes.number}>2</span>
                    </td>
                    <td>
                      Track vehicle entry and exits, revenue breakdown, monthly
                      pass holders, real time parking status, analytics and more
                    </td>
                  </div>
                </tr>
              </table>
            </div>
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
