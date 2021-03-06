import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";
import TabSlider from "../TabSlider/TabSlider";

export default function FullWidthGrid() {
  const classes = useStyles();
  const [tabName, setTabName] = useState("Search");

  const selectTab = value => {
    setTabName(value);
    console.log(value);
  };

  return (
    <div className={classes.root} id="innovationTop">
      <h1 className={classes.mainTitle}>Our Innovations</h1>
      <Grid container spacing={2} className={classes.mobileView}>
        <Grid item lg={12}>
          <TabSlider />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.desktopView}>
        <Grid item lg={12}>
          {tabName === "Search" ? (
            <img
              alt="bgImage1"
              className={classes.BgImage}
              src={require("../../../assets/images/innovationBgImg1.png")}
            />
          ) : tabName === "Entry" ? (
            <img
              alt="bgImage2"
              className={classes.BgImage}
              src={require("../../../assets/images/innovationBgImg2.png")}
            />
          ) : tabName === "Park" ? (
            <img
              alt="bgImage3"
              className={classes.BgImage}
              src={require("../../../assets/images/innovationBgImg3.png")}
            />
          ) : tabName === "Value" ? (
            <img
              alt="bgImage4"
              className={classes.BgImage}
              src={require("../../../assets/images/innovationBgImg4.png")}
            />
          ) : tabName === "Finish" ? (
            <img
              alt="bgImage5"
              className={classes.BgImage}
              src={require("../../../assets/images/innovationBgImg5.png")}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <Grid container className={classes.desktopView}>
        <Grid container spacing={2}>
          <Grid item lg>
            <Button
              onClick={() => selectTab("Search")}
              className={
                tabName === "Search"
                  ? classes.selectedTab
                  : classes.unselectedTab
              }
            >
              Search & Navigate
            </Button>
          </Grid>
          <Grid item lg>
            <Button
              onClick={() => selectTab("Entry")}
              className={
                tabName === "Entry"
                  ? classes.selectedTab
                  : classes.unselectedTab
              }
            >
              Entry with otopass
            </Button>
          </Grid>
          <Grid item lg>
            <Button
              onClick={() => selectTab("Park")}
              className={
                tabName === "Park" ? classes.selectedTab : classes.unselectedTab
              }
            >
              Park your vehicle
            </Button>
          </Grid>
          <Grid item lg>
            <Button
              onClick={() => selectTab("Value")}
              className={
                tabName === "Value"
                  ? classes.selectedTab
                  : classes.unselectedTab
              }
            >
              Value Added Service
            </Button>
          </Grid>
          <Grid item lg>
            <Button
              onClick={() => selectTab("Finish")}
              className={
                tabName === "Finish"
                  ? classes.selectedTab
                  : classes.unselectedTab
              }
            >
              Finish
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.desktopView}>
        <Grid item lg={12}>
          {tabName === "Search" ? (
            <Search />
          ) : tabName === "Entry" ? (
            <Entry />
          ) : tabName === "Park" ? (
            <Park />
          ) : tabName === "Value" ? (
            <Value />
          ) : tabName === "Finish" ? (
            <Finish />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}

// card 1 Search
export function Search() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "-70px", overflowX: "hidden" }}
        >
          <Grid item lg={6} data-aos="fade-right" data-aos-duration="3000">
            <img
              className={classes.image}
              src={require("../../../assets/images/img1.png")}
              alt="image1"
            />
          </Grid>
          <Grid
            item
            lg={6}
            className={classes.cardContainer}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h4 className={classes.title}>Search & Navigate</h4>
            <p className={classes.para}>
              Search for nearby parking based on your desired amenities and
              pricing
            </p>
            <Link smooth={true} to="/faq/#faqTop">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// card 2 Entry
export function Entry() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "-70px", overflowX: "hidden" }}
        >
          <Grid item lg={6} data-aos="fade-right" data-aos-duration="3000">
            <img
              className={classes.image}
              src={require("../../../assets/images/img2.png")}
              alt="image2"
            />
          </Grid>
          <Grid
            item
            lg={6}
            className={classes.cardContainer}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h4 className={classes.title}>Entry with otopass</h4>
            <p className={classes.para}>
              Arrive securely with our patented dynamic otopass accessible on
              the app
            </p>
            <Link smooth={true} to="/faq/#faqTop">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// card 3 Park
export function Park() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "-70px", overflowX: "hidden" }}
        >
          <Grid item lg={6} data-aos="fade-right" data-aos-duration="3000">
            <img
              className={classes.image}
              src={require("../../../assets/images/img3.png")}
              alt="image3"
            />
          </Grid>
          <Grid
            item
            lg={6}
            className={classes.cardContainer}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h4 className={classes.title}>Park your vehicle</h4>
            <p className={classes.para}>
              Park and track your booking status right from the app
            </p>
            <Link smooth={true} to="/faq/#faqTop">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// card 4 Value
export function Value() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "-70px", overflowX: "hidden" }}
        >
          <Grid item lg={6} data-aos="fade-right" data-aos-duration="3000">
            <img
              className={classes.image}
              src={require("../../../assets/images/img4.png")}
              alt="image4"
            />
          </Grid>
          <Grid
            item
            lg={6}
            className={classes.cardContainer}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h4 className={classes.title}>Value Added Service</h4>
            <p className={classes.para}>
              Enhance your parking experience by changing your EV while you work
            </p>
            <Link smooth={true} to="#electricVehicle">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// card 5 Finish
export function Finish() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "-70px", overflowX: "hidden" }}
        >
          <Grid item lg={6} data-aos="fade-right" data-aos-duration="3000">
            <img
              className={classes.image}
              src={require("../../../assets/images/img5.png")}
              alt="image5"
            />
          </Grid>
          <Grid
            item
            lg={6}
            className={classes.cardContainer}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h4 className={classes.title}>Finish</h4>
            <p className={classes.para}>
              Exit parking and rate your experience <br />
              Need more? Explore otopark app for more features
            </p>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.otopark.Otopark.oto.park.my.car.vehicle.find.parking.lot.space.host.user&hl=en_US"
            >
              <button className={classes.moreButton}>
                Download App{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
