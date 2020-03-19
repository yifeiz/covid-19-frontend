import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Info from "./components/header/Header";
import SymptomForm from "./components/form/SymptomForm";
import history from "./history";

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" exact component={Info} />
          <Route path="/track-your-symptoms" exact component={SymptomForm} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
