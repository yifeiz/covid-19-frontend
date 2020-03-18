import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./pages/Home";
import Info from "./pages/Info";
import SymptomForm from "./Form/SymptomForm";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/info" exact component={Info} />
            <Route path="/track-your-symptoms" exact component={SymptomForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
