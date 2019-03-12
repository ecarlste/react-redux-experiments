import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Fragment>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/create" component={StreamCreate} />
            <Route path="/streams/show" component={StreamShow} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
          </Fragment>
        </Router>
      </div>
    );
  }
}
