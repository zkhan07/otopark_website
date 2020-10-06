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
        <Grid item xs={12} md={12} lg={3}>
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
        <Grid item xs={12} md={12} lg={3}>
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
        <Grid item xs={12} md={12} lg={3}>
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
        <Grid item xs={12} md={12} lg={3}>
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

      {value === "OICCS" ? (
        <Grid container>
          <Grid item xs={12} lg={12} md={12} className={classes.oicssgrid}>
            <Grid item xs={12} md={12} lg={4}>
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
                      <td>
                        All-in-one dashboard for parking lot administrators
                      </td>
                    </div>
                  </tr>
                  <tr>
                    <div className={classes.underContent}>
                      <td>
                        <span className={classes.number}>2</span>
                      </td>
                      <td>
                        Track vehicle entry and exits, revenue breakdown,
                        monthly pass holders, real time parking status,
                        analytics and more
                      </td>
                    </div>
                  </tr>
                </table>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={8}></Grid>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
};
