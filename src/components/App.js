import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Info from "./pages/Info";
import WizardForm from "./Form/WizardForm";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/info" exact component={Info} />
            <Route path="/track-your-symptoms" exact component={WizardForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
