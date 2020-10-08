import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
          <MobileNavbar />
          <FaqTab />
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

// tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export function FaqTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = useState("Hosts");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectTab = value => {
    setTab(value);
    console.log(value);
  };

  const isActive = value => {
    if (tab === value) {
      return {
        backgroundColor: "#00BBDC",
        color: "#fff"
      };
    } else {
      return {
        backgroundColor: "#fff",
        color: "black"
      };
    }
  };

  return (
    <div className={classes.tabRoot}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.title}>Frequently Asked Questions</h1>
          <div className={classes.root1}>
            <Tabs
              indicatorColor="disabled"
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab
                onClick={() => selectTab("Hosts")}
                style={isActive("Hosts")}
                className={classes.tabLabel}
                label="Hosts"
                {...a11yProps(0)}
              />
              <Tab
                onClick={() => selectTab("Guests")}
                style={isActive("Guests")}
                className={classes.tabLabel}
                label="Guests"
                {...a11yProps(1)}
              />
              <Tab
                onClick={() => selectTab("Housing Societies")}
                style={isActive("Housing Societies")}
                className={classes.tabLabel}
                label="Housing Societies"
                {...a11yProps(2)}
              />
              <Tab
                onClick={() => selectTab("Parking Services")}
                style={isActive("Parking Services")}
                className={classes.tabLabel}
                label="Parking Services"
                {...a11yProps(3)}
              />
              <Tab
                onClick={() => selectTab("Smart Hardware")}
                style={isActive("Smart Hardware")}
                className={classes.tabLabel}
                label="Smart Hardware"
                {...a11yProps(4)}
              />
              <Tab
                onClick={() => selectTab("Smart Cities")}
                style={isActive("Smart Cities")}
                className={classes.tabLabel}
                label="Smart Cities"
                {...a11yProps(5)}
              />
            </Tabs>
            <TabPanel className={classes.tabsPanel} value={value} index={0}>
              <h4>1. Who is a Host?</h4>
              <p className={classes.tabPara}>
                A Host is someone who has parking space to share. Hosts can list
                their parking space and accept Guests to share out the parking
                space.
              </p>
              <br />
              <h4>2. How do I list my parking space?</h4>
              <p className={classes.tabPara}>
                With the otopark app, you can easily list your available parking
                space by first taking pictures and describing the parking type,
                address, and other relevant information that Guests may wish to
                know. When you create your listing, you decide the duration
                (hours, daya, etc) available to Guests. After your listing is
                published, You will get notifications when an interested Guest
                has booked your listing. You can also manage and edit the
                listing details right from the app.
              </p>
              <br />
              <h4>3. What kind of parking spaces can I list?</h4>
              <p className={classes.tabPara}>
                You can list all parking types, such as gated, indoor, street
                parking, or garages. If you have gated parking, your private
                code or permission to enter the gate will only be shown to
                Guests after they have booked the listing. The best tip is to
                make sure you accurately describe the parking type and provide
                clear photographs.
              </p>
              <br />
              <h4>4. What are the requirements to be a Host?</h4>
              <p className={classes.tabPara}>
                With otopark, you are expected to provide proof that you are
                either the legal owner or operator of the listes parking space.
                It is your ultimate responsibility to abide by all local laws
                and parking enforcements when applicable. As a Host, you must
                provide Guests who booked your listing with parking space that
                you have described on the listing. The parking space should be
                accessible and free from any obstructions.
              </p>
              <br />
              <h4>5. How much money can I earn?</h4>
              <p className={classes.tabPara}>
                The amount that you can potentially earn from sharing your
                parking space will vary depending on factors such as your
                location, availability, and duration. Hosts in areas with high
                demand for parking will have higher potential income. If you are
                in an area with more parking spaces and lower demand, your
                earning potential may be lower. No matter where you are, otopark
                makes it easy to list your space and earn money.
              </p>
              <br />
              <h4>6. How much should I charge for my listing?</h4>
              <p className={classes.tabPara}>
                otopark will suggest prices for your listing based on factors
                such as your location, parking type, historical demand for
                parking in your area, and more. Hosts can choose to set their
                own hourly or daily rates.
              </p>
              <br />
              <h4>7. How do I get paid?</h4>
              <p className={classes.tabPara}>
                otopark uses a secure payment processor for instant payments. We
                use a trusted third party payment processor platform to initiate
                and settle transactions. When a Guest confirms a listing and the
                booking duration is completed, the payment will be released to
                the Host.
              </p>
              <br />
              <h4>8. Can I cancel my listing?</h4>
              <p className={classes.tabPara}>
                Listings may be canceled, or deactivated, at any time if no
                bookings have been reserved. If a booking has already been
                confirmed, the Host must abide by the cancellation policies.
              </p>
            </TabPanel>
            <TabPanel className={classes.tabsPanel} value={value} index={1}>
              <h4>1. Who is a Guest?</h4>
              <p className={classes.tabPara}>
                Guests are drivers who are looking for parking. Guests can
                search and book parking spaces shared by Hosts.
              </p>
              <br />
              <h4>2. How do I find a parking spot?</h4>
              <p className={classes.tabPara}>
                With otopark, Guests can quickly find parking on demand via our
                mobile app. Guests can find available parking listed by Hosts in
                real time. Guests choose the required duration offered by the
                Hosts. Payments are immediately made to ensure the parking space
                is reserved. You will receive confirmation of the reservation
                and now can proceed to parking your vehicle in the Host’s
                parking space.
              </p>
              <br />
              <h4>3. Can I book ahead?</h4>
              <p className={classes.tabPara}>
                Yes! In addition to finding on demand parking, otopass also
                makes it easy to book in advance for a hassle-free experience.
                Simply browse for the parking listings in the location of
                interest. Guests can choose the start date and time, along with
                the duration that the listing will be reserved for. Payments are
                made in advance to secure the booking. If you need to cancel
                your booking, simply for the cancellation policies.
              </p>
              <br />
              <h4>4. How do I pay my Host?</h4>
              <p className={classes.tabPara}>
                otopark uses a secure payment processor for instant payments. We
                use a trusted third party payment processor platform to initiate
                and settle transactions. Guests pay in advance. The payment will
                be fully released to the host once the chosen duration for the
                parking spot has been completed.
              </p>
              <br />
              <h4>5. How much is the parking rate?</h4>
              <p className={classes.tabPara}>
                The parking rate will vary by factors such as location, length
                of duration, parking type, and seasonal demands. Locations with
                higher concentrations of cars will experience higher rates than
                less populated areas due to supply and demand. However, otopark
                will encourage the fair and affordable prices for Hosts to set,
                in order to bring smarter parking solutions to as many people as
                possible.
              </p>
              <br />
              <h4>6. How to enter a gated parking space?</h4>
              <p className={classes.tabPara}>
                When you book a listing that has gated and/or secured access to
                parking, the Host will share with you the necessary
                authorization to access the parking. With our app, Hosts can
                easily share the authorization with otopass to the Guests. The
                Guest simply shows or activates the otopass to securely enter
                the closed parking space.
              </p>
              <br />
              <h4>
                7. What if I have problems or got into a dispute with my Host?
              </h4>
              <p className={classes.tabPara}>
                If you encounter disputes with the Host or the parking listing
                is not as described by the Host, otopass will resolve the
                situation to set matters straight. The Host will not receive
                your payments, if applicable, until the situation has been
                resolved.
              </p>
              <br />
              <h4>8. Can I reschedule my booking?</h4>
              <p className={classes.tabPara}>
                Yes, you can reschedule your booking. Rescheduling of a booking
                is subjected to availability of the requested parking space and
                Time. You can reschedule the time and date of departure or
                arrival. Guests can also apply for rescheduling in case they
                have registered his/her booking with car A but is arriving with
                car B. Rescheduling is subjected to a fee payable by the
                customer (please refer to T&C page).
              </p>
            </TabPanel>
            <TabPanel className={classes.tabsPanel} value={value} index={2}>
              <h4>1. Who is considered a Housing Society?</h4>
              <p className={classes.tabPara}>
                If you own, rent or live in a cooperative housing unit such as
                apartments or apartment complexes, then you are considered a
                Housing Society. Eligible members in the Housing Society
                typically have a membership in the society and have access to at
                least one parking spot.
              </p>
              <br />
              <h4>
                2. Do I need to get permission from my Housing Society to list
                my parking with otopark?
              </h4>
              <p className={classes.tabPara}>
                As a member, you must be able to prove that you are allowed to
                share your allocated parking space. As the Housing Society owner
                or director, you must have the authority to share all or part of
                the available parking spaces.{" "}
              </p>
              <br />
              <h4>3. How will I get paid?</h4>
              <p className={classes.tabPara}>
                Housing Society directors, members or other designated authority
                will receive payment via otopark app or otopark Ranger app. You
                will receive payment after the booking has been successfully
                completed.
              </p>
            </TabPanel>
            <TabPanel className={classes.tabsPanel} value={value} index={3}>
              <h4>1. What kind of parking services do you offer?</h4>
              <p className={classes.tabPara}>
                Otopark offers professional services ranging from Valet, Parking
                Management, Consulting and Staffing for events. For more
                details, please contact our team.
              </p>
              <br />
              <h4>2. What If I need a parking service that’s not mentioned?</h4>
              <p className={classes.tabPara}>
                Get in touch with our team to learn more about the specific
                service you need.
              </p>
            </TabPanel>
            <TabPanel className={classes.tabsPanel} value={value} index={4}>
              <h4>
                1. Why should I choose smart hardware over existing “brick and
                mortar” solutions?
              </h4>
              <p className={classes.tabPara}>
                To create a smart parking ecosystem, we have designed our
                software and hardware to be connected in the smart parking
                ecosystem. With OICCS and Ranger, you can take full advantage of
                smart parking gates, toll booths, POS systems and more as part
                of your smart parking infrastructure.
              </p>
              <br />
              <h4>2. What kind of smart hardware do you have?</h4>
              <p className={classes.tabPara}>
                We have boom barrier gates, ticket dispensers, handheld POS
                devices, puzzled parking, ANPRs, security cameras, parking
                sensors. Don’t see the hardware you need? Contact us to talk
                about additional technologies.
              </p>
              <br />
              <h4>
                3. What if I need a specific parking hardware that’s not
                mentioned?
              </h4>
              <p className={classes.tabPara}>
                Get in touch with our team to learn more about the specific
                product you need.
              </p>
            </TabPanel>
            <TabPanel className={classes.tabsPanel} value={value} index={5}>
              <h4>1. How does otopark’s solutions help Smart Cities?</h4>
              <p className={classes.tabPara}>
                We are committed to solving the parking challenges of India.
                Providing sustainable solutions that promotes efficient resource
                management will promote collaboration between government
                entities, consumers and businesses. With our smart parking
                solutions, our vision is in alignment with Smart City
                development for sustainable, scalable and digital parking
                infrastructure development.
              </p>
              <br />
              <h4>2. What is otopark doing for Smart City development?</h4>
              <p className={classes.tabPara}>
                We are collaborating closely with strategic players and
                government organizations like BMC to promote efficient parking
                resource allocation as part of the Smart Parking initiative.
                Smart Parking includes smart parking technologies, shared
                parking, connected devices and EV-friendly infrastructure in one
                digital ecosystem. Otopark provides SaaS technologies and smart
                parking solutions for developers, governments, parking
                businesses and individuals to grow the Smart Parking and Smart
                City vision.
              </p>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
