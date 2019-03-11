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
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="icon google" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="icon google" />
          Sign In with Google
        </button>
      );
    }
  }

  onAuthChange = () => {
    console.log('env', process.env);
    this.setState({ isSignedIn: Boolean(window.firebase.auth().currentUser) });
  };

  onSignIn = () => {
    window.firebase.auth().signInWithPopup(new window.firebase.auth.GoogleAuthProvider().addScope('email'));
  };

  onSignOut = () => {
    window.firebase.auth().signOut();
  };

  componentDidMount = () => {
    this.setState({ isSignedIn: Boolean(window.firebase.auth().currentUser) });
    window.firebase.auth().onAuthStateChanged(this.onAuthChange);
  };
}
