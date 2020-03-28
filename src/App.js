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
import "./main.css";

let heatmapDisclaimerText = `All results are from preliminary models based on evolving data. 
  Models will continue to undergo testing and further development, and results should not be
  considered final or peer-reviewed. All findings should be interpreted with caution. 
  This model does not determine areas that are safe or at risk. It simply identifies 
  the status of the individuals reporting on FLATTEN in a given region.`;

const App = () => {
  return (
    <React.Fragment>
      <Router history={history} style={{ height: "auto" }}>
        <Header />
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
