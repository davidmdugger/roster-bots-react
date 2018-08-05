import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Landing from "../Landing/Landing";
import Team from "../Team/Team";
import NotFound from "../NotFound/NotFound";

import Navigation from "../Navigation/Navigation";

const Layout = props => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/team" component={Team} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
