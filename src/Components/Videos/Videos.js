import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import "video-react/dist/video-react.css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ color: "#00BBDC", marginTop: "100px" }}>Watch Videos</h1>
      <div className={classes.videoContainer}>
        <Player
          className={classes.videoPlayer}
          poster={require("../../assets/images/blueLogo.png")}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player>
      </div>
      <h2 style={{ marginTop: "50px", marginBottom: "50px" }}>
        How to book parking on otopark
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Player
            poster={require("../../assets/images/blueLogo.png")}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Player
            poster={require("../../assets/images/blueLogo.png")}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Player
            poster={require("../../assets/images/blueLogo.png")}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </Grid>
      </Grid>
    </div>
  );
}
