import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

export class PostList extends Component {
  render() {
    return <div>Post List</div>;
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  };
}

const mapStateToProps = state => {
  console.log(state.posts);
  return { posts: state.posts };
};

const mapDispatchToProps = { fetchPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
