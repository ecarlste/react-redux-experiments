import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import Loader from "./components/Loader/Loader";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  render() {
    return this.renderContent();
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Attemping to find your location..." />;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
