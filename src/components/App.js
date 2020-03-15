import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Info from "./Info";
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
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
