import React from "react";
import "./AboutUs.css";

import Profile from "./Profile";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let users = [
      "Shrey Jain",
      "Yifei Zhang",
      "Martin Staadacker",
      "Charlie Chen",
      "Sejal Jain",
      "Maanav Dalal",
      "Surya Krishnan",
      "Arthur Allshire",
      "Robert Li",
      "Siyan Zhao",
      "Rassam Yazdi",
      "Owen Brake",
      "William Wen",
      "Minto Jain",
      "Anastasia Razdaibiedina",
      "Emily Tao",
      "Benjamin Fine"
    ];

    return (
      <div className="App">
        <section>
          <h1 className="title"> About Us </h1>
          <p className="description">
            Here are the amazing volunteers who made this project possible!
          </p>
          <hr className="line" />
        </section>
        <section className="profiles">
          <div className="container-fluid d-flex justify-content-center">
            <div className="row about-us-row">
              {users.map(name => (
                <div className="col-md-3">
                  <Profile name={name} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
