import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./home.css";
import Disclaimer from "../disclaimer/Disclaimer";

const Home = () => (
  <React.Fragment>
    <Disclaimer />
    <div className="home">
      <div className="home__left">
        <p className="home__label"></p>
      </div>

      <div className="home__right">
        <div className="home__content">
          <img className="home__logo" src={logo} />
          <p className="home__subtitle">
            FLATTEN is a not-for-profit organization platform for collecting and
            providing real time information regarding the spread of COVID-19 in
            your local community and around the nation.
          </p>
          <Link to={"/track-your-symptoms"}>
            <button className="red-button">
              Click to fill form and view map to see the spread of COVID
            </button>
          </Link>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Home;
