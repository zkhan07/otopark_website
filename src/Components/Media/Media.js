import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          <div className={classes.gridContainer}>
            <p className={classes.title}>otoMedia</p>
            <p className={classes.subTitle}>
              Full-range of professional parking services such as valet, parking
              management, consulting and more
            </p>
            <Slider {...settings}>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/hindustanTimesMedia.svg")}
                    />
                    <p className={classes.para}>
                      OMG! I cannot believe that I have got a brand new landing
                      page after getting Omega. It was super easy to edit and
                      pulish.
                    </p>
                    <Button className={classes.moreButton}>
                      Click here to read full article...
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/theHinduMedia.svg")}
                    />
                    <p className={classes.para}>
                      OMG! I cannot believe that I have got a brand new landing
                      page after getting Omega. It was super easy to edit and
                      pulish.
                    </p>
                    <Button className={classes.moreButton}>
                      Click here to read full article...
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/freepressMedia.svg")}
                    />
                    <p className={classes.para}>
                      OMG! I cannot believe that I have got a brand new landing
                      page after getting Omega. It was super easy to edit and
                      pulish.
                    </p>
                    <Button className={classes.moreButton}>
                      Click here to read full article...
                    </Button>
                  </CardContent>
                </Card>
              </div>
              {/* next row */}
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/hindustanTimesMedia.svg")}
                    />
                    <p className={classes.para}>
                      OMG! I cannot believe that I have got a brand new landing
                      page after getting Omega. It was super easy to edit and
                      pulish.
                    </p>
                    <Button className={classes.moreButton}>
                      Click here to read full article...
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/theHinduMedia.svg")}
                    />
                    <p className={classes.para}>
                      OMG! I cannot believe that I have got a brand new landing
                      page after getting Omega. It was super easy to edit and
                      pulish.
                    </p>
                    <Button className={classes.moreButton}>
                      Click here to read full article...
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/freepressMedia.svg")}
                    />
                    <p className={classes.para}>
                      OMG! I cannot believe that I have got a brand new landing
                      page after getting Omega. It was super easy to edit and
                      pulish.
                    </p>
                    <Button className={classes.moreButton}>
                      Click here to read full article...
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
