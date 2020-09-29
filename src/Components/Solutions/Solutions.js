import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.mainTitle}>Solutions</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <img
                  width="80px"
                  height="80px"
                  src={require("../../assets/images/smartParkingSolution.svg")}
                />
                <p className={classes.title}>Smart Parking</p>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                </ul>
                <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <img
                  width="80px"
                  height="80px"
                  src={require("../../assets/images/findParkingSolution.svg")}
                />
                <p className={classes.title}>Find Parking</p>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                </ul>
                <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <img
                  width="80px"
                  height="80px"
                  src={require("../../assets/images/earnMoneySolution.svg")}
                />
                <p className={classes.title}>Earn Money</p>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                </ul>
                <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        {/* next row */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <img
                  width="80px"
                  height="80px"
                  src={require("../../assets/images/fastTagSolution.svg")}
                />
                <p className={classes.title}>Fastag</p>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                </ul>
                <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <img
                  width="80px"
                  height="80px"
                  src={require("../../assets/images/findChargingSolution.svg")}
                />
                <p className={classes.title}>Find EV Charging</p>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                </ul>
                <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <img
                  width="80px"
                  height="80px"
                  src={require("../../assets/images/findServicesSolution.svg")}
                />
                <p className={classes.title}>Parking Services & Consulting</p>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots,Airports,
                      <br /> and Malls and more
                    </p>
                  </li>
                </ul>
                <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
