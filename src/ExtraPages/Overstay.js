import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Components/Navbar/Navbar";
import MobileNavbar from "../Components/MobileNavbar/MobileNavbar";

import Footer from "../Components/Footer/Footer";
import { useStyles } from "./css";

export const Host = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="overstayTop">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
          <MobileNavbar />
          <div className={classes.host}>
            <h1 className={classes.title}>OVERSTAY POLICY</h1>
            <br />
            <br />
            otopark being a responsible organization will not tolerate any
            inconvenience to its members both Hosts & Guests. <br />
            <br />
            otopark uses a 3 warning signal policy to ensure all Guests are
            aware of their responsibility to check-out of any otopark shared
            parking spot within the given timeframe. We will send these signals
            (app notification, SMS, email) in intervals of 15 minutes describing
            a warning to you as, ‘the nearing check-out time’ to ‘you have
            exceeded the booking’. Unless the Host has agreed to a later
            departure time or any other mutual arrangement (the Guest agrees
            with the Host that such agreement must be through otopark), the
            Guest will be liable to pay the full price for any additional
            duration of time stayed. Further, otopark will not be liable for any
            damages, losses or inconvenience caused by any arrangements not
            officially made through otopark as described in the Terms and
            Conditions.
            <br /> <br />
            The Guest will be liable to pay:
            <br /> <br />
            (i) the rate for every additional minute stayed until half an hour
            from exceeding the booking. After this point the Guest will also be
            charged for any costs or fines incorporated by the towing company.
            <br /> <br />
            (ii) a penalty charge of Rs.500/- to otopark for administration and
            processing as an inconvenience fee.
            <br /> <br />
            (iii) the Host shall authorise otopark to collect payment of any
            such additional fees from the Guest on behalf of the Host.
            <br /> <br />
            (iv) otopark has full discretion about whether any fees or fines
            will be applied for overstays and otopark's decision will be final.
          </div>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};
export default Host;
