import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Steamer
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            My Streams
          </Link>
        </div>
      </div>
    );
  }
}
