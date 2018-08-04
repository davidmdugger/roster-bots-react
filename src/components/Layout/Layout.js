import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Landing from "../Landing/Landing";

const Layout = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
