import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

export class PostList extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => null;

const mapDispatchToProps = { fetchPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
