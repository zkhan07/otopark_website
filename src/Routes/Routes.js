import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Loader from "../util/Loader/Loader";

const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));

const NotFound = lazy(() => import("../util/NotFound/NotFound"));

export const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route exact path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
