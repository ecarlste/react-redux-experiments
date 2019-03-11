import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  render() {
    return this.renderAuthButton();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if I'm are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in</div>;
    } else {
      return <div>I am signed out</div>;
    }
  }

  onAuthChange = () => {
    console.log('env', process.env);
    this.setState({ isSignedIn: Boolean(window.firebase.auth().currentUser) });
  };

  componentDidMount = () => {
    this.setState({ isSignedIn: Boolean(window.firebase.auth().currentUser) });
    window.firebase.auth().onAuthStateChanged(this.onAuthChange);
  };
}
