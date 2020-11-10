import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useStyles } from "./css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        padding: "10px",
        display: "block",
        background: "#00BBDC"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: "1",
        borderRadius: "50%",
        padding: "10px",
        display: "block",
        background: "#00BBDC"
      }}
      onClick={onClick}
    />
  );
}

export default function FullWidthGrid() {
  const classes = useStyles();

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 7000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} ms={12} lg={12}>
          <Slider {...settings}>
            {/* 1st Card */}
            <div>
              <Grid container spacing={2} style={{ overflowX: "hidden" }}>
                <Grid
                  item
                  lg={6}
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <img
                    className={classes.image}
                    src={require("../../../assets/images/innovationSearchImg.png")}
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
                    Search for nearby parking based on your desired amenities
                    and pricing
                  </p>
                  <Link smooth={true} to="/#solutions">
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
            {/* 2nd Card */}
            <div>
              <Grid container spacing={2} style={{ overflowX: "hidden" }}>
                <Grid
                  item
                  lg={6}
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <img
                    className={classes.image}
                    src={require("../../../assets/images/innovationEntryImg.png")}
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
                    Arrive securely with our patented dynamic otopass accessible
                    on the app
                  </p>
                  <Link smooth={true} to="#solutions">
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
            {/* 3rd Card */}
            <div>
              <Grid container spacing={2} style={{ overflowX: "hidden" }}>
                <Grid
                  item
                  lg={6}
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <img
                    className={classes.image}
                    src={require("../../../assets/images/innovationParkImg.png")}
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
                  <Link smooth={true} to="#solutions">
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
            {/* 4th Card */}
            <div>
              <Grid container spacing={2} style={{ overflowX: "hidden" }}>
                <Grid
                  item
                  lg={6}
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <img
                    className={classes.image}
                    src={require("../../../assets/images/innovationValueImg.png")}
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
                    Enhance your parking experience by changing your EV while
                    your work
                  </p>
                  <Link smooth={true} to="#solutions">
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
            {/* 5th Card */}
            <div>
              <Grid container spacing={2} style={{ overflowX: "hidden" }}>
                <Grid
                  item
                  lg={6}
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <img
                    className={classes.image}
                    src={require("../../../assets/images/innovationFinishImg.png")}
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
                    Need more ? Explore otopark app for more features
                  </p>
                  <Link smooth={true} to="#solutions">
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
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
}