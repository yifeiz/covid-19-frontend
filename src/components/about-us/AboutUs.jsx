import React from "react";
import "./AboutUs.css";

import Profile from "./Profile";

class AboutUs extends React.Component {
  render() {
    let volunteers = [
      { name: "Shrey Jain", src: "./Headshots/shrey.png" },
      { name: "Yifei Zhang", src: "./Headshots/yifei.png" },
      { name: "Martin Staadacker", src: "./Headshots/martin.png" },
      { name: "Arthur Allshire", src: "./Headshots/arthur.png" },
      { name: "Charlie Chen", src: "./Headshots/charlie.png" },
      { name: "Emily Tao", src: "./Headshots/emily.png" },
      { name: "Surya Krishnan", src: "./Headshots/surya.png" },
      { name: "Anastasia Razdaibiedina", src: "./Headshots/anastasia.png" },
      { name: "Owen Brake", src: "./Headshots/owen.png" },
      { name: "Samuel Hao", src: "./Headshots/samuel.png" },
      { name: "William Wen", src: "./Headshots/william.png" },
      { name: "Marzyeh Ghassemi", src: "./Headshots/marzyeh.png" },
      { name: "Robert Li", src: "./Headshots/robert.png" },
      { name: "Siyan Zhao", src: "./Headshots/siyan.png" },
      { name: "Maanav Dalal", src: "./Headshots/maanav.png" },
      { name: "Sejal Jain", src: "./Headshots/sejal.png" },
      { name: "Minto Jain", src: "./Headshots/minto.png" },
      { name: "Rassam Yazdi", src: "./Headshots/rassam.png" }
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
              {volunteers.map((volunteer, index) => (
                <div className="col-md-3">
                  <Profile
                    name={volunteer.name}
                    src={volunteer.src}
                    key={index}
                  />
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
