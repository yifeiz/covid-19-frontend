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
            Flatten est une plateforme pour organismes sans but lucratif qui
            collige des renseignements en temps réel au sujet de la propagation
            de la COVID-19 localement et partout au pays.
          </p>
          <Link to={"/track-your-symptoms"}>
            <button className="red-button">
              Cliquez sur le formulaire et suivez la propagation de la COVID-19
            </button>
          </Link>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Home;
