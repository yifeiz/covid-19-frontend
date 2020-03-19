import React from "react";
import icon from "../../assets/doctor.png";

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
            <button className="button">login or register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
