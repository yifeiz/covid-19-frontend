import React from "react";
import "./AboutUs.css";

import Profile from "./Profile";

class AboutUs extends React.Component {
  render() {
    let volunteers = [
      {
        name: "Shrey Jain",
        src: "./Headshots/shrey.png",
        link: "https://www.linkedin.com/in/shrey-j-9869b213a/"
      },
      {
        name: "Yifei Zhang",
        src: "./Headshots/yifei.png",
        link: "https://www.linkedin.com/in/yifei-zhang1/"
      },
      {
        name: "Martin Staadacker",
        src: "./Headshots/martin.png",
        link: "https://www.linkedin.com/in/staad/"
      },
      {
        name: "Arthur Allshire",
        src: "./Headshots/arthur.png",
        link: "https://www.linkedin.com/in/arthur-allshire-56b06a16a/"
      },
      {
        name: "Charlie Chen",
        src: "./Headshots/charlie.png",
        link: "https://www.linkedin.com/in/hyu-chen/"
      },
      {
        name: "Emily Tao",
        src: "./Headshots/emily.png",
        link: "https://www.linkedin.com/in/emilytao2000/"
      },
      {
        name: "Surya Krishnan",
        src: "./Headshots/surya.png",
        link: "https://www.linkedin.com/in/suryakrsh/"
      },
      {
        name: "Anastasia Razdaibiedina",
        src: "./Headshots/anastasia.png",
        link: "https://www.linkedin.com/in/anastasia-razdaibiedina-438929197/"
      },
      {
        name: "Owen Brake",
        src: "./Headshots/owen.png",
        link: "OwenBrake.com"
      },
      {
        name: "Samuel Hao",
        src: "./Headshots/samuel.png",
        link: "https://www.linkedin.com/in/samuelhao/"
      },
      {
        name: "William Wen",
        src: "./Headshots/william.png",
        link: "https://www.linkedin.com/in/william-wen360/"
      },
      {
        name: "Minto Jain",
        src: "./Headshots/minto.png",
        link: "https://ca.linkedin.com/in/minto-jain-57b98144"
      },
      {
        name: "Marzyeh Ghassemi",
        src: "./Headshots/marzyeh.png",
        link: "https://www.linkedin.com/in/marzyehghassemi"
      },
      {
        name: "Robert Wu",
        src: "./Headshots/robert.png",
        link: "https://linkedin.com/in/wu-robert"
      },
      {
        name: "Siyan Zhao",
        src: "./Headshots/siyan.png"
      },
      {
        name: "Maanav Dalal",
        src: "./Headshots/maanav.png",
        link: "https://www.linkedin.com/in/maanavdalal/"
      },
      {
        name: "Sejal Jain",
        src: "./Headshots/sejal.png",
        link: "https://www.linkedin.com/in/sejal-jain-25029817b"
      },
      {
        name: "Rassam Yazdi",
        src: "./Headshots/rassam.png",
        link: "https://www.linkedin.com/in/rassam-yazdi-3a256319a/"
      }
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
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <Profile
                    link={volunteer.link}
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
