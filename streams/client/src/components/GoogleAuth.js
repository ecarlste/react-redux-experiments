import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  render() {
    return this.renderAuthButton();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="icon google" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="icon google" />
          Sign In with Google
        </button>
      );
    }
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: Boolean(window.firebase.auth().currentUser) });
  };

  onSignInClick = () => {
    window.firebase.auth().signInWithPopup(new window.firebase.auth.GoogleAuthProvider().addScope('email'));
  };

  onSignOutClick = () => {
    window.firebase.auth().signOut();
  };

  componentDidMount = () => {
    this.setState({ isSignedIn: Boolean(window.firebase.auth().currentUser) });
    window.firebase.auth().onAuthStateChanged(this.onAuthChange);
  };
}
