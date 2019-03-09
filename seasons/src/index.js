import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>loading...</div>;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
