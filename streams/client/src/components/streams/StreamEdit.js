import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

export class StreamEdit extends Component {
  render() {
    const { stream } = this.props;
    const { id } = this.props.match.params;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        Stream Id: {id}
        <br />
        Stream Title: {this.props.stream.title}
      </div>
    );
  }

  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.streams);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

const mapDispatchToProps = {
  fetchStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
