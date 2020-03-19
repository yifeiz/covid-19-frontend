import React from "react";
import icon from "../../assets/doctor.png";
import world from "../../assets/world.png";
import canada from "../../assets/canada.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__left">
          <img className="home__icon" src={icon} alt="home-icon" />
        </div>

        <div className="home__right">
          <div className="home__content">
            <h1 className="title">FLATTEN</h1>
            <p className="description">
              Your platform for up-to-date information about COVID-19 in your
              community and around the world.
            </p>
            <button className="button">track your symptoms</button>
          </div>
        </div>
        <div className="world">
          <img className="stat__image" src={world} alt="world" />
          <p className="stat__text">214,894 cases</p>
        </div>
        <div className="canada">
          <img className="stat__image" src={canada} alt="canada" />
          <p className="stat__text">657 cases </p>
        </div>
      </div>
    );
  }
}

export default Home;
