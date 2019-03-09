import React, { Component } from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brrr, it's chilly!",
    iconName: "snowflake"
  }
}

class SeasonDisplay extends Component {
  render() {
    const season = this.getSeason();
    const { text, iconName } = seasonConfig[season];

    return (
      <div>
        <i className={`${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon`} />
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
