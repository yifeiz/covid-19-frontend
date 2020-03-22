import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import Sponsors from "./components/sponsors/Sponsors";
import Info from "./components/info/Info";
import SymptomPage from "./components/form/SymptomPage";
import HeatMap from "./components/heatmap/HeatMap";
import history from "./history";
import Disclaimer from "./components/disclaimer/disclaimer";
import "./main.css";

const App = () => {
  return (
    <React.Fragment>
      <Router history={history} style={{ height: "auto" }}>
        <Header />
        <Disclaimer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" exact component={Info} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/sponsors" exact component={Sponsors} />
          <Route path="/track-your-symptoms" exact component={SymptomPage} />
          <Route path="/heat-map" exact component={HeatMap} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
