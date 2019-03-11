import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  render() {
    return this.renderAuthButton();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(window.firebase.auth().currentUser.uid);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    window.firebase.auth().signInWithPopup(new window.firebase.auth.GoogleAuthProvider().addScope('email'));
  };

  onSignOutClick = () => {
    window.firebase.auth().signOut();
  };

  componentDidMount = () => {
    this.onAuthChange(Boolean(window.firebase.auth().currentUser));
    window.firebase.auth().onAuthStateChanged(this.onAuthChange);
  };
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

const mapDispatchToProps = {
  signIn,
  signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
