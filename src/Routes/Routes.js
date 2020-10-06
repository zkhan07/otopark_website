import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AppStreamCam from "../Components/Test/Test";

import Loader from "../util/Loader/Loader";

const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));
const AboutUsPage = lazy(() => import("../Components/AboutUsPage/AboutUsPage"));
const FaqPage = lazy(() => import("../Components/FaqPage/FaqPage"));
const CaseStudy = lazy(() => import("../Components/CaseStudy/Casestudy"));

const ContactUsPage = lazy(() =>
  import("../Components/ContactUsPage/ContactUsPage")
);
const NotFound = lazy(() => import("../util/NotFound/NotFound"));

export const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route
            exact
            path="/otopark/website/aboutUs"
            component={AboutUsPage}
          />
          <Route exact path="/otopark/website/faq" component={FaqPage} />
          <Route
            exact
            path="/otopark/website/caseStudy"
            component={CaseStudy}
          />
          <Route
            exact
            path="/otopark/website/contactUs"
            component={ContactUsPage}
          />
          <Route
            exact
            path="/otopark/website/appstream"
            component={AppStreamCam}
          />

          <Route exact path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
