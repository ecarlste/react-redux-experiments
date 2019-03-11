import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/create" component={StreamCreate} />
            <Route path="/streams/show" component={StreamShow} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete" component={StreamDelete} />
          </Fragment>
        </Router>
      </div>
    );
  }
}
