import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import Sponsors from "./components/sponsors/Sponsors";
import Info from "./components/info/Info";
import SymptomPage from "./components/form/SymptomPage";
import HeatMap from "./components/heatmap/HeatMap";
import history from "./history";
import "./main.css";

import Protected from "./components/notLoggedIn/notLoggedIn";

const App = props => {
  return (
    <React.Fragment>
      <Router history={history} style={{ height: "auto" }}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" exact component={Info} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/sponsors" exact component={Sponsors} />
          <Route
            path="/log-your-health"
            exact
            component={props.loggedIn ? SymptomPage : Protected}
          />
          <Route path="/heat-map" exact component={HeatMap} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  if (state.account) {
    return { loggedIn: state.account.tokenId };
  }
  return { loggedIn: null };
};
export default connect(mapStateToProps)(App);
