import React, { Component } from "react";

class SeasonDisplay extends Component {
  render() {
    const season = this.getSeason();
    const text =
      season === "summer" ? "Let's hit the beach!" : "Brrr, it's chilly!";
    const icon = season === "summer" ? "sun" : "snowflake";

    return (
      <div>
        <i className={`${icon} icon`} />
        <h1>{text}</h1>
        <i className={`${icon} icon`} />
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
