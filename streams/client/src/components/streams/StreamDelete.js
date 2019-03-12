import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }

  renderContent = () => {
    let content = <h3>Are you usre you want to delete this stream?</h3>;
    let streamInfo = this.props.stream ? this.renderStreamInfo() : '';

    return (
      <Fragment>
        {content}
        {streamInfo}
      </Fragment>
    );
  };

  renderActions = () => {
    return (
      <Fragment>
        <div className="ui negative button">Delete</div>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  };

  renderStreamInfo() {
    return (
      <Fragment>
        <p>
          <b>Title:</b>
          <br /> {this.props.stream.title}
        </p>
        <p>
          <b>Description:</b>
          <br /> {this.props.stream.description}
        </p>
      </Fragment>
    );
  }

  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

const mapDispatchToProps = {
  fetchStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDelete);
