import React from "react";

import "./heatmap.css";
import Footer from "../footer/Footer";

class HeatMap extends React.Component {
  state = {
    width: 0,
    height: 0,
    ratio: 190
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: Math.floor((window.innerHeight / window.innerWidth) * 100)
      });
    } else {
      this.setState({ ratio: 56.25 });
    }
  };

  render() {
    console.log(this.state);
    const ratio = `${this.state.ratio}%`;
    return (
      <React.Fragment>
        <div className="iframe-container" style={{ paddingTop: ratio }}>
          <iframe src="http://map.flatten.ca/">It's not working</iframe>
        </div>
      </React.Fragment>
    );
  }
}
export default HeatMap;
