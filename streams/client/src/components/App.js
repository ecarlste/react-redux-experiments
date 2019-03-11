import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PageOne extends Component {
  render() {
    return <div>PageOne</div>;
  }
}

class PageTwo extends Component {
  render() {
    return (
      <div>
        PageTwo
        <button>Click Me!</button>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
          </Fragment>
        </Router>
      </div>
    );
  }
}
