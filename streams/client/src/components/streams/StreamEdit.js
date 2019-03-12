import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

export class StreamEdit extends Component {
  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm initialValues={_.pick(stream, 'title', 'description')} onSubmit={this.onSubmit} />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

const mapDispatchToProps = {
  editStream,
  fetchStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
