import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
}

const mapPropsToDispatch = {
  createStream
};

export default connect(
  null,
  mapPropsToDispatch
)(StreamCreate);
