import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import UserHeader from '../UserHeader/UserHeader';

export class PostList extends Component {
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  };
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = { fetchPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
