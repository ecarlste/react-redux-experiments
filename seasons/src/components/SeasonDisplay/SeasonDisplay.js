import React, { Component } from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brrr, it's chilly!",
    iconName: "snowflake"
  }
};

class SeasonDisplay extends Component {
  render() {
    const season = this.getSeason();
    const { text, iconName } = seasonConfig[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }

  getSeason() {
    const month = new Date().getMonth();

    if (this.props.lat > 0) {
      return month > 2 && month < 9 ? "summer" : "winter";
    } else {
      return month > 2 && month < 9 ? "winter" : "summer";
    }
  }
}

export default SeasonDisplay;
