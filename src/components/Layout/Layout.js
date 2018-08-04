import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Landing from "../Landing/Landing";
import NotFound from "../NotFound/NotFound";

const Layout = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
