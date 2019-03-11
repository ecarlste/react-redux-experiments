import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

export class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }

  componentDidMount = () => {
    this.props.fetchUser(this.props.userId);
  };
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
