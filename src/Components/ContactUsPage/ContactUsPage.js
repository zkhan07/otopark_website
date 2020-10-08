import { Button, Grid, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import ButtonAppBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <>
      <ButtonAppBar />
      <MobileNavbar />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MyContact />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* <div className={classes.map}> */}
            <iframe
              className={classes.mapframe}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=319%20Monash%20Building%2C%20IIT%20Bombay%2C%20%20Powai%20Mumbai%20400076%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            {/* </div> */}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

// new component MY Contact page
export function MyContact() {
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      <h1 className={classes.title}>Contact Us</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <form>
            <label className={classes.label}>Your Name</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Your Name"
            />
            <br />
            <br />
            <label className={classes.label}>Email Address</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Email Address"
            />
            <br />
            <br />
            <label className={classes.label}>Subject</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Subject"
            />
            <br />
            <br />
            <label className={classes.label}>Message</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              multiline
              rows={4}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Message"
            />
            <br />
            <br />
          </form>
          <Button className={classes.submitButton}>Send Message</Button>
        </Grid>
      </Grid>
    </div>
  );
}
