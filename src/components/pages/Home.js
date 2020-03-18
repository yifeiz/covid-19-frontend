import React from "react";
import icon from "../../assets/doctor.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__left">
          <img src={icon} />
        </div>

        <div className="home__right">
          <h1>FLATTEN</h1>
          <p>
            Your platform for up-to-date information about COVID-19 in your
            community and around the world.
          </p>
          <button>login or register</button>
        </div>
      </div>
    );
  }
}

export default Home;
