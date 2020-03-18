import React from "react";
import icon from "../../assets/doctor.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__left">
          <img src={icon} />
        </div>

        <div className="home__right"> </div>
      </div>
    );
  }
}

export default Home;
