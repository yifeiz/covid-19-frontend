import React from "react";

import "./heatmap.css";

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
      <div className="iframe-container" style={{ paddingTop: ratio }}>
        <iframe src="https://map.flatten.ca/">
          Sorry, the heat-map did not load.
        </iframe>
      </div>
    );
  }
}
export default HeatMap;
