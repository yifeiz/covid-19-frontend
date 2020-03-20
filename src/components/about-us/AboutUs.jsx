import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/doctor.png";
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
      <div>
        {users.map(name => (
          <Profile name={name} />
        ))}
      </div>
    );
  }
}

export default AboutUs;
