import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      id="solutions"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <br />
      <br />
      <br />
      <h2 className={classes.mainTitle}>Solutions</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <div className={classes.flexContainer}>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    width="70px"
                    height="70px"
                    src={require("../../assets/images/smartParkingSolution.svg")}
                  />
                  <p className={classes.title}>Smart Parking</p>
                </div>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For MLCPs, Parking Lots, Airports, and Malls and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      End to end smart parking ecosystem and technologies
                    </p>
                  </li>
                </ul>
                {/* <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <div className={classes.flexContainer}>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    width="70px"
                    height="70px"
                    src={require("../../assets/images/findParkingSolution.svg")}
                  />
                  <p className={classes.title}>Find Parking</p>
                </div>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For Individuals and Fleets
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Find available parking and book through the app
                    </p>
                  </li>
                </ul>

                {/* <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <div className={classes.flexContainer}>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    width="70px"
                    height="70px"
                    src={require("../../assets/images/earnMoneySolution.svg")}
                  />
                  <p className={classes.title}>Earn Money</p>
                </div>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For Individuals, Fleet Owners, MLCPs, Businesses, Parking
                      Lots and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Earn money by sharing your unused parking space
                    </p>
                  </li>
                </ul>

                {/* <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        {/* next row */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <div className={classes.flexContainer}>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    width="70px"
                    height="70px"
                    src={require("../../assets/images/fastTagSolution.svg")}
                  />
                  <p className={classes.title}>FASTag</p>
                </div>
                <ul>
                  <li>
                    <p className={classes.subTitle}>For FASTag owners</p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Seamlessly enter parking lots and automatically pay for
                      parking fee with your FASTag
                    </p>
                  </li>
                </ul>

                {/* <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <div className={classes.flexContainer}>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    width="70px"
                    height="70px"
                    src={require("../../assets/images/findChargingSolution.svg")}
                  />
                  <p className={classes.title}>Find EV Charging</p>
                </div>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For Electric Vehicle Owners
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Find available parking and EV charging stations in the
                      cities
                    </p>
                  </li>
                </ul>

                {/* <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <div>
                <div className={classes.flexContainer}>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    width="70px"
                    height="70px"
                    src={require("../../assets/images/findServicesSolution.svg")}
                  />
                  <p className={classes.title}>Parking Services & Consulting</p>
                </div>
                <ul>
                  <li>
                    <p className={classes.subTitle}>
                      For Smart Cities, Businesses, Event Operators, Parking
                      Lots and more
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Professional parking and consulting services
                    </p>
                  </li>
                </ul>
                {/* <div className={classes.flexContainer}>
                  <p></p>
                  <Button className={classes.moreButton}>
                    Learn More{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      class="fa fa-chevron-right"
                    ></i>
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
